"use client";

const characters = [
  {
    name: "Sung Jinwoo",
    rank: "Shadow Monarch",
    title: "Solo Player / Monarch of Shadows",
    description:
      "Once the Weakest Hunter of All Mankind, reborn through a mysterious System that turned every dungeon into his personal grind.",
    abilities: [
      "Shadow Extraction",
      "Stealth",
      "Dominator’s Touch",
      "Bloodlust"
    ]
  },
  {
    name: "Cha Hae-In",
    rank: "S-Rank Hunter",
    title: "Korea’s Strongest Female Hunter",
    description:
      "An elite swordswoman with a unique sense for mana and the rare ability to stand beside the Shadow Monarch.",
    abilities: ["Sword Dance", "Mana Sense", "Enhanced Agility"]
  },
  {
    name: "Go Gun-Hee",
    rank: "National Level Hunter",
    title: "Chairman of the Korean Hunters Association",
    description:
      "A living legend whose very presence can suppress high-ranking magic beasts and steady nations.",
    abilities: ["Overwhelming Aura", "Titanic Strength", "Unyielding Will"]
  },
  {
    name: "Baek Yoonho",
    rank: "S-Rank Hunter",
    title: "Beast Transformation Specialist",
    description:
      "A frontline commander whose feral transformations give him the instincts and brutality of a magical beast.",
    abilities: ["Beast Form", "Regeneration", "Enhanced Senses"]
  }
];

const shadows = [
  {
    name: "Igris",
    role: "Blood-Red Commander",
    type: "Knight-Class Shadow",
    note: "First true general of the Shadow Army, loyal to the end."
  },
  {
    name: "Beru",
    role: "Ant King Reborn",
    type: "Commander-Class Shadow",
    note: "Once a nightmare to S-Ranks, now a fiercely devoted subject."
  },
  {
    name: "Tank",
    role: "Frost Bear",
    type: "Beast-Class Shadow",
    note: "A walking avalanche of fangs and ice, Jinwoo’s loyal mount."
  },
  {
    name: "Iron",
    role: "Armored Guardian",
    type: "Knight-Class Shadow",
    note: "A fallen tank reborn as an ever-grinning shield."
  },
  {
    name: "Bellion",
    role: "Grand Marshal",
    type: "High Commander-Class Shadow",
    note: "The towering general who once led the Monarch’s armies."
  },
  {
    name: "Greed",
    role: "Assassin in the Dark",
    type: "Rogue-Class Shadow",
    note: "A stalking silhouette specializing in swift eliminations."
  }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      {/* System grid background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.18]">
        <div className="system-grid h-full w-full" />
        <div className="absolute -top-40 right-10 h-80 w-80 rounded-full bg-electricBlue/20 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-2rem] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 sm:px-6 md:gap-20 md:pt-16 lg:px-8">
        {/* Top HUD bar */}
        <header className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 shadow-lg shadow-slate-950/80 backdrop-blur">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg border border-electricBlue/60 bg-slate-950/80 system-glow" />
            <div className="flex flex-col leading-none">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                System Online
              </span>
              <span className="text-xs font-medium text-electricBlue">
                Solo Leveling // Gate Monitor
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:flex">
            <a href="#story" className="hover:text-electricBlue transition-colors">
              Storyline
            </a>
            <a
              href="#characters"
              className="hover:text-electricBlue transition-colors"
            >
              Hunters
            </a>
            <a
              href="#shadows"
              className="hover:text-electricBlue transition-colors"
            >
              Shadow Army
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-center">
          <div className="space-y-6">
            <p className="pill-accent w-fit bg-gradient-to-r from-electricBlue/20 via-sky-500/15 to-transparent">
              Gate Synchronization Complete
            </p>

            <div className="space-y-4">
              <h1 className="text-balance text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
                <span className="block text-slate-300">Command:</span>
                <span className="bg-gradient-to-r from-electricBlue via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,212,255,0.3)]">
                  Arise.
                </span>
              </h1>
              <p className="max-w-xl text-pretty text-sm text-slate-300 sm:text-base">
                Gates tear open between worlds, spilling magic beasts into
                reality. Hunters enter, risking everything for loot, glory, and
                survival. In the shadows of S-Ranks and National Level Hunters,
                one E-Rank failure is chosen by the System to rewrite fate.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full bg-electricBlue px-5 py-2.5 text-sm font-semibold tracking-wide text-slate-950 shadow-electric-glow transition hover:bg-cyan-300"
              >
                Enter the Gates
                <span className="text-xs uppercase tracking-[0.18em]">
                  Story Mode
                </span>
              </a>
              <a
                href="#characters"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-electricBlue/80 hover:text-electricBlue"
              >
                View Hunter Roster
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
              <span className="chip-ghost">
                ▢ Difficulty: <span className="ml-1 text-electricBlue">S</span>
              </span>
              <span className="chip-ghost">
                ▢ World Type: <span className="ml-1 text-slate-200">Modern</span>
              </span>
              <span className="chip-ghost">
                ▢ Threat Level:{" "}
                <span className="ml-1 text-rose-400">Catastrophic</span>
              </span>
            </div>
          </div>

          {/* Hero Diagnostics Panel */}
          <div className="section-shell md:translate-y-2">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Player Status // Solo Leveling
              </span>
              <span className="pill-accent bg-transparent">
                Weakest Hunter → Monarch
              </span>
            </div>

            <dl className="space-y-4 text-xs text-slate-200">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <dt className="font-medium text-slate-300">Current Class</dt>
                  <dd className="mt-1 text-[11px] text-slate-400">
                    Shadow Monarch (Ascended from E-Rank Human)
                  </dd>
                </div>
                <div className="chip text-[11px]">
                  Rank: <span className="ml-1 text-electricBlue">???</span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Title
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-100">
                    Monarch of Shadows
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Commands an army born from fallen foes.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Core Skills
                  </p>
                  <p className="mt-1 text-xs font-semibold text-electricBlue">
                    Shadow Extraction, Stealth, Bloodlust
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Execute, resurrect, and command without limit.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Threat Level
                  </p>
                  <p className="mt-1 text-xs font-semibold text-rose-400">
                    World-Breaker
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Equal to or above National Level Hunters.
                  </p>
                </div>
              </div>
            </dl>
          </div>
        </section>

        {/* Storyline Section */}
        <section
          id="story"
          className="section-shell mt-2 scroll-mt-24 border-t border-slate-800/80"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:items-start">
            <div className="space-y-4">
              <p className="pill bg-electricBlue/10 text-electricBlue ring-electricBlue/60">
                Storyline // Weakest Hunter of All Mankind
              </p>
              <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                From E-Rank Fodder to the Shadow Monarch.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                In a world where Gates link reality to monster-infested dungeons,
                Hunters are humanity’s only defense. Among them, Sung Jinwoo is
                infamous as the weakest—an E-Rank barely strong enough to clear
                the easiest raids, constantly injured, constantly pitied, and
                constantly left behind.
              </p>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Everything changes inside a seemingly low-rank dungeon that hides
                a brutal, godlike double dungeon within. Surrounded by stone
                statues that demand impossible trials and sacrifices, Jinwoo is
                forced to choose between certain death and a mysterious Contract
                presented by an invisible System.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-lg shadow-slate-950/80">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Double Dungeon Incident // Log
                </span>
                <span className="chip-ghost border-emerald-500/40 text-emerald-400">
                  System: Awakening Complete
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-electricBlue" />
                  <div>
                    <p className="font-medium text-slate-100">
                      Hidden Rules, Merciless God.
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      The party stumbles into a colossal chamber ruled by a giant
                      statue that annihilates anyone who breaks its commandments
                      of worship, courage, and sacrifice.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-electricBlue" />
                  <div>
                    <p className="font-medium text-slate-100">
                      A Choice at Death’s Door.
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Crushed, bleeding out, and abandoned, Jinwoo alone is
                      offered a secret quest: accept the System’s Contract and
                      become its Player—or die as the weakest Hunter.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-electricBlue" />
                  <div>
                    <p className="font-medium text-slate-100">
                      Leveling in a World Without Levels.
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Waking up in a hospital bed, only Jinwoo can see the
                      holographic quests, daily missions, penalties, and stats
                      that let him grow stronger without limit—breaking every
                      rule of the Hunter world.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Character Cards */}
        <section
          id="characters"
          className="space-y-6 scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/90 backdrop-blur-md sm:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="pill bg-electricBlue/10 text-electricBlue ring-electricBlue/60">
                Hunters // Active Roster
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Key Hunters Standing on the Edge of Annihilation.
              </h2>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                From the once-weak Jinwoo to S-Rank legends, these Hunters face
                Gates that could erase cities in minutes. Each card reveals their
                rank, role, and defining abilities.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="chip-ghost">Filter: Main Cast</span>
              <span className="chip-ghost">Source: Anime &amp; Manhwa</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {characters.map((char) => (
              <article
                key={char.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/80 transition hover:border-electricBlue/80 hover:shadow-electric-glow"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-electricBlue/10 via-slate-950/0 to-transparent opacity-0 transition group-hover:opacity-100" />
                <header className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {char.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {char.title}
                    </p>
                  </div>
                  <span className="pill-accent bg-slate-950/80 text-[10px]">
                    Rank: {char.rank}
                  </span>
                </header>
                <p className="mb-3 text-[11px] leading-relaxed text-slate-300">
                  {char.description}
                </p>
                <div className="space-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Key Abilities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {char.abilities.map((skill) => (
                      <span
                        key={skill}
                        className="pill bg-slate-900/80 text-[11px] hover:bg-electricBlue/15 hover:text-electricBlue"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Synergy: {char.name === "Sung Jinwoo" ? "System" : "Raid"}</span>
                  <span className="text-electricBlue opacity-0 transition group-hover:opacity-100">
                    View Status &gt;
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Shadow Army Gallery */}
        <section
          id="shadows"
          className="space-y-6 scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/90 backdrop-blur-md sm:p-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="pill bg-slate-900/80 text-electricBlue ring-electricBlue/60">
                Shadow Army // Manifested Units
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                From Fallen Foes to Eternal Soldiers.
              </h2>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Every monster slain is potential reinforcement. These elite
                Shadows form the vanguard of Jinwoo’s army, each carrying their
                past life’s terror into a new obedience.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="chip-ghost">Formation: Assault &amp; Command</span>
              <span className="chip-ghost">Control: Absolute</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shadows.map((shadow) => (
              <article
                key={shadow.name}
                className="group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-950 to-slate-950/80 p-4 shadow-lg shadow-slate-950/90 transition hover:border-electricBlue/80 hover:shadow-electric-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.18),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                <header className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {shadow.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      {shadow.role}
                    </p>
                  </div>
                  <span className="pill bg-slate-900/80 text-[10px]">
                    {shadow.type}
                  </span>
                </header>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {shadow.note}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Origin: Dungeon Raid</span>
                  <span className="text-electricBlue opacity-0 transition group-hover:opacity-100">
                    Shadow Info &gt;
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-6 text-[11px] text-slate-500">
          <span>
            Solo Leveling Fan Project ·{" "}
            <span className="text-electricBlue">System UI Inspired</span>
          </span>
          <span>All characters &amp; story belong to their respective creators.</span>
        </footer>
      </div>
    </main>
  );
}

