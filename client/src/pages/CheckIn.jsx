import { useState, useContext } from "react";
import { PerformanceContext } from "../context/PerformanceContext";


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
    const { setPerformanceData } = useContext(PerformanceContext);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const score =
            Number(formData.sleep) * 2 +
            Number(formData.focus) * 5 +
            Number(formData.study) * 3 +
            Number(formData.water) * 4 +
            Number(formData.mood) * 2 +
            Number(formData.energy) * 2 +
            (formData.exercise ? 15 : 0);

        const updatedData = {
  ...formData,
  score,
};

setPerformanceData(updatedData);

// Save to localStorage
localStorage.setItem(
  "performanceData",
  JSON.stringify(updatedData)
);

        alert("Check-In Saved! 🎉");
    };

    return (
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-8 border border-slate-700">

            <h1 className="text-3xl font-bold">
                Daily Check-In
            </h1>

            <p className="text-gray-400 mt-2 mb-8">
                Tell Push-Kar about your day.
            </p>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                {/* Sleep */}
                <div>
                    <label>Sleep Hours</label>

                    <input
                        type="number"
                        name="sleep"
                        value={formData.sleep}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-900"
                    />
                </div>

                {/* Mood */}
                <div>
                    <label>
                        Mood ({formData.mood}/10)
                    </label>

                    <input
                        type="range"
                        min="1"
                        max="10"
                        name="mood"
                        value={formData.mood}
                        onChange={handleChange}
                        className="w-full"
                    />
                </div>

                {/* Energy */}
                <div>
                    <label>
                        Energy ({formData.energy}/10)
                    </label>

                    <input
                        type="range"
                        min="1"
                        max="10"
                        name="energy"
                        value={formData.energy}
                        onChange={handleChange}
                        className="w-full"
                    />
                </div>

                {/* Focus */}
                <div>
                    <label>Focus Hours</label>

                    <input
                        type="number"
                        name="focus"
                        value={formData.focus}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-900"
                    />
                </div>

                {/* Water */}
                <div>
                    <label>Water Intake (Litres)</label>

                    <input
                        type="number"
                        name="water"
                        value={formData.water}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-900"
                    />
                </div>

                {/* Study */}
                <div>
                    <label>Study Hours</label>

                    <input
                        type="number"
                        name="study"
                        value={formData.study}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-900"
                    />
                </div>

                {/* Exercise */}
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        name="exercise"
                        checked={formData.exercise}
                        onChange={handleChange}
                    />

                    <label>Completed Exercise Today</label>
                </div>

                {/* Journal */}
                <div>
                    <label>Journal</label>

                    <textarea
                        rows="5"
                        name="journal"
                        value={formData.journal}
                        onChange={handleChange}
                        className="w-full mt-2 p-3 rounded-xl bg-slate-900"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-bold"
                >
                    Save Check-In
                </button>

            </form>

        </div>
    );
}

export default CheckIn;