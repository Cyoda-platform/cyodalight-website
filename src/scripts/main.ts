/**
 * main.ts — Cyoda site JavaScript
 *
 * Handles only:
 *   1. Language tab switching (LanguageTabGroup) with localStorage persistence
 *   2. Install panel tab switching (InstallPanel)
 *   3. Copy-to-clipboard buttons (CodeBlock)
 *   4. Mobile hamburger drawer toggle (NavBar)
 *   5. GitHub star count fetch (NavBar)
 *
 * Loaded deferred at end of <body>. No framework. No dependencies.
 * Estimated < 3KB gzipped.
 *
 * Spec references: sections 12, 18, 19, 23.
 */

const LANG_STORAGE_KEY = 'cyoda-lang';

// ---------------------------------------------------------------------------
// 1. Language Tab Groups
// ---------------------------------------------------------------------------

function initLangTabs(): void {
  const groups = document.querySelectorAll<HTMLElement>('[data-lang-tab-group]');
  if (!groups.length) return;

  const savedLang = localStorage.getItem(LANG_STORAGE_KEY);

  function activateTab(group: HTMLElement, targetLang: string): void {
    const tabs = group.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const panels = group.querySelectorAll<HTMLElement>('[role="tabpanel"]');

    let activated = false;

    tabs.forEach((tab, i) => {
      const isTarget = tab.dataset.lang === targetLang;
      const isFirst = i === 0;
      const shouldActivate = isTarget || (!activated && isFirst && !tabs[Symbol.iterator]().toString());

      tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');

      if (isTarget) activated = true;
    });

    // If no tab matched the saved lang, fall back to first tab
    if (!activated) {
      tabs[0]?.setAttribute('aria-selected', 'true');
    }

    // Show/hide panels to match
    tabs.forEach((tab, i) => {
      const isSelected = tab.getAttribute('aria-selected') === 'true';
      tab.classList.toggle('is-active', isSelected);

      const panel = panels[i];
      if (panel) {
        panel.setAttribute('aria-hidden', isSelected ? 'false' : 'true');
        panel.classList.toggle('is-active', isSelected);
      }
    });
  }

  function switchAllGroups(lang: string): void {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    groups.forEach((group) => activateTab(group, lang));
  }

  groups.forEach((group) => {
    const tabs = group.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    // Apply saved lang on init
    if (savedLang) {
      activateTab(group, savedLang);
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const lang = tab.dataset.lang;
        if (lang) switchAllGroups(lang);
      });

      // Keyboard navigation: arrow keys within tablist
      tab.addEventListener('keydown', (e: KeyboardEvent) => {
        const allTabs = Array.from(group.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
        const index = allTabs.indexOf(tab);

        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = allTabs[(index + 1) % allTabs.length];
          next?.focus();
          next?.click();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = allTabs[(index - 1 + allTabs.length) % allTabs.length];
          prev?.focus();
          prev?.click();
        } else if (e.key === 'Home') {
          e.preventDefault();
          allTabs[0]?.focus();
          allTabs[0]?.click();
        } else if (e.key === 'End') {
          e.preventDefault();
          allTabs[allTabs.length - 1]?.focus();
          allTabs[allTabs.length - 1]?.click();
        }
      });
    });
  });
}

// ---------------------------------------------------------------------------
// 2. Install Panel Tab Switching
// ---------------------------------------------------------------------------

function initInstallPanels(): void {
  const panels = document.querySelectorAll<HTMLElement>('[data-install-panel]');
  if (!panels.length) return;

  panels.forEach((panel) => {
    const tabs = panel.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    const tabPanels = panel.querySelectorAll<HTMLElement>('[role="tabpanel"]');

    function activate(index: number): void {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
        tab.classList.toggle('is-active', active);
      });

      tabPanels.forEach((tp, i) => {
        const active = i === index;
        tp.setAttribute('aria-hidden', active ? 'false' : 'true');
        tp.classList.toggle('is-active', active);
      });
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => activate(i));

      tab.addEventListener('keydown', (e: KeyboardEvent) => {
        const allTabs = Array.from(tabs);
        const index = allTabs.indexOf(tab);

        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = (index + 1) % allTabs.length;
          allTabs[next]?.focus();
          activate(next);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = (index - 1 + allTabs.length) % allTabs.length;
          allTabs[prev]?.focus();
          activate(prev);
        }
      });
    });
  });
}

// ---------------------------------------------------------------------------
// 3. Copy-to-Clipboard Buttons
// ---------------------------------------------------------------------------

function initCopyButtons(): void {
  const liveRegion = document.getElementById('sr-copy-live');

  document.querySelectorAll<HTMLButtonElement>('.code-block__copy').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const source = btn.dataset.copySource;
      if (!source) return;

      try {
        await navigator.clipboard.writeText(source);
        btn.textContent = 'Copied!';
        btn.classList.add('code-block__copy--success');

        if (liveRegion) liveRegion.textContent = 'Code copied to clipboard.';

        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('code-block__copy--success');
          if (liveRegion) liveRegion.textContent = '';
        }, 2000);
      } catch {
        btn.textContent = 'Failed';
        setTimeout(() => {
          btn.textContent = 'Copy';
        }, 2000);
      }
    });
  });
}

// ---------------------------------------------------------------------------
// 4. Mobile Hamburger Drawer
// ---------------------------------------------------------------------------

function initHamburger(): void {
  const hamburger = document.getElementById('navbar-hamburger');
  const drawer = document.getElementById('navbar-drawer');
  if (!hamburger || !drawer) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    drawer.classList.toggle('is-open', !isOpen);
  });

  // Close drawer on Escape
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
      hamburger.focus();
    }
  });

  // Close drawer when a link is clicked
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-open');
    });
  });
}

// ---------------------------------------------------------------------------
// 5. GitHub Star Count
// ---------------------------------------------------------------------------

async function fetchGitHubStars(): Promise<void> {
  const el = document.getElementById('github-star-count');
  if (!el) return;

  const REPO = 'Cyoda-platform/cyoda-light-go';
  const CACHE_KEY = 'cyoda-github-stars';
  const CACHE_TTL = 60 * 60 * 1000; // 1 hour

  // Try cache first
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { count, ts } = JSON.parse(cached) as { count: number; ts: number };
      if (Date.now() - ts < CACHE_TTL) {
        el.textContent = formatStars(count);
        el.style.display = '';
        return;
      }
    }
  } catch {
    // sessionStorage unavailable — continue to fetch
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });
    if (!res.ok) return;

    const data = (await res.json()) as { stargazers_count?: number };
    const count = data.stargazers_count ?? 0;

    el.textContent = formatStars(count);
    el.style.display = '';

    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ count, ts: Date.now() }));
    } catch {
      // sessionStorage unavailable — skip cache
    }
  } catch {
    // Network or parse error — silently omit star count per spec
  }
}

function formatStars(n: number): string {
  if (n >= 1000) return `★ ${(n / 1000).toFixed(1)}k`;
  return `★ ${n}`;
}

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initLangTabs();
  initInstallPanels();
  initCopyButtons();
  initHamburger();
  fetchGitHubStars().catch(() => {});
});
