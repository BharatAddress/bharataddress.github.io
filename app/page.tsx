export default function HomePage() {
  return (
    <section>
      <h1 style={{ fontSize: 36, marginBottom: 12 }}>Bharat Address</h1>
      <p style={{ fontSize: 18, color: '#444', maxWidth: 740 }}>
        Open-source specifications, APIs, validator tools, and reference clients for a unified address ecosystem.
      </p>
      <div style={{ marginTop: 24 }}>
        <a href="/docs/" style={btn}>Read the Docs</a>
        <a href="/developers/" style={{ ...btn, marginLeft: 12, background: '#fff', color: '#0366d6', border: '1px solid #0366d6' }}>Developers</a>
      </div>
      <div style={{ marginTop: 40 }}>
        <h2>Key Projects</h2>
        <ul>
          <li><a href="https://github.com/BharatAddress/api-server">API Server</a> — FastAPI reference OGC API Features read API</li>
          <li><a href="https://github.com/BharatAddress/specs">Specs</a> — JSON Schema, OpenAPI, normative docs</li>
          <li><a href="https://github.com/BharatAddress/clients">Clients</a> — TypeScript and Python client SDKs</li>
          <li><a href="https://github.com/BharatAddress/tools-validator">Validator</a> — JSON Schema validator CLI</li>
          <li><a href="https://github.com/BharatAddress/tools-converters">Converters</a> — Import/convert utilities</li>
        </ul>
      </div>
    </section>
  );
}

const btn: React.CSSProperties = {
  display: 'inline-block',
  background: '#0366d6',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: 6,
  textDecoration: 'none',
};

