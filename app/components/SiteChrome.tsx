import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <Link className="brand-mark" href="/" aria-label="Garden Companion home">
        <span className="brand-symbol">g</span>
        <span>
          <strong>garden companion</strong>
          <small>plant notes for real homes</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/notes">Plant Notes</Link>
        <Link href="/plantpulse">Trending Plants</Link>
        <Link href="/garden-blog">Garden Stories</Link>
      </nav>
      <Link className="header-cta" href="/#newsletter">
        Subscribe
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>garden companion</strong>
        <p>
          Fresh, practical plant notes for indoor corners, local finds, small gardens, and
          seasonal tables.
        </p>
      </div>
      <div>
        <Link href="/notes">Plant Notes</Link>
        <Link href="/plantpulse">Trending Plants</Link>
        <Link href="/garden-blog">Garden Stories</Link>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/#newsletter">Subscribe</Link>
      </div>
    </footer>
  );
}
