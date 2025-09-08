import './globals.css'

export const metadata = {
  title: 'Bharat Address',
  description: 'Open-source specs, API, clients, and tools for Bharat Address',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <a href="/" style={{ fontWeight: 700, fontSize: 18 }}>Bharat Address</a>
          <nav className="nav" style={{ float: 'right' }}>
            <a href="/docs/">Docs</a>
            <a href="/developers/">Developers</a>
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
