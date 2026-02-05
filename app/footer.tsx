import { DATA } from "./data";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold font-mono">Ankit Singh</span>
            <span className="text-sm text-zinc-500">© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex gap-6">
            {DATA.socials.map((social) => {
                const Icon = social.name === 'GitHub' ? Github : social.name === 'Twitter' ? Twitter : social.name === 'LinkedIn' ? Linkedin : Mail;
                return (
                    <Link 
                        key={social.name} 
                        href={social.url} 
                        target="_blank" 
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Icon className="w-5 h-5" />
                    </Link>
                )
            })}
        </div>
      </div>
    </footer>
  );
}
