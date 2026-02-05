export type Project = {
  name: string
  github: string
  description: string
  link: string
  video?: string
  image?: string
  type?: 'video' | 'image'
  id: string
  tags: string[]
  tech?: string[]
}

export type Skill = {
  category: string
  skills: string[]
  icon: string // Material UI icon name or similar identifier
}

export type Experience = {
  company: string
  role: string
  period: string
  description: string
}

export type Social = {
  name: string
  url: string
  icon: string
}

export const DATA = {
  name: "Ankit Singh",
  role: "Full-Stack Web3 Developer | Blockchain Enthusiast",
  bio: "Computer Science student from Punjab, India, building on Solana and NEAR ecosystems. Passionate about decentralized technologies and building the future of the web.",
  email: "your-email@example.com",
  github: "astrix-05",
  twitter: "@your_twitter",
  linkedin: "your-linkedin",
  
  projects: [
    {
      id: "worldwatch",
      name: "WorldWatch",
      description: "AI-powered decentralized scam detector for World App using Fluence DePIN. Protects messages, links, and transactions in real time.",
      tech: ["Web3", "AI/ML", "DePIN"],
      tags: ["Web3", "AI/ML", "DePIN"],
      github: "https://github.com/astrix-05/WorldWatch",
      link: "https://github.com/astrix-05/WorldWatch",
      type: "image",
      image: "/projects/worldwatch.png" // Placeholder
    },
    {
      id: "phantom-chat",
      name: "Phantom-chat",
      description: "Solana-native metadata-resistant messenger with post-quantum cryptography, integrated payment channels, and immutable on-chain audit trail.",
      tech: ["Rust", "Anchor", "Solana"],
      tags: ["Rust", "Anchor", "Solana"],
      github: "https://github.com/astrix-05/phantom-chat",
      link: "https://github.com/astrix-05/phantom-chat",
      type: "image",
      image: "/projects/phantom.png" // Placeholder
    },
    {
      id: "near-cursor-helper",
      name: "near_cursor_helper",
      description: "VS Code extension for rapid NEAR Rust smart contract development with intelligent scaffolding, templates, and one-click build & deploy workflows.",
      tech: ["TypeScript", "NEAR", "VS Code API"],
      tags: ["TypeScript", "NEAR", "VS Code API"],
      github: "https://github.com/astrix-05/near_cursor_helper",
      link: "https://github.com/astrix-05/near_cursor_helper",
      type: "image",
      image: "/projects/near.png" // Placeholder
    }
  ] as Project[],

  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "React Native"],
      icon: "Code"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Rust", "Anchor", "Prisma", "PostgreSQL"],
      icon: "Server"
    },
    {
      category: "Web3",
      skills: ["Solana", "NEAR", "Smart Contracts", "Anchor Framework"],
      icon: "Bitcoin" // Using a proxy for Web3
    },
    {
      category: "Languages",
      skills: ["Rust", "TypeScript", "JavaScript", "Python", "C++"],
      icon: "Terminal"
    }
  ] as Skill[],

  experience: [
    {
      company: "Superteam",
      role: "Bounty Hunter",
      period: "2025 - Present",
      description: "Participating in and winning hackathons and bounties within the Solana ecosystem."
    },
    {
      company: "Nearn",
      role: "Contributor",
      period: "2025 - Present",
      description: "Contributing to the Nearn platform and ecosystem."
    },
    {
      company: "Open Source",
      role: "Developer",
      period: "2024 - Present",
      description: "Active contributor to various open-source projects in the Web3 space."
    }
  ] as Experience[],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/astrix-05",
      icon: "Github"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your_twitter",
      icon: "Twitter"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-linkedin",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:your-email@example.com",
      icon: "Mail"
    }
  ] as Social[]
}
