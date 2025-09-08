"use client";

import { useEffect, useRef, useState } from 'react';
import type { Map as MapLibreMap } from 'maplibre-gl';

export default function PlaygroundPage() {
  const mapRef = useRef<MapLibreMap | null>(null);
  const mapEl = useRef<HTMLDivElement | null>(null);
  const [baseUrl, setBaseUrl] = useState<string>(
    process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000'
  );
  const [pin, setPin] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [limit, setLimit] = useState<number>(200);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let canceled = false;
    (async () => {
      const { Map } = await import('maplibre-gl');
      if (canceled) return;
      const map = new Map({
        container: mapEl.current as HTMLDivElement,
        style: 'https://demotiles.maplibre.org/style.json',
        center: [78.9629, 20.5937], // India
        zoom: 4,
        attributionControl: true,
      });
      mapRef.current = map;
    })();
    return () => {
      canceled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL('/collections/addresses/items', baseUrl);
      url.searchParams.set('limit', String(limit));
      if (pin) url.searchParams.set('pin', pin);
      if (city) url.searchParams.set('city', city);
      const r = await fetch(url.toString());
      const gj = await r.json();
      if (!r.ok) throw new Error(gj?.error || `HTTP ${r.status}`);
      const map = mapRef.current;
      if (!map) return;
      const srcId = 'addresses';
      const layerId = 'addresses-layer';

      if (map.getLayer(layerId)) map.removeLayer(layerId);
      if (map.getSource(srcId)) (map.getSource(srcId) as any).setData(gj);
      else map.addSource(srcId, { type: 'geojson', data: gj } as any);

      map.addLayer({
        id: layerId,
        type: 'circle',
        source: srcId,
        paint: {
          'circle-radius': 5,
          'circle-color': '#d61f69',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#ffffff',
        },
      } as any);

      // Fit to data
      if (Array.isArray(gj?.features) && gj.features.length) {
        const bounds = new (await import('maplibre-gl')).LngLatBounds();
        for (const f of gj.features) {
          if (f?.geometry?.type === 'Point') {
            const [x, y] = f.geometry.coordinates;
            bounds.extend([x, y]);
          }
        }
        if (!bounds.isEmpty()) {
          map.fitBounds(bounds, { padding: 40, duration: 500 });
        }
      }
    } catch (e: any) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Playground</h1>
      <p>Visualize API items on a map using MapLibre GL.</p>

      <div style={{ display: 'grid', gap: 8, maxWidth: 960, gridTemplateColumns: '1fr 1fr 1fr 120px' }}>
        <input placeholder="API Base (https://api.example.org)" value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)} />
        <input placeholder="Filter PIN (e.g., 560008)" value={pin} onChange={(e) => setPin(e.target.value)} />
        <input placeholder="Filter City (e.g., Bengaluru)" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="number" min={1} max={10000} value={limit} onChange={(e) => setLimit(parseInt(e.target.value || '100', 10))} />
      </div>

      <div style={{ marginTop: 8 }}>
        <button className="btn" disabled={loading} onClick={load}>{loading ? 'Loading…' : 'Load on Map'}</button>
        {error && <span style={{ color: 'crimson', marginLeft: 12 }}>Error: {error}</span>}
      </div>

      <div ref={mapEl} style={{ height: 540, marginTop: 16, borderRadius: 8, overflow: 'hidden', border: '1px solid #eee' }} />
    </section>
  );
}

