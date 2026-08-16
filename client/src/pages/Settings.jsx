import { useEffect, useState } from "react";
import {
  Palette,
  Moon,
  Sun,
  Flame,
  Heart,
  Check,
} from "lucide-react";

const themes = [
  {
    id: "dark",
    name: "Dark",
    description: "Deep and focused",
    icon: Moon,
    preview: "bg-[#0b1020]",
    accent: "bg-violet-500",
  },
  {
    id: "bright",
    name: "Bright",
    description: "Clean and energetic",
    icon: Sun,
    preview: "bg-slate-100",
    accent: "bg-indigo-500",
  },
  {
    id: "orange",
    name: "Orange",
    description: "Bold and motivating",
    icon: Flame,
    preview: "bg-[#17100b]",
    accent: "bg-orange-500",
  },
  {
    id: "pink",
    name: "Pink",
    description: "Playful and vibrant",
    icon: Heart,
    preview: "bg-[#180d17]",
    accent: "bg-pink-500",
  },
];

function Settings() {
  const [theme, setTheme] = useState(
    localStorage.getItem("pushkar-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "pushkar-theme",
      theme
    );
  }, [theme]);

  return (
    <div className="mx-auto max-w-4xl">

      {/* Header */}
      <div className="mb-8">

        <div className="mb-3 flex items-center gap-2 pk-primary">
          <Palette size={18} />

          <span className="text-sm font-semibold">
            Personalization
          </span>
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl pk-text">
          Settings
        </h1>

        <p className="mt-2 pk-muted">
          Customize your Push-Kar experience.
        </p>

      </div>


      {/* Appearance */}
      <section className="pk-surface rounded-3xl p-6 shadow-lg">

        <div className="mb-6">

          <h2 className="text-xl font-bold pk-text">
            Appearance
          </h2>

          <p className="mt-1 text-sm pk-muted">
            Choose the look that matches your vibe.
          </p>

        </div>


        {/* Theme Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {themes.map((item) => {
            const Icon = item.icon;
            const selected = theme === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setTheme(item.id)}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 ${
                  selected
                    ? "pk-border ring-2 ring-[var(--pk-primary)]/20"
                    : "border-[var(--pk-border)] hover:border-[var(--pk-primary)]/40"
                }`}
              >

                {/* Preview */}
                <div
                  className={`mb-4 h-24 rounded-xl ${item.preview} p-3`}
                >
                  <div className="flex gap-2">

                    <div className="h-16 w-7 rounded-md bg-white/10" />

                    <div className="flex-1 space-y-2">

                      <div className="h-3 w-20 rounded bg-white/15" />

                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-7 rounded-md bg-white/10" />
                        <div className="h-7 rounded-md bg-white/10" />
                      </div>

                      <div
                        className={`h-2 w-14 rounded ${item.accent}`}
                      />

                    </div>

                  </div>
                </div>


                {/* Theme Info */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className={`rounded-xl p-2 ${
                        selected
                          ? "pk-primary-bg text-white"
                          : "pk-surface-soft pk-muted"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div>

                      <p className="font-semibold pk-text">
                        {item.name}
                      </p>

                      <p className="text-xs pk-muted">
                        {item.description}
                      </p>

                    </div>

                  </div>


                  {selected && (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full pk-primary-bg text-white">
                      <Check size={15} />
                    </div>
                  )}

                </div>

              </button>
            );
          })}

        </div>

      </section>

    </div>
  );
}

export default Settings;