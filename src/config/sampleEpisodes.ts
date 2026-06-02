// ---------------------------------------------------------------------------
// SAMPLE EPISODES — placeholder content for the mockup.
// ---------------------------------------------------------------------------
// These ten made-up episodes let the Home and Archive pages look fully
// populated before you've connected a real RSS feed. They are used INSTEAD of
// fetching the feed whenever `siteConfig.useSampleEpisodes` is `true`.
//
// >>> To go live with your real show, see the "Switching from sample data to a
//     real feed" section in README.md. In short: set `useSampleEpisodes: false`
//     in src/config/site.ts and point `feedUrl` at your RSS feed. You can then
//     delete this file and the cover art in public/sample/.
//
// Cover art cycles through public/sample/cover-{1..4}.svg.
// ---------------------------------------------------------------------------

import type { Episode } from "@/lib/feed";

export const sampleEpisodes: Episode[] = [
  {
    id: "sample-10",
    title: "Dial-Up & Daydreams",
    description:
      "We kick things off with the screech that defined a generation. The hosts " +
      "reminisce about waiting four minutes for a single image to load, fighting " +
      "siblings over the phone line, and why that little modem handshake still " +
      "lives rent-free in our heads.",
    isoDate: "2026-05-28T09:00:00.000Z",
    displayDate: "May 28, 2026",
    image: "/sample/cover-1.svg",
    link: "#",
  },
  {
    id: "sample-9",
    title: "The Great Lunchbox Power Rankings",
    description:
      "Trapper Keepers, slap bracelets, and the social hierarchy of the cafeteria. " +
      "We settle once and for all which cartoon-branded lunchbox carried the most " +
      "playground clout — and award some very serious, completely made-up trophies.",
    isoDate: "2026-05-14T09:00:00.000Z",
    displayDate: "May 14, 2026",
    image: "/sample/cover-2.svg",
    link: "#",
  },
  {
    id: "sample-8",
    title: "Saturday Morning, Sugar Crash",
    description:
      "A loving teardown of the Saturday-morning cartoon block: the cereal, the " +
      "commercials engineered to ruin your parents' weekend, and the unspoken rule " +
      "that you had to be on the carpet by 7am or risk missing the good stuff.",
    isoDate: "2026-04-30T09:00:00.000Z",
    displayDate: "April 30, 2026",
    image: "/sample/cover-3.svg",
    link: "#",
  },
  {
    id: "sample-7",
    title: "Mixtape Maestros",
    description:
      "The lost art of taping songs off the radio and hovering your finger over " +
      "the record button. We trade tales of ruined mixtapes, DJ talk-overs, and the " +
      "heartbreak of running out of tape three seconds before the final chorus.",
    isoDate: "2026-04-16T09:00:00.000Z",
    displayDate: "April 16, 2026",
    image: "/sample/cover-4.svg",
    link: "#",
  },
  {
    id: "sample-6",
    title: "Blockbuster Nights",
    description:
      "Be kind, rewind. A nostalgic stroll down the aisles of the neighborhood video " +
      "store — the new-release wall, the candy markup, and the very real dread of a " +
      "late fee that could outlast the rental itself.",
    isoDate: "2026-04-02T09:00:00.000Z",
    displayDate: "April 2, 2026",
    image: "/sample/cover-1.svg",
    link: "#",
  },
  {
    id: "sample-5",
    title: "Pixels & Power Gloves",
    description:
      "Blowing into cartridges like it was a sacred ritual, memorizing cheat codes " +
      "from dog-eared magazines, and the friendships forged (and broken) over a " +
      "single shared controller. Game on.",
    isoDate: "2026-03-19T09:00:00.000Z",
    displayDate: "March 19, 2026",
    image: "/sample/cover-2.svg",
    link: "#",
  },
  {
    id: "sample-4",
    title: "Mall Rats Anonymous",
    description:
      "The food court was the original social network. We map out the ecosystem of " +
      "the '90s mall — the arcade, the giant pretzel, the kiosk you speed-walked past " +
      "— and ask whether anything has truly replaced it.",
    isoDate: "2026-03-05T09:00:00.000Z",
    displayDate: "March 5, 2026",
    image: "/sample/cover-3.svg",
    link: "#",
  },
  {
    id: "sample-3",
    title: "Gel Pens & Gossip",
    description:
      "Note-passing networks, scented markers, and the diplomatic genius of the " +
      "folded paper fortune teller. A deep dive into the analog social life of the " +
      "middle-school hallway.",
    isoDate: "2026-02-19T09:00:00.000Z",
    displayDate: "February 19, 2026",
    image: "/sample/cover-4.svg",
    link: "#",
  },
  {
    id: "sample-2",
    title: "Beepers, Brick Phones & Beyond",
    description:
      "Before the smartphone, there was the pager and a pocketful of quarters. We " +
      "decode the secret numeric languages of the beeper era and marvel at how we " +
      "ever made plans and actually kept them.",
    isoDate: "2026-02-05T09:00:00.000Z",
    displayDate: "February 5, 2026",
    image: "/sample/cover-1.svg",
    link: "#",
  },
  {
    id: "sample-1",
    title: "Tamagotchi Funerals",
    description:
      "Our tearful season finale: the digital pets we loved, neglected, and " +
      "occasionally resurrected. A meditation on tiny pixel responsibilities and the " +
      "first heartbreaks of a beeping plastic egg.",
    isoDate: "2026-01-22T09:00:00.000Z",
    displayDate: "January 22, 2026",
    image: "/sample/cover-2.svg",
    link: "#",
  },
];
