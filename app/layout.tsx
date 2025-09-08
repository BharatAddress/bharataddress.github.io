export const metadata = {
  title: 'Bharat Address',
  description: 'Open-source specs, API, clients, and tools for Bharat Address',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Helvetica, Arial, sans-serif', margin: 0 }}>
        <header style={{ padding: '16px 24px', borderBottom: '1px solid #eee' }}>
          <a href="/" style={{ fontWeight: 700, fontSize: 18, color: '#111', textDecoration: 'none' }}>Bharat Address</a>
          <nav style={{ float: 'right' }}>
            <a href="/docs/" style={{ marginRight: 16 }}>Docs</a>
            <a href="/developers/" style={{ marginRight: 16 }}>Developers</a>
            <a href="https://github.com/BharatAddress" target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </header>
        <main style={{ maxWidth: 960, margin: '0 auto', padding: '40px 24px' }}>{children}</main>
        <footer style={{ borderTop: '1px solid #eee', padding: '16px 24px', textAlign: 'center', color: '#666' }}>
          © {new Date().getFullYear()} Bharat Address
        </footer>
      </body>
    </html>
  );
}

