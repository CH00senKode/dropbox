import { wireHandlers } from './handlers.js';
import { prepareAnimations } from './animations.js';

/* Change these values to reuse the page without shifting its layout. */
const folderTemplate = {
  folderName: 'GM Parts Photos',
  sharedBy: 'Alejandro Chavez',
  itemName: 'damaged photos',
  modified: '--',
  size: '--',
  loginLink: '#',
  signupLink: '#',
  itemLink: '#',
};

for (const element of document.querySelectorAll('[data-field]')) {
  const key = element.dataset.field;
  if (!(key in folderTemplate)) continue;
  if (element.hasAttribute('href')) element.href = folderTemplate[key];
  const textKey = element.dataset.fieldText ? element.dataset.fieldText : key;
  if (!element.hasAttribute('href') && textKey in folderTemplate) element.textContent = folderTemplate[textKey];
}

const setFolderTitle = () => {
  document.title = `${folderTemplate.folderName} — Dropbox`;
};

document.title = 'Dropbox';
if (document.readyState === 'complete') setFolderTitle();
else window.addEventListener('load', setFolderTitle, { once: true });

wireHandlers();
prepareAnimations();
