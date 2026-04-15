import type { Route } from "./+types/about";
import Navbar from "../../components/Navbar";
import FeatureCard from "../../components/FeatureCard";
import {
    Zap,
    LayoutDashboard,
    ScanLine,
    Share2,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { useState, useRef } from "react";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About – LayoutAI" },
        {
            name: "description",
            content:
                "Learn about LayoutAI – the AI-powered interior design platform that helps architects and designers visualize, render, and ship projects fast.",
        },
    ];
}

const FEATURES = [
    {
        icon: Zap,
        title: "Instant AI Rendering",
        description:
            "Upload any floor plan and get photorealistic renders in seconds.",
        badge: "Core",
        gradient: "blue",
    },
    {
        icon: LayoutDashboard,
        title: "Project Dashboard",
        description:
            "Manage projects, track revisions, and organize everything in one place.",
        badge: "Productivity",
        gradient: "purple",
    },
    {
        icon: ScanLine,
        title: "Side-by-Side Compare",
        description:
            "Compare floor plans with generated renders effortlessly.",
        gradient: "green",
    },
    {
        icon: Share2,
        title: "One-Click Export",
        description:
            "Export or share your renders instantly with clients.",
        gradient: "blue",
    },
    {
        icon: ShieldCheck,
        title: "Private by Default",
        description:
            "Your projects stay secure with private cloud storage.",
        badge: "Security",
        gradient: "purple",
    },
    {
        icon: Sparkles,
        title: "Style Intelligence",
        description:
            "AI adapts to styles like Scandinavian, Japandi, and more.",
        gradient: "green",
    },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function About() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("submitting");
        setErrorMsg("");

        const data = new FormData(e.currentTarget);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
                    name: data.get("name"),
                    email: data.get("email"),
                    message: data.get("message"),
                }),
            });

            const json = await res.json();

            if (json.success) {
                setFormState("success");
                formRef.current?.reset();
            } else {
                throw new Error("Submission failed");
            }
        } catch (err: any) {
            setFormState("error");
            setErrorMsg(err.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen  text-white">
            <Navbar />

            {/* HERO */}
            <section className="relative py-28 text-center overflow-hidden">
                <div className="absolute inset-0  blur-3xl" />

                <div className="relative max-w-4xl mx-auto px-6">
                    <span className="inline-block mb-6 px-4 py-1 text-xs rounded-full bg-white/10 border border-white/10 backdrop-blur">
                        About LayoutAI
                    </span>

                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Design at the speed of{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            imagination
                        </span>
                    </h1>

                    <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
                        AI-powered interior design for architects and creators who
                        move fast.
                    </p>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm text-blue-400 mb-3">Our Mission</p>
                        <h2 className="text-3xl font-semibold mb-4">
                            AI that understands space
                        </h2>
                        <p className="text-zinc-400 mb-4">
                            Turn ideas into stunning visuals instantly.
                        </p>
                        <p className="text-zinc-400">
                            We remove friction so you focus purely on design.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: "10s", label: "Render time" },
                            { value: "98%", label: "Satisfaction" },
                            { value: "50+", label: "Styles" },
                            { value: "∞", label: "Iterations" },
                        ].map((s) => (
                            <div
                                key={s.label}
                                className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition"
                            >
                                <p className="text-2xl font-semibold">{s.value}</p>
                                <p className="text-xs text-zinc-400">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-sm text-blue-400 mb-2">Features</p>
                        <h2 className="text-3xl font-semibold">
                            Everything you need
                        </h2>
                        <p className="text-zinc-400 mt-2">
                            Powerful tools built for modern designers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FEATURES.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FEEDBACK */}
            <section className="py-24">
                <div className="max-w-2xl mx-auto px-6 text-center mb-10">
                    <p className="text-sm text-blue-400">Get in touch</p>
                    <h2 className="text-3xl font-semibold">
                        Share your feedback
                    </h2>
                    <p className="text-zinc-400 mt-2">
                        We read every message.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto px-6">
                    <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                        <div className="absolute inset-0 blur-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                        {formState === "success" ? (
                            <div className="relative text-center">
                                <h3 className="text-xl font-semibold mb-2">
                                    Message sent!
                                </h3>
                                <p className="text-zinc-400">
                                    We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="relative space-y-5"
                            >
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        name="name"
                                        placeholder="Your name"
                                        className="input"
                                        required
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        className="input"
                                        required
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Your message..."
                                    className="input"
                                    required
                                />

                                {formState === "error" && (
                                    <p className="text-red-400 text-sm">
                                        {errorMsg}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
                                >
                                    {formState === "submitting"
                                        ? "Sending..."
                                        : "Send Feedback"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}