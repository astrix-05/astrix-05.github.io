'use client';

import { DATA } from "./data";
import Header from "./header";
import Footer from "./footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Spotlight, SpotlightCard } from "@/components/ui/spotlight";
import { TextMorph } from "@/components/ui/text-morph";
import { Magnetic } from "@/components/ui/magnetic";
import { 
  MorphingDialog, 
  MorphingDialogTrigger, 
  MorphingDialogContent, 
  MorphingDialogClose, 
  MorphingDialogTitle, 
  MorphingDialogDescription, 
  MorphingDialogImage,
  MorphingDialogContainer
} from "@/components/ui/morphing-dialog";
import { motion } from "framer-motion";
import { Github, ExternalLink, Mail, ArrowRight, Code, Server, Terminal, Bitcoin, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Code: Code,
  Server: Server,
  Bitcoin: Bitcoin,
  Terminal: Terminal,
  Github: Github
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <ScrollProgress className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50" />
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255, 255, 255, 0.1)" />
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4 px-3 py-1 border border-zinc-700 bg-black text-sm text-zinc-400 font-mono tracking-widest lowercase">
              available for work
            </div>
          </motion.div>
          
          <div className="mt-4 mb-6">
            <h1 className="text-6xl md:text-[10rem] font-bold font-display tracking-tighter leading-none lowercase">
              <span className="text-zinc-600 block text-4xl md:text-6xl mb-4">i am</span>
              ankit singh.
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            <TextMorph text={DATA.role} />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-500 max-w-lg mx-auto mb-10 leading-relaxed font-mono text-sm"
          >
            {DATA.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Magnetic>
              <Link href="#projects" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors lowercase tracking-widest text-sm font-mono">
                view projects
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="#contact" className="px-8 py-3 border border-zinc-700 text-zinc-400 hover:border-white hover:text-white transition-colors lowercase tracking-widest text-sm font-mono">
                contact me
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 relative">
        <div className="container px-4 mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold font-display mb-16 tracking-tight lowercase"
          >
            featured <span className="text-gradient">projects</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DATA.projects.map((project, index) => (
              <MorphingDialog key={project.id} transition={{ type: "spring", bounce: 0.05, duration: 0.3 }}>
                <MorphingDialogTrigger>
                  <div className="group border border-zinc-800 hover:border-white transition-colors p-6 h-full bg-black">
                    <div className="aspect-video w-full bg-zinc-900 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for image if not exists */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-600 font-mono text-xs lowercase tracking-widest">
                           {project.name} preview
                        </div>
                     </div>
                     <h3 className="text-3xl font-bold font-display mb-2 italic lowercase">{project.name}</h3>
                     <p className="text-zinc-500 mb-6 line-clamp-2 font-mono text-sm">{project.description}</p>
                     <div className="flex flex-wrap gap-2 mt-auto border-t border-zinc-800 pt-4">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-xs font-mono lowercase tracking-wider text-zinc-400">
                           [{tag}]
                         </span>
                       ))}
                     </div>
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContent className="bg-black border border-white p-0 rounded-none">
                  <MorphingDialogContainer>
                    <div className="relative p-8">
                        <div className="aspect-video w-full bg-zinc-900 mb-8 overflow-hidden flex items-center justify-center border border-zinc-800">
                            <span className="text-zinc-500 font-mono text-xs lowercase">project image / video placeholder</span>
                        </div>
                        <MorphingDialogTitle className="text-4xl font-bold font-display mb-4 italic lowercase">{project.name}</MorphingDialogTitle>
                        <div className="flex gap-4 mb-8 border-b border-zinc-800 pb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono lowercase tracking-wider text-zinc-400">
                                    [{tag}]
                                </span>
                            ))}
                        </div>
                        <MorphingDialogDescription className="text-lg text-zinc-300 leading-relaxed mb-8 font-serif">
                            {project.description}
                        </MorphingDialogDescription>
                        
                        <div className="flex gap-4">
                            <Link 
                                href={project.github} 
                                target="_blank"
                                className="flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors font-mono text-sm lowercase tracking-wider"
                            >
                                <Github className="w-4 h-4" />
                                github
                            </Link>
                            {project.link !== project.github && (
                                <Link 
                                    href={project.link} 
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-400 hover:border-white hover:text-white transition-colors font-mono text-sm lowercase tracking-wider"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    live demo
                                </Link>
                            )}
                        </div>
                        <MorphingDialogClose className="text-zinc-500 hover:text-white" />
                    </div>
                  </MorphingDialogContainer>
                </MorphingDialogContent>
              </MorphingDialog>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900/20">
        <div className="container px-4 mx-auto">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl font-bold font-display mb-16 text-center lowercase"
            >
                technical <span className="text-gradient">arsenal</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {DATA.skills.map((category, idx) => {
                    const Icon = iconMap[category.icon] || Code;
                    return (
                        <div key={idx} className="bg-black border border-zinc-800 p-6 hover:border-white transition-colors">
                            <div className="mb-6 text-white">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold font-display mb-6 italic border-b border-zinc-800 pb-2 lowercase">{category.category}</h3>
                            <ul className="space-y-3">
                                {category.skills.map(skill => (
                                    <li key={skill} className="text-zinc-400 flex items-center gap-3 font-mono text-sm lowercase">
                                        <span className="w-1 h-1 bg-zinc-600" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32">
        <div className="container px-4 mx-auto max-w-4xl">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl font-bold font-display mb-16 tracking-tight lowercase"
            >
                work <span className="text-gradient">experience</span>
            </motion.h2>

            <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-zinc-800 md:before:left-8">
                {DATA.experience.map((exp, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative pl-8 md:pl-24"
                    >
                        <div className="absolute left-[-3px] md:left-[29px] top-2 w-1.5 h-1.5 bg-black border border-white" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-2xl font-bold font-display italic lowercase">{exp.company}</h3>
                            <span className="text-zinc-500 font-mono text-sm lowercase">{exp.period}</span>
                        </div>
                        <div className="text-white font-medium mb-4 font-mono text-sm lowercase tracking-wider">{exp.role}</div>
                        <p className="text-zinc-400 leading-relaxed font-serif text-lg lowercase">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-black to-zinc-900/50">
        <div className="container px-4 mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl font-bold font-display mb-8 lowercase"
            >
                let&apos;s build <span className="text-gradient">together</span>
            </motion.h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12 lowercase">
                i&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex justify-center gap-6">
                {DATA.socials.map((social) => {
                    const Icon = social.name === 'GitHub' ? Github : social.name === 'Twitter' ? Twitter : social.name === 'LinkedIn' ? Linkedin : Mail;
                    return (
                        <Magnetic key={social.name}>
                            <Link 
                                href={social.url}
                                target="_blank"
                                className="w-14 h-14 border border-zinc-800 bg-black flex items-center justify-center text-zinc-400 hover:border-white hover:text-white transition-all duration-300"
                            >
                                <Icon className="w-6 h-6" />
                            </Link>
                        </Magnetic>
                    )
                })}
            </div>
            
            <div className="mt-20 text-zinc-600 text-sm">
                <Link href="mailto:your-email@example.com" className="hover:text-white transition-colors">
                    your-email@example.com
                </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
