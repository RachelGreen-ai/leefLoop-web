import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import { SITE_NAME } from "../lib/site-brand";
import { buildSocialMetadata } from "../lib/social-metadata";

const pageTitle = "Privacy";
const pageDescription =
  `How ${SITE_NAME} handles newsletter and plant-signal information.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/privacy" },
  ...buildSocialMetadata({ title: pageTitle, description: pageDescription, path: "/privacy" }),
};

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <article className="policy-page">
        <p className="eyebrow">Privacy</p>
        <h1>A short, plain-language privacy note.</h1>
        <p className="policy-updated">Last updated July 20, 2026</p>

        <section>
          <h2>What we collect</h2>
          <p>
            When you subscribe, we collect your email address and any region or plant interest you
            choose to share. When you send a trending-plant observation, we collect the plant, broad
            place or context, observation type, and optional email address.
          </p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>
            We use this information to send plant notes, understand which topics and places are
            useful, improve future guides, and respond to submissions. We do not sell personal
            information.
          </p>
        </section>
        <section>
          <h2>Where it is stored</h2>
          <p>
            Early subscriber and plant-signal records are stored in a private Google Sheet through
            a protected form connection. Hosting and analytics providers may process basic request
            information needed to operate and protect the site.
          </p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>
            Every newsletter will include a way to unsubscribe. You may also reply to a newsletter
            to request access, correction, or deletion of the information connected to your email.
          </p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
