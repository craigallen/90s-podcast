// ---------------------------------------------------------------------------
// SITE CONFIG — edit everything site-wide from this one file.
// ---------------------------------------------------------------------------
// This is the single source of truth for editable content:
//   - podcast name + tagline
//   - the RSS feed URL episodes are pulled from
//   - "Listen on" distribution platform links (header/footer/home)
//   - host bios shown on the /about page
//
// You should rarely need to touch anything outside this file for routine
// content updates.
// ---------------------------------------------------------------------------

export const siteConfig = {
  /** Podcast name — shown in the header logo, footer, and page titles. */
  name: "Your Podcast",

  /** One-line tagline shown under the name on the home page. */
  tagline: "A short, catchy tagline that describes your show.",

  /** Longer description used for SEO / metadata. */
  description:
    "Your Podcast is a show about the things you care about. Replace this " +
    "description with a sentence or two about what listeners can expect.",

  /**
   * Show the bundled sample episodes instead of fetching a live RSS feed.
   *
   * This ships as `true` so the Home and Archive pages look populated out of
   * the box. When you're ready to go live, set this to `false` and point
   * `feedUrl` below at your real feed. See the README for the full checklist
   * (and how to delete the sample data).
   */
  useSampleEpisodes: true,

  /**
   * The podcast RSS feed URL. Episodes (titles, descriptions, artwork, dates,
   * and listen links) are parsed from this feed server-side.
   *
   * Only used when `useSampleEpisodes` is `false`. To change the feed, just
   * replace the URL below.
   */
  feedUrl: "https://example.com/your-podcast/feed.xml",

  /**
   * "Listen on" links to distribution platforms.
   * These are placeholders — replace `href` values with your real show pages.
   * Order here is the order they render in.
   */
  platforms: [
    { name: "Apple Podcasts", href: "https://podcasts.apple.com/" },
    { name: "Spotify", href: "https://open.spotify.com/" },
    { name: "YouTube", href: "https://youtube.com/" },
    { name: "RSS", href: "https://example.com/your-podcast/feed.xml" },
  ],
} as const;

// ---------------------------------------------------------------------------
// HOST BIOS — shown on /about. Edit text + headshot image paths here.
// Headshots live in /public (so e.g. "/hosts/host-1.svg" => public/hosts/host-1.svg).
// Drop in real images and update the `image` path to match.
//
// Add or remove entries to match the number of hosts on your show.
// ---------------------------------------------------------------------------

export const hosts = [
  {
    name: "Host One",
    image: "/hosts/host-1.svg",
    bio:
      "This is placeholder bio text — replace it with this host's real " +
      "introduction. Add a couple of sentences about who they are, why they " +
      "host the show, and what they bring to it.",
  },
  {
    name: "Host Two",
    image: "/hosts/host-2.svg",
    bio:
      "This is placeholder bio text — replace it with this host's real " +
      "introduction. Add a couple of sentences about who they are, why they " +
      "host the show, and what they bring to it.",
  },
] as const;

export type Platform = (typeof siteConfig.platforms)[number];
export type Host = (typeof hosts)[number];
