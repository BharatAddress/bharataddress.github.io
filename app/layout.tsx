import './globals.css'
import 'maplibre-gl/dist/maplibre-gl.css'

export const metadata = {
  title: 'Bharat Address',
  description: 'Open-source specs, API, clients, and tools for Bharat Address',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <header>
          <a href="/" style={{ fontWeight: 700, fontSize: 18, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <img src="/logo.svg" alt="Bharat Address" width={24} height={24} />
            Bharat Address
          </a>
          <nav className="nav" style={{ float: 'right' }}>
            <a href="/docs/">Docs</a>
            <a href="/developers/">Developers</a>
            <a href="/playground/">Playground</a>
            <a href="/api/">API</a>
            <a href="https://github.com/BharatAddress" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Bharat Address</footer>
      </body>
    </html>
  );
}
