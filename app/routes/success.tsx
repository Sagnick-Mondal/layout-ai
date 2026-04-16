import type { Route } from "./+types/success";
import { useEffect, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import puter from "@heyputer/puter.js";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Payment Successful – LayoutAI" },
    { name: "description", content: "Your payment was successful. Your LayoutAI plan features are now unlocked." },
  ];
}

export default function Success() {
  const [plan, setPlan] = useState<string | null>(null);

  useEffect(() => {
  const syncPlan = async () => {
    const params = new URLSearchParams(window.location.search);
    const selectedPlan = params.get("plan");

    if (!selectedPlan) return;

    setPlan(selectedPlan);

    let user = await puter.auth.getUser();

    // 🚨 If not logged in → force login
    if (!user) {
      console.log("User not logged in, forcing login...");
      await puter.auth.signIn();
      user = await puter.auth.getUser();
    }

    if (!user) {
      console.error("Still no user after login");
      return;
    }

    console.log("User:", user.uuid);

    await puter.kv.set(`plan:${user.uuid}`, selectedPlan);
    console.log("Plan saved to Puter");

    localStorage.setItem("plan", selectedPlan);
  };

  syncPlan();
}, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

      <div className="relative max-w-md w-full text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-14 h-14 text-green-400" />
        </div>

        <h1 className="text-2xl font-semibold mb-2">
          Payment Successful 🎉
        </h1>

        <p className="text-zinc-400 mb-4">
          {plan
            ? `You've subscribed to the ${plan.toUpperCase()} plan.`
            : "Your payment was successful."}
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-blue-400 mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Your features are now unlocked</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="/"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition font-medium"
          >
            Go to Home
          </a>

          <a
            href="/pricing"
            className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm"
          >
            View Plans
          </a>
        </div>
      </div>
    </div>
  );
}