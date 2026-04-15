// This runtime script reads headings and uses them to make Table of Contents for a chapter

function createListItem(heading: HTMLHeadingElement): HTMLLIElement {
  const li = document.createElement("li");
  li.classList.add('toc-item', 'my-1');

  const a = document.createElement("a");
  a.href = `#${heading.id}`;
  a.textContent = heading.querySelector('.heading-title')?.textContent ?? "";

  li.appendChild(a);
  return li;
}

// Runtime non-null assertion
function _nn<T>(value: T | null | undefined, message?: string): NonNullable<T> {
  if (value === null || value === undefined)
    throw new Error(message ?? "Unexpected null or undefined value");

  return value as NonNullable<T>;
}

/** Scan DOM, adding Table of Contents element to the document.
 * Also processes heading IDs for easier reference linking.
 * Will not add TOC if there are no headings.
 */
export function makeToC() {
  const headings = document.querySelectorAll<HTMLHeadingElement>("h2,h3,h4,h5,h6");

  if (headings.length === 0)
    return;

  const showHideSpan = _nn(document.querySelector<HTMLSpanElement>("#toc-toggle"));

  showHideSpan.addEventListener('click', () => {
    rootList.classList.toggle('hidden');
  });

  const tocContainer = _nn(document.querySelector<HTMLDivElement>("#toc-container"));

  const rootList = _nn(document.querySelector<HTMLUListElement>("#toc-container ul"));
  tocContainer.append(rootList);

  let writeRef = rootList;

  // Normalized at 0 = h2
  let currentLevel = 0;
  for (const heading of headings) {
    // Ignore certain headings
    if (
      // Empty after number
      heading.textContent?.replace(/\d+(\.\d+)+/, '').trim() === ""
      // Starts with capital letter (A/B starts)
      || /^[A-Z] /.test(heading.textContent ?? "")
    ) {
      continue;
    }

    const level = parseInt(heading.tagName.substring(1)) - 2;
    const levelDiff = level - currentLevel;

    if (levelDiff > 0) {
      for (let i = 0; i < levelDiff; i++) {
        const newList = document.createElement("ul");
        newList.classList.add('toc-list', 'list-disc', 'ml-4', 'mt-1', 'mb-1', 'pl-4');
        writeRef.append(newList);
        writeRef = newList;
      }

      currentLevel = level;
      if (heading.querySelector('.title-text') != null)
        writeRef.append(createListItem(heading));
    } else if (levelDiff < 0) {
      for (let i = 0; i < -levelDiff; i++) {
        if (writeRef.parentElement) {
          const parent = writeRef.parentElement.closest('ul');
          if (parent)
            writeRef = parent;
        }
      }

      currentLevel = level;
      if (heading.querySelector('.title-text') != null)
        writeRef.append(createListItem(heading));
    } else {
      // Same level
      if (heading.querySelector('.title-text') != null)
        writeRef.append(createListItem(heading));
    }
  }
}
