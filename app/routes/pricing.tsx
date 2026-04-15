import type { Route } from "./+types/pricing";
import Navbar from "../../components/Navbar";
import PricingCard from "../../components/PricingCard";
import type { PricingCardProps } from "../../components/PricingCard";
import { ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Pricing – LayoutAI" },
        {
            name: "description",
            content:
                "Simple, transparent pricing for every team size. From a free plan for individuals to enterprise-grade solutions for large studios. Get started with LayoutAI today.",
        },
    ];
}

// ─── Replace these with your actual Stripe Payment Link URLs ──────────────────
// Create them at: https://dashboard.stripe.com/payment-links
const STRIPE_LINKS = {
    free: "#",                                        // No payment needed
    solo: "https://buy.stripe.com/YOUR_SOLO_LINK",
    team: "https://buy.stripe.com/YOUR_TEAM_LINK",
    enterprise: "https://buy.stripe.com/YOUR_ENT_LINK",
} as const;
// ─────────────────────────────────────────────────────────────────────────────

const PLANS: PricingCardProps[] = [
    {
        tier: "free",
        name: "Free",
        price: "Free",
        description: "Perfect for individuals exploring AI-powered design. No credit card required.",
        ctaLabel: "Get Started Free",
        stripeUrl: STRIPE_LINKS.free,
        features: [
            { text: "3 renders per month",           included: true  },
            { text: "720p export resolution",         included: true  },
            { text: "Basic design styles (5)",        included: true  },
            { text: "Community support",              included: true  },
            { text: "Project dashboard",              included: false },
            { text: "Side-by-side compare",           included: false },
            { text: "Custom styles",                  included: false },
            { text: "Team collaboration",             included: false },
        ],
    },
    {
        tier: "solo",
        name: "Solo",
        price: "$19",
        description: "For freelance designers and architects who need more power and renders.",
        ctaLabel: "Start Solo Plan",
        stripeUrl: STRIPE_LINKS.solo,
        badge: "Most Popular",
        highlighted: true,
        features: [
            { text: "50 renders per month",           included: true  },
            { text: "4K export resolution",           included: true  },
            { text: "All design styles (50+)",        included: true  },
            { text: "Project dashboard",              included: true  },
            { text: "Side-by-side compare",           included: true  },
            { text: "Priority email support",         included: true  },
            { text: "Custom styles",                  included: false },
            { text: "Team collaboration",             included: false },
        ],
    },
    {
        tier: "team",
        name: "Team",
        price: "$79",
        description: "For small design studios that need collaboration and higher render volume.",
        ctaLabel: "Start Team Plan",
        stripeUrl: STRIPE_LINKS.team,
        features: [
            { text: "300 renders per month",          included: true  },
            { text: "4K export resolution",           included: true  },
            { text: "All design styles (50+)",        included: true  },
            { text: "Project dashboard",              included: true  },
            { text: "Side-by-side compare",           included: true  },
            { text: "Team collaboration (up to 10)",  included: true  },
            { text: "Custom brand styles",            included: true  },
            { text: "Dedicated Slack support",        included: false },
        ],
    },
    {
        tier: "enterprise",
        name: "Enterprise",
        price: "Custom",
        description: "For large studios and property developers needing unlimited scale and SLAs.",
        ctaLabel: "Contact Sales",
        stripeUrl: STRIPE_LINKS.enterprise,
        features: [
            { text: "Unlimited renders",              included: true  },
            { text: "4K+ export resolution",          included: true  },
            { text: "All design styles + custom",     included: true  },
            { text: "Unlimited team members",         included: true  },
            { text: "Dedicated Slack channel",        included: true  },
            { text: "Custom brand styles",            included: true  },
            { text: "99.9% SLA uptime guarantee",    included: true  },
            { text: "On-premise deployment option",   included: true  },
        ],
    },
];

const FAQS = [
    {
        q: "Can I switch plans later?",
        a: "Yes — upgrade or downgrade at any time. Changes take effect immediately and we prorate your billing.",
    },
    {
        q: "What counts as a render?",
        a: "Each AI-generated interior image from a floor plan upload counts as one render. Re-running the same design counts as a new render.",
    },
    {
        q: "How does the Free plan work?",
        a: "The Free plan resets every calendar month. No credit card is needed — just sign up and start designing.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We use Stripe for secure payments — Visa, Mastercard, American Express, and most local payment methods are supported.",
    },
    {
        q: "Is there an annual discount?",
        a: "Annual billing gives you 2 months free (effectively 17% off). Toggle annual/monthly at checkout.",
    },
];

export default function Pricing() {
    return (
        <div className="pricing-page">
            <Navbar />

            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative py-24 px-6 text-center overflow-hidden">
  {/* Background glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
    
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full" />
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative z-10 max-w-3xl mx-auto"
  >
    {/* Badge */}
    <span className="inline-block mb-4 text-xs font-medium px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
      Simple, transparent pricing
    </span>

    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
      The right plan for <br />
      <span className="text-indigo-400">every creator</span>
    </h1>

    {/* Subtitle */}
    <p className="text-zinc-400 text-base md:text-lg mb-8">
      Start free, upgrade when you're ready. No hidden fees, no surprises.
    </p>

    {/* Trust row */}
    <div className="flex items-center justify-center gap-4 flex-wrap text-sm text-zinc-400">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-indigo-400" />
        <span>Secured & processed by Stripe</span>
      </div>

      <div className="flex items-center gap-2">
        <Zap className="w-4 h-4 text-indigo-400" />
        <span>Cancel anytime</span>
      </div>
    </div>
  </motion.div>
</section>

            {/* ── Plans grid ───────────────────────────────────────── */}
            <section className="pricing-plans">
                <div className="pricing-section-inner">
                    <div className="pricing-grid">
                        {PLANS.map((plan) => (
                            <PricingCard key={plan.tier} {...plan} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stripe trust bar ─────────────────────────────────── */}
            <section className="pricing-stripe-bar">
                <div className="pricing-section-inner">
                    <div className="stripe-trust">
                        <svg viewBox="0 0 60 25" className="stripe-trust__logo" aria-label="Stripe">
                            <path
                                d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a14.4 14.4 0 0 1-4.83.87c-4.28 0-7.18-2.76-7.18-7.75 0-4.32 2.6-7.76 6.61-7.76 4.14 0 6.21 3.44 6.21 7.62v2.1zm-5.92-4.9c-1.03 0-2.17.73-2.17 2.58h4.22c0-1.85-1.03-2.58-2.05-2.58zm-13.8-2.85c1.25 0 2.07.58 2.6 1.47l.19-1.3H47v14.1h-4.32v-11.3c-.54-.88-1.36-1.47-2.53-1.47-1.74 0-2.96 1.27-2.96 3.52v9.25h-4.32V6.7h4.06zm-9.45-2.43c0-1.25-1.01-2.07-2.26-2.07S25.95 2.85 25.95 4.1s1.01 2.07 2.26 2.07 2.26-.82 2.26-2.07zm.23 2.43v14.1H26.4V6.53h4.3zM23.26 6.7v13.93h-4.3V6.7h4.3zm0-2.43c0-1.25-1.01-2.07-2.15-2.07S18.96 2.95 18.96 4.2s1.01 2.07 2.15 2.07 2.15-.82 2.15-2.07zm-9.93 2.43c1.52 0 2.66.7 3.14 1.7l.15-1.4h4.22v14.1H16.6v-1.4c-.5 1-1.62 1.67-3.14 1.67-3.6 0-5.87-3.12-5.87-7.38 0-4.25 2.27-7.29 5.74-7.29zm1.27 3.8c-1.57 0-2.65 1.2-2.65 3.52 0 2.29 1.08 3.48 2.65 3.48s2.65-1.19 2.65-3.48c0-2.33-1.08-3.52-2.65-3.52zM5.12 0C2.29 0 .43 1.86.43 4.7v15.43h4.34V12.5h2.6l2.6 7.63h4.63L11.4 11.6c1.98-.88 3.01-2.62 3.01-5.08C14.41 2.07 12.13 0 9.17 0H5.12zm-.35 4.04h3.95c1.25 0 2.07.82 2.07 2.3 0 1.5-.82 2.3-2.07 2.3H4.77V4.04z"
                                fill="currentColor"
                            />
                        </svg>
                        <span>All payments are processed securely through Stripe.</span>
                        <span className="stripe-trust__separator">·</span>
                        <span>256-bit SSL encryption</span>
                        <span className="stripe-trust__separator">·</span>
                        <span>PCI DSS compliant</span>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────── */}
            <section className="pricing-faq">
                <div className="pricing-section-inner">
                    <div className="pricing-section-head">
                        <p className="pricing-label">Have questions?</p>
                        <h2>Frequently asked</h2>
                    </div>

                    <div className="faq-grid">
                        {FAQS.map(({ q, a }) => (
                            <div key={q} className="faq-item">
                                <h3 className="faq-item__q">{q}</h3>
                                <p className="faq-item__a">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
