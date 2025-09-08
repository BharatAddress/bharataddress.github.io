export default function DevelopersPage() {
  return (
    <section>
      <h1>Developers</h1>
      <p>Get started building with Bharat Address.</p>

      <h2>Repositories</h2>
      <ul>
        <li><a href="https://github.com/BharatAddress/api-server">api-server</a></li>
        <li><a href="https://github.com/BharatAddress/specs">specs</a></li>
        <li><a href="https://github.com/BharatAddress/clients">clients</a></li>
        <li><a href="https://github.com/BharatAddress/tools-validator">tools-validator</a></li>
        <li><a href="https://github.com/BharatAddress/tools-converters">tools-converters</a></li>
        <li><a href="https://github.com/BharatAddress/docs-site">docs-site</a></li>
      </ul>

      <h2>Contributing</h2>
      <p>
        Read the <a href="https://github.com/BharatAddress/specs/blob/main/CONTRIBUTING.md">contributing guide</a> and our
        <a href="https://github.com/BharatAddress/specs/blob/main/CODE_OF_CONDUCT.md"> Code of Conduct</a>.
      </p>
      <p>
        Join by opening issues, discussions, or pull requests across the repos. We welcome contributions from municipalities,
        civic-tech groups, and developers.
      </p>

      <h2>API Quickstart</h2>
      <pre>
uvicorn main:app --reload
# Then visit /collections/addresses/items
      </pre>

      <h2>Docs</h2>
      <p>
        Full documentation is available at <a href="/docs/">/docs</a>.
      </p>
    </section>
  );
}

