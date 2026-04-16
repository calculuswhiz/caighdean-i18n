// Scan all document links to make sure that all internal links point to a valid target
// This is for: 
// - navigation elements: #sec_1_1_5, #sec_1_1_5_a_i, etc.
// - table links: #table11F, #table11AA, etc

import * as fs from 'fs/promises';
import * as path from 'path';
import { JSDOM } from 'jsdom';
import { _nn } from '../src/util';

const scanDir = "./entrypoints";

/** [document name] -> [target ID] -> isValid */
const matchedLinks: Record<string,
  Record<string, boolean>
> = {};
/** [document name] -> Set of seen targets */
const seenTargets: Record<string, Set<string>> = {};

(async () => {
  const allFiles = (await fs.readdir(scanDir, {
    withFileTypes: true, recursive: true
  })).filter(f => f.isFile() && f.name.endsWith('.html'));

  for (const file of allFiles) {
    matchedLinks[file.name] = {};
    seenTargets[file.name] = new Set();

    const jsdom = await JSDOM.fromFile(path.join(file.parentPath, file.name));
    const document = jsdom.window.document;

    // Collect all link targets (things with ids)
    const allTargets = document.querySelectorAll('[id]');
    for (const target of allTargets) {
      const id = target.id;
      if (seenTargets[file.name].has(id)) {
        console.warn(`Duplicate target found: ${id} (in ${file.name})`);
      } else {
        seenTargets[file.name].add(id);
      }

      if (matchedLinks[file.name][id] !== undefined) {
        // Pending validation, mark as true
        matchedLinks[file.name][id] = true;
      }
    }

    const allLinks = document.querySelectorAll<HTMLAnchorElement>('a[href]');
    for (const link of allLinks) {
      /* Possible forms:
        - May start with ./chapterXX.html
        - May contain id:
          - #sec_1_1_5
          - #table11F
       */
      if (link.href.startsWith('#')) {
        // In-document anchor. All ids should be scanned now.
        const targetId = link.href.substring(1);
        const isValid = seenTargets[file.name].has(targetId);
        matchedLinks[file.name][targetId] = isValid;
        if (!isValid) {
          console.warn(`Invalid # link in ${file.name}: ${link.href}`);
        }
      } else if (link.href.startsWith('./')) {
        // Link to another document. May still contain an anchor
        const [targetDoc, targetId] = link.href.slice(2).split('#');
        if (targetId !== undefined) {
          matchedLinks[targetDoc][targetId ?? ""] 
            = seenTargets[targetDoc]?.has(targetId) ?? false;
        } else {
          // No anchor
          matchedLinks[targetDoc][""] = seenTargets[targetDoc] !== undefined;
        }
      }
    }
  }

  console.log("Link validation results:");
  const invalidLinks = [];
  for (const [doc, targets] of Object.entries(matchedLinks)) {
    for (const [target, isValid] of Object.entries(targets)) {
      if (!isValid) {
        invalidLinks.push({ doc, target });
        console.warn(`Invalid link in ${doc}: #${target}`);
      }
    }
  }

  if (invalidLinks.length === 0) {
    console.log("All links are valid!");
  } else {
    console.warn(`Found ${invalidLinks.length} invalid links.`);
  }
})();
