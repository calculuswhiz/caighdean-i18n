import { makeToC } from "./tableOfContents";

makeToC();

// Ensures that the hash link works after the DOM is fully loaded and scripts have run
if (location.hash) {
  const targetElement = document.querySelector<HTMLElement>(location.hash);
  targetElement?.scrollIntoView();
}
