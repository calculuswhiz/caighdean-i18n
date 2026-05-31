// Scan all document links to make sure that all internal links point to a valid target
// This is for: 
// - navigation elements: #sec_1_1_5, #sec_1_1_5_a_i, etc.
// - table links: #table11F, #table11AA, etc

import * as fs from 'fs/promises';
import * as path from 'path';
import { JSDOM } from 'jsdom';
import { _nn } from '../src/util';

const scanDir = "./entrypoints";

/** [document name] -> Set of seen targets */
const seenTargets: Record<string, Set<string>> = {};

(async () => {
  const allFiles = (await fs.readdir(scanDir, {
    withFileTypes: true, recursive: true
  })).filter(f => f.isFile() && f.name.endsWith('.html'));

  // Scan for link targets
  for (const file of allFiles) {
    // TODO I did not account for languages here. The bookIndex causes problems with false positives
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
    }
  }

  // Re-scan for links and validate against seen targets
  for (const file of allFiles) {
    const jsdom = await JSDOM.fromFile(path.join(file.parentPath, file.name));
    const document = jsdom.window.document;

    const allLinks = document.querySelectorAll<HTMLAnchorElement>('a[href]');
    for (const link of allLinks) {
      /* Possible forms:
        - May start with ./chapterXX.html
        - May contain id:
          - #sec_1_1_5
          - #table11F
       */
      const href = link.getAttribute('href') ?? "";
      if (href.startsWith('#')) {
        // In-document anchor. All ids should be scanned now.
        const targetId = href.substring(1);
        const isValid = seenTargets[file.name].has(targetId);
        if (!isValid) {
          console.warn(`Invalid # link in ${file.name}: ${href}`);
        }
      } else if (href.startsWith('./')) {
        // Link to another document. May still contain an anchor
        const [targetDoc, targetId] = href.slice(2).split('#');
        if (targetId !== undefined) {
          if (!(seenTargets[targetDoc]?.has(targetId))) {
            console.warn(`Invalid link in ${file.name}: ${href}`);
          }
        } else {
          // No anchor
          if (!(seenTargets[targetDoc])) {
            console.warn(`Invalid link in ${file.name}: ${href}`);
          }
        }
      }
    }
  }
})();
