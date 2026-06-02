import type { Metadata } from "next";
import { hosts, siteConfig } from "@/config/site";
import { ZigZag, Dots } from "@/components/Decorations";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the hosts of ${siteConfig.name}.`,
};

// Alternating accent rings for the host headshots.
const ringAccents = ["bg-teal", "bg-magenta", "bg-purple", "bg-orange"];

// Join the host names into a readable list: "A", "A and B", or "A, B, and C".
function formatHostNames(names: readonly string[]): string {
  if (names.length === 0) return "your hosts";
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

export default function AboutPage() {
  const hostNames = formatHostNames(hosts.map((h) => h.name));

  return (
    <div className="flex flex-col gap-12">
      <section>
        <h1 className="display text-5xl uppercase text-ink">
          <span className="text-teal">About</span> the show
        </h1>
        <ZigZag className="mt-3 h-5 w-48 text-magenta" />
        <p className="mt-5 max-w-2xl text-lg font-medium text-ink/80">
          {siteConfig.name} is hosted by {hostNames}. Here&apos;s a little about
          each of them.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        {hosts.map((host, i) => {
          const accent = ringAccents[i % ringAccents.length];
          return (
            <article
              key={host.name}
              className="panel relative flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:p-8"
            >
              {i === 0 && (
                <Dots className="pointer-events-none absolute -right-3 -top-3 h-12 w-12 text-yellow" />
              )}
              <div
                className={`flex-shrink-0 rounded-full border-[3px] border-ink p-1.5 ${accent}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={host.image}
                  alt={`${host.name} headshot placeholder`}
                  className="h-28 w-28 rounded-full border-[3px] border-ink object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="display text-2xl uppercase text-ink">{host.name}</h2>
                <p className="max-w-2xl font-medium leading-relaxed text-ink/75">
                  {host.bio}
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
