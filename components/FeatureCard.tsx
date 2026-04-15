import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    badge?: string;
    gradient?: "blue" | "purple" | "pink" | "green";
}

const gradientMap = {
    blue: "from-blue-500/20 to-cyan-500/20",
    purple: "from-purple-500/20 to-indigo-500/20",
    pink: "from-pink-500/20 to-rose-500/20",
    green: "from-emerald-500/20 to-lime-500/20",
};

const glowMap = {
    blue: "shadow-blue-500/30",
    purple: "shadow-purple-500/30",
    pink: "shadow-pink-500/30",
    green: "shadow-emerald-500/30",
};

const FeatureCard = ({
    icon: Icon,
    title,
    description,
    badge,
    gradient = "blue",
}: FeatureCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`relative group rounded-2xl p-[1px] bg-gradient-to-br ${gradientMap[gradient]}`}
        >
            {/* Glow Effect */}
            <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 ${glowMap[gradient]}`}
            />

            {/* Card Content */}
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10">
                
                {/* Badge */}
                {badge && (
                    <span className="inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80">
                        {badge}
                    </span>
                )}

                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-white/80" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                    {description}
                </p>

                {/* Bottom subtle line */}
                <div className="mt-4 h-[1px] w-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:w-full transition-all duration-500" />
            </div>
        </motion.div>
    );
};

export default FeatureCard;