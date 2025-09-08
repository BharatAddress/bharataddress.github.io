"use client";

import { useState } from 'react';

export default function ApiPage() {
  const [baseUrl, setBaseUrl] = useState<string>(
    process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000'
  );
  const [query, setQuery] = useState<string>('/collections/addresses/items?limit=5');
  const [resp, setResp] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const run = async () => {
    setLoading(true);
    setError(null);
    setResp(null);
    try {
      const url = new URL(query, baseUrl).toString();
      const r = await fetch(url);
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || `HTTP ${r.status}`);
      setResp(data);
    } catch (e: any) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>API</h1>
      <p>Try the reference API endpoints.</p>

      <div style={{ display: 'grid', gap: 8, maxWidth: 720 }}>
        <label>
          API Base URL
          <input
            style={{ width: '100%', padding: 8, marginTop: 4 }}
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="https://api.example.org"
          />
        </label>
        <label>
          Path/Query
          <input
            style={{ width: '100%', padding: 8, marginTop: 4 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="/collections/addresses/items?limit=5"
          />
        </label>
        <div>
          <button className="btn" onClick={run} disabled={loading}>
            {loading ? 'Fetching…' : 'Fetch'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: 24 }}>
        {error && <div style={{ color: 'crimson' }}>Error: {error}</div>}
        {resp && (
          <div>
            <div>Type: {resp.type || '—'}</div>
            {Array.isArray(resp.features) && (
              <div>Features: {resp.features.length}</div>
            )}
            <pre style={{ background: '#f6f8fa', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
{JSON.stringify(resp, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <h2>Usage</h2>
      <p>JavaScript:</p>
      <pre style={{ background: '#f6f8fa', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
{`const url = 'https://bharataddress.github.io/collections/addresses/items?limit=5';
const resp = await fetch(url);
const data = await resp.json();`}
      </pre>

      <p>Python (requests):</p>
      <pre style={{ background: '#f6f8fa', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
{`import requests
url = 'https://bharataddress.github.io/collections/addresses/items?limit=5'
r = requests.get(url, timeout=30)
r.raise_for_status()
data = r.json()`}
      </pre>
    </section>
  );
}

