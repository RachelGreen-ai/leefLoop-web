import Link from "next/link";
import { SITE_NAME } from "../lib/site-brand";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Main navigation">
      <Link className="brand-mark" href="/" aria-label={`${SITE_NAME} home`}>
        <span className="brand-symbol">R</span>
        <span>
          <strong>{SITE_NAME}</strong>
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
        <strong>{SITE_NAME}</strong>
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
