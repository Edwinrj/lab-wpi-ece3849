import React, { useEffect, useState } from 'react';

// Lightweight wrapper that tries to dynamically load the official React component
// from `@orama/react-components`. If the package is not installed locally, it
// attempts to load it from the CDN (unpkg) as ESM. This avoids hard-failing at
// build time while allowing you to `npm i @orama/react-components` for the
// preferred local installation.

const DEFAULT_INDEX = {
  endpoint: 'https://cloud.orama.run/v1/indexes/ece3849-wpiembedded-com-p0o155',
  api_key: 'LT41lZzY70svuLDOs9jwemEnVt0yXMKO', // blank by default; set via props or env in production
};

export default function OramaSearchReact(props) {
  const [OpenComponent, setOpenComponent] = useState(null);
  const [loadedFrom, setLoadedFrom] = useState(null);
  const [open, setOpen] = useState(props.open ?? true);

  const searchBoxConfig = props.searchBoxConfig ?? { themeConfig: {} };
  const index = props.index ?? DEFAULT_INDEX;

  useEffect(() => {
    let mounted = true;

    async function tryLoad() {
      // 1) Try local package first
      try {
        const mod = await import('@orama/react-components');
        if (!mounted) return;
        // prefer named export OramaSearchBox, or default
        const Comp = mod?.OramaSearchBox ?? mod?.default ?? null;
        if (Comp) {
          setOpenComponent(() => Comp);
          setLoadedFrom('local');
          return;
        }
      } catch (err) {
        // ignore and fall back to CDN
        // console.debug('Local @orama/react-components not available:', err);
      }

      // 2) Try CDN (unpkg) ESM build
      try {
        const url = 'https://unpkg.com/@orama/react-components?module';
        const mod = await import(url);
        if (!mounted) return;
        const Comp = mod?.OramaSearchBox ?? mod?.default ?? null;
        if (Comp) {
          setOpenComponent(() => Comp);
          setLoadedFrom('cdn');
          return;
        }
      } catch (err) {
        console.warn('Could not load Orama React component from CDN:', err);
      }

      // nothing available
      setOpenComponent(() => null);
    }

    tryLoad();
    return () => (mounted = false);
  }, []);

  if (OpenComponent) {
    const Component = OpenComponent;
    return (
      <Component
        open={open}
        index={index}
        {...searchBoxConfig}
      />
    );
  }

  // Fallback UI if component couldn't be loaded
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <input
        type="search"
        placeholder={props.placeholder ?? 'Search docs...'}
        onFocus={() => setOpen(true)}
        style={{ padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc' }}
      />
      <button
        onClick={() => alert('Orama React component not loaded. Run `npm i @orama/react-components` to enable.')}
        style={{ padding: '6px 10px' }}
      >
        Search
      </button>
      <small style={{ opacity: 0.7 }}>
        (Orama React component not installed — {loadedFrom ?? 'not loaded'})
      </small>
    </div>
  );
}
