"use strict";
(() => {
  const config = window.CRITTER_SITE || {};
  const allowed = value => {
    if (typeof value !== "string") return "";
    try { const url = new URL(value); return (url.protocol === "https:" || url.protocol === "http:") ? url.href : ""; }
    catch { return ""; }
  };
  let enabled = 0;
  document.querySelectorAll('[data-config-link]').forEach(el => {
    const url = allowed(config[el.dataset.configLink]);
    if (!url) return;
    el.href = url;
    el.classList.remove('disabled');
    el.removeAttribute('aria-disabled');
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    enabled++;
  });
  const status = document.getElementById('download-status');
  if (status) status.textContent = enabled === 2 ? 'Both patch links are available. Follow the release instructions before installing.' : enabled === 1 ? 'One edition is linked; the other will appear when its patch URL is added.' : 'Patch links will appear here when the actual release files are added. No commercial game ROM is hosted on this site.';
  [['updates-link','projectUpdatesUrl'], ['issues-link','issueTrackerUrl']].forEach(([id, key]) => {
    const el = document.getElementById(id);
    const url = allowed(config[key]);
    if (!el || !url) return;
    el.href = url;
    el.classList.remove('hidden');
    const placeholder=document.getElementById('updates-placeholder');
    if(placeholder)placeholder.classList.add('hidden');
  });
})();
