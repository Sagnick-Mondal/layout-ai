import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Mehta",
    role: "Interior Designer",
    content:
      "LayoutAI completely changed how I present designs. Clients are blown away every time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Architect",
    content:
      "The speed is insane. What used to take days now takes minutes.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Freelancer",
    content:
      "Super clean UI and powerful features. Easily worth it.",
    rating: 4,
  },
  {
    name: "Neha Kapoor",
    role: "Studio Owner",
    content:
      "We use LayoutAI daily. It has become part of our workflow.",
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "Real Estate Developer",
    content:
      "Helped us visualize projects before construction. Huge win.",
    rating: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-600"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-blue-400 mb-2">Testimonials</p>
        <h2 className="text-3xl font-semibold text-white">
          Loved by designers worldwide
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <StarRating rating={t.rating} />

              <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                “{t.content}”
              </p>

              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;