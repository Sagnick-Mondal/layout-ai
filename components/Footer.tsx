import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">

        {/* Left */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-2">LayoutAI</h2>
          <p className="text-sm text-zinc-400 max-w-sm">
            AI-powered interior design platform to visualize and build spaces faster.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12">
          <div>
            <p className="text-sm text-white mb-3">Product</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-white mb-3">Company</p>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div>
          <p className="text-sm text-white mb-3">Community</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="#"
              className="text-zinc-400 hover:text-white"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="text-zinc-400 hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} LayoutAI. All rights reserved.
      </div>
    </footer>
  );
}