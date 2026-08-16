import { useState, useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";
import { calculateScore } from "../utils/scoreCalculator";
import { savePerformanceHistory } from "../utils/historyStorage";
import {
  Moon,
  Smile,
  Zap,
  Clock,
  Droplets,
  BookOpen,
  Dumbbell,
  BookMarked,
  Sparkles,
} from "lucide-react";

function CheckIn() {
  const [formData, setFormData] = useState({
    sleep: "",
    mood: 5,
    energy: 5,
    focus: "",
    water: "",
    study: "",
    exercise: false,
    journal: "",
  });

  const { setPerformanceData } =
    useContext(PerformanceContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = calculateScore(formData);

    const updatedData = {
      ...formData,
      score,
    };

    setPerformanceData(updatedData);

    localStorage.setItem(
      "performanceData",
      JSON.stringify(updatedData)
    );

    savePerformanceHistory(updatedData);

    alert("Check-In Saved! 🎉");
  };

  return (
    <div className="mx-auto max-w-4xl">

      {/* Page Header */}
      <div className="mb-8">

        <div className="mb-3 flex items-center gap-2 text-[var(--pk-primary)]">
          <Sparkles size={18} />

          <span className="text-sm font-semibold">
            Daily Performance
          </span>
        </div>

        <h1 className="text-3xl font-bold sm:text-4xl">
          Daily Check-In
        </h1>

        <p className="mt-2 text-[var(--pk-text-muted)]">
          Tell Push-Kar about your day and track
          what affects your performance.
        </p>

      </div>


      {/* Form Card */}
      <div className="rounded-3xl border border-[var(--pk-border)] bg-[var(--pk-surface)] p-5 shadow-lg sm:p-8">

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* Sleep */}
          <InputField
            icon={<Moon size={19} />}
            label="Sleep Hours"
            name="sleep"
            value={formData.sleep}
            onChange={handleChange}
            placeholder="e.g. 7.5"
            type="number"
            step="0.1"
            min="0"
          />


          {/* Mood */}
          <RangeField
            icon={<Smile size={19} />}
            label="Mood"
            value={formData.mood}
            name="mood"
            onChange={handleChange}
          />


          {/* Energy */}
          <RangeField
            icon={<Zap size={19} />}
            label="Energy"
            value={formData.energy}
            name="energy"
            onChange={handleChange}
          />


          {/* Focus */}
          <InputField
            icon={<Clock size={19} />}
            label="Focus Hours"
            name="focus"
            value={formData.focus}
            onChange={handleChange}
            placeholder="e.g. 3"
            type="number"
            step="0.1"
            min="0"
          />


          {/* Water */}
          <InputField
            icon={<Droplets size={19} />}
            label="Water Intake"
            name="water"
            value={formData.water}
            onChange={handleChange}
            placeholder="e.g. 2.5"
            type="number"
            step="0.1"
            min="0"
            suffix="L"
          />


          {/* Study */}
          <InputField
            icon={<BookOpen size={19} />}
            label="Study Hours"
            name="study"
            value={formData.study}
            onChange={handleChange}
            placeholder="e.g. 4"
            type="number"
            step="0.1"
            min="0"
          />


          {/* Exercise */}
          <div className="rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-4">

            <label className="flex cursor-pointer items-center gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
                <Dumbbell size={20} />
              </div>

              <div className="flex-1">

                <p className="font-semibold">
                  Exercise
                </p>

                <p className="text-xs text-[var(--pk-text-muted)]">
                  Did you exercise today?
                </p>

              </div>

              <input
                type="checkbox"
                name="exercise"
                checked={formData.exercise}
                onChange={handleChange}
                className="h-5 w-5 accent-[var(--pk-primary)]"
              />

            </label>

          </div>


          {/* Journal */}
          <div>

            <div className="mb-3 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
                <BookMarked size={19} />
              </div>

              <div>

                <label
                  htmlFor="journal"
                  className="font-semibold"
                >
                  Journal
                </label>

                <p className="text-xs text-[var(--pk-text-muted)]">
                  Anything you want to remember about today?
                </p>

              </div>

            </div>

            <textarea
              id="journal"
              rows="5"
              name="journal"
              value={formData.journal}
              onChange={handleChange}
              placeholder="Write a few thoughts about your day..."
              className="w-full resize-none rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-4 text-sm outline-none transition placeholder:text-[var(--pk-text-muted)] focus:border-[var(--pk-primary)] focus:ring-2 focus:ring-[var(--pk-primary)]/10"
            />

          </div>


          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--pk-primary)] px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0"
          >
            <Sparkles size={18} />
            Save Check-In
          </button>

        </form>

      </div>

    </div>
  );
}


/* -------------------------------- */
/* Reusable Input Field */
/* -------------------------------- */

function InputField({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  step,
  min,
  suffix,
}) {
  return (
    <div>

      <div className="mb-3 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
          {icon}
        </div>

        <div>

          <label
            htmlFor={name}
            className="font-semibold"
          >
            {label}
          </label>

        </div>

      </div>

      <div className="relative">

        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          step={step}
          min={min}
          className="w-full rounded-2xl border border-[var(--pk-border)] bg-[var(--pk-surface-soft)] p-3.5 pr-12 text-sm outline-none transition placeholder:text-[var(--pk-text-muted)] focus:border-[var(--pk-primary)] focus:ring-2 focus:ring-[var(--pk-primary)]/10"
        />

        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[var(--pk-text-muted)]">
            {suffix}
          </span>
        )}

      </div>

    </div>
  );
}


/* -------------------------------- */
/* Range Field */
/* -------------------------------- */

function RangeField({
  icon,
  label,
  value,
  name,
  onChange,
}) {
  return (
    <div>

      <div className="mb-3 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--pk-primary)]/10 text-[var(--pk-primary)]">
            {icon}
          </div>

          <label className="font-semibold">
            {label}
          </label>

        </div>

        <div className="rounded-xl bg-[var(--pk-primary)]/10 px-3 py-1 text-sm font-bold text-[var(--pk-primary)]">
          {value}/10
        </div>

      </div>

      <input
        type="range"
        min="1"
        max="10"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full accent-[var(--pk-primary)]"
      />

      <div className="mt-1 flex justify-between text-[11px] text-[var(--pk-text-muted)]">
        <span>Low</span>
        <span>High</span>
      </div>

    </div>
  );
}

export default CheckIn;