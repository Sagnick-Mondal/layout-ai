import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps {
  tier: "free" | "solo" | "team" | "enterprise";
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  stripeUrl: string;
  badge?: string;
  highlighted?: boolean;
}

const tierAccentMap: Record<PricingCardProps["tier"], string> = {
  free: "text-zinc-400",
  solo: "text-blue-400",
  team: "text-indigo-400",
  enterprise: "text-amber-400",
};

const tierCheckMap: Record<PricingCardProps["tier"], string> = {
  free: "text-zinc-400",
  solo: "text-blue-400",
  team: "text-indigo-400",
  enterprise: "text-amber-400",
};

const PricingCard = ({
  tier,
  name,
  price,
  period = "/month",
  description,
  features,
  ctaLabel,
  stripeUrl,
  badge,
  highlighted = false,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-xl p-6 flex flex-col justify-between ${
        highlighted
          ? "ring-1 ring-blue-500/40 shadow-xl shadow-blue-500/10"
          : ""
      }`}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm font-medium ${tierAccentMap[tier]}`}>
            {name}
          </span>

          {badge && (
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
              {badge}
            </span>
          )}
        </div>

        <div className="flex items-end gap-1 mb-2">
          <span className="text-3xl font-semibold text-white">{price}</span>
          {price !== "Free" && price !== "Custom" && (
            <span className="text-sm text-zinc-400">{period}</span>
          )}
        </div>

        <p className="text-sm text-zinc-400 mb-6">{description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((f) => (
          <li
            key={f.text}
            className="flex items-center gap-3 text-sm text-zinc-300"
          >
            {f.included ? (
              <Check className={`${tierCheckMap[tier]} w-4 h-4`} />
            ) : (
              <Minus className="text-zinc-600 w-4 h-4" />
            )}
            <span className={f.included ? "" : "text-zinc-500"}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto w-full text-center py-2.5 rounded-lg text-sm font-medium transition ${
          highlighted
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-zinc-800 text-white hover:bg-zinc-700"
        }`}
      >
        {ctaLabel}
      </a>
    </motion.div>
  );
};

export default PricingCard;