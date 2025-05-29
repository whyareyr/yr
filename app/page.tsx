import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiLeetcode } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/floating-nav";
import { SkillsSection } from "@/components/skills-section";
import { ProjectCard } from "@/components/project-card";
import { ProductDeckCard } from "@/components/product-deck-card";
import { GithubRepoCard } from "@/components/github-repo-card";
import { InternshipCard } from "@/components/internship-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <FloatingNav />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20 md:py-32"
      >
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-purple-800 shadow-xl">
            <Image
              src="/yooshahero.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-blue-800 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Yoosha Raza
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            CSE DTU'26, Product & Full Stack Developer crafting exceptional
            digital experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#projects">
              <Button size="lg" className="bg-purple-800 hover:bg-purple-700">
                View Projects
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-800 text-purple-800 hover:bg-purple-800/10"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <Link
              href="https://github.com/whyareyr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Github className="h-8 w-8 text-purple-800" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://leetcode.com/u/leningrad1234/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <SiLeetcode className="h-8 w-8 text-purple-800" />
              <span className="sr-only">Leetcode</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yoosha-raza/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8 text-purple-800" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="mailto:yoosharaza29@yahoo.com"
              className="transition-transform hover:scale-110"
            >
              <Mail className="h-8 w-8 text-purple-800" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-700 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-blue-700 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-yellow-500 blur-3xl"></div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-purple-800 md:text-4xl">
            GitHub Repositories
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Check out some of my featured open-source work and contributions
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GithubRepoCard
              name="Noteify"
              description="A minimalist note-taking app with AI summaries and a clean, distraction-free interface."
              language="TypeScript, React, TypeScript, Tailwind CSS, Supabase"
              url="https://github.com/whyareyr/noteify"
            />
            <GithubRepoCard
              name="TickBounty"
              description="A bug bounty platform where developers and businesses collaborate to solve problems."
              language="Typescript, Next.js, React, Tailwind CSS, Prisma, Supabase"
              url="https://github.com/whyareyr/tick-bounty"
            />
            <GithubRepoCard
              name="Quizzly"
              description="Gamified quiz platform with instant quizzes and dynamic question generation with AI"
              language="Typescript, Next.js, Tailwind CSS, Prisma, Supabase"
              url="https://github.com/whyareyr/quizzly"
            />

            <GithubRepoCard
              name="Backend Delivery App"
              description="It manages various delivery services, including user and delivery partner management"
              language="Javascript ,Node.JS, Fastify, MongoDB, AdminJS"
              url="https://github.com/whyareyr/backend-delivery-app"
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://github.com/whyareyr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-purple-800 text-purple-800 hover:bg-purple-800/10"
              >
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-purple-900/10 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-purple-800 md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            A comprehensive overview of my technical and professional
            capabilities
          </p>

          <SkillsSection />
        </div>
      </section>

      {/* Product Decks Section */}
      <section id="decks" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-purple-800 md:text-4xl">
            Product Decks
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Explore my product presentations, case studies, and design thinking
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductDeckCard
              title="Country Delight Teardown"
              description="A comprehensive teardown of the Country Delight app, analyzing its features and user experience"
              imageUrl="/countrydelight.png"
              downloadUrl="https://www.linkedin.com/posts/yoosha-raza_cd-activity-7321163613786828802-jC2d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6LI-gB_4turaPQ_jip21y3W9i35rNgIow"
              viewUrl="https://www..com/posts/yoosha-raza_cd-activity-7321163613786828802-jC2d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6LI-gB_4turaPQ_jip21y3W9i35rNgIow"
            />
            <ProductDeckCard
              title="Spotify Freemium to premium"
              description="Strategic approach to conversion of freemium users to premium subscribers on Spotify"
              imageUrl="/spotify.jpg"
              downloadUrl="https://docs.google.com/presentation/d/1GgCav-SyMG86rWLAIDa-odsXdhkJZifTP-MGWL6LREQ/embed?start=false&loop=false&delayms=3000&slide=id.g2f8206770af_0_2"
              viewUrl="https://docs.google.com/presentation/d/1GgCav-SyMG86rWLAIDa-odsXdhkJZifTP-MGWL6LREQ/embed?start=false&loop=false&delayms=3000&slide=id.g2f8206770af_0_2"
            />
            <ProductDeckCard
              title="Integration PRD"
              description="Crafted a PRD for backend integration of Zeotap and Salesforce for better customer data management"
              imageUrl="/integration-prd.png"
              downloadUrl="https://www.notion.so/Integration-PRD-Yoosha-Raza-1e23730d7d238021908efa2ad6c9e96e?pvs=4"
              viewUrl="https://www.notion.so/Integration-PRD-Yoosha-Raza-1e23730d7d238021908efa2ad6c9e96e?pvs=4"
            />
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-purple-800 md:text-4xl">
            Professional Experience
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            A timeline of my internships and professional experiences
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <InternshipCard
              company="CrackNonTech"
              position="Founder's Office Product Development Intern"
              logoUrl="/cracknontech.jpeg"
              location="Gurgaon, India"
              duration="Jan 2025 - April 2025"
              description="Revamped the company website and analytics dashboard, boosting organic discovery and engagement by 35%. Automated the intern onboarding and content pipeline, coordinated webinars with 500+ registrations, and directly contributed to ₹1.4L+ in revenue growth through product-led initiatives"
              skills={[
                "Product Strategy",
                "Growth",
                "Analytics",
                "Google Cloud Platform",
              ]}
              companyUrl="#"
            />

            <InternshipCard
              company="Zafda"
              position="Product Management Intern"
              logoUrl="/zrosh_logo.jpeg"
              location="Bangalore, India"
              duration="Sep 2024 – Nov 2024"
              description="Defined product roadmaps, made PRDs, and collaborated with devs to launch new features.Launched a WhatsApp chatbot, used by 1000+ users. Used analytics to prioritize features and improve user engagement by 20%."
              skills={[
                "Product Strategy",
                "User Research",
                "Notion",
                "Figma",
                "APIs",
                "Growth Analytics",
              ]}
              companyUrl="#"
            />

            <InternshipCard
              company="Athenyx"
              position="Web Developer Intern"
              logoUrl="/athenyx.jpeg"
              location="Paris, France"
              duration="Mar 2024 – May 2024"
              description="Built and optimized frontend components for a web platform. Integrated secure login systems and implemented performance improvements across key pages."
              skills={[
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "Auth",
                "Performance Optimization",
              ]}
              companyUrl="#"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-purple-900/10 py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-purple-800 md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            A selection of my best work across design and development
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="Noteify"
              description="A smart note-taking web app with AI-powered summarization and tagging. Users can create, organize, and get concise summaries of long notes using OpenAI’s API."
              imageUrl="/noteify.png"
              techStack={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "OpenAI API",
                "Supabase",
              ]}
              liveUrl="https://noteify.vercel.app"
              githubUrl="https://github.com/whyareyr/noteify"
            />
            <ProjectCard
              title="TickBounty"
              description="A developer-focused task board where contributors earn bounties for resolving issues."
              imageUrl="/tickbounty.png"
              techStack={[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Supabase",
              ]}
              liveUrl="https://www.linkedin.com/posts/yoosha-raza_excited-to-share-my-latest-project-tickbounty-activity-7283969887364886528-DABl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6LI-gB_4turaPQ_jip21y3W9i35rNgIow"
              githubUrl="https://github.com/whyareyr/tick-bounty"
            />
            <ProjectCard
              title="Swise"
              description="A mobile-first expense splitting app inspired by Splitwise. Supports real-time balances, group tracking, and Firebase-based Google authentication. Built with a clean, minimalist UI using Expo and Zustand."
              imageUrl="/swise.png"
              techStack={[
                "React Native",
                "Expo",
                "Zustand",
                "Firebase",
                "AsyncStorage",
              ]}
              liveUrl="https://www.linkedin.com/posts/yoosha-raza_asyncstorage-zustand-swise-activity-7321466121541349376-uLtQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD6LI-gB_4turaPQ_jip21y3W9i35rNgIow"
              githubUrl="https://github.com/whyareyr/swise"
            />
            <ProjectCard
              title="Quizzly"
              description="An AI app, that delivers 10 questions either MCQ or Open Ended to the user."
              imageUrl="/quizzly.png"
              techStack={[
                "Next.js",
                "Typescript",
                "Prisma",
                "OpenAI API",
                "Tailwind CSS",
              ]}
              liveUrl="https://drive.google.com/file/d/1fRoVTzb4jHDEmPRXtkL9FnenTyoQbBoy/view"
              githubUrl="https://github.com/whyareyr/quizzly"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 p-8 shadow-lg">
            <h2 className="mb-2 text-center text-3xl font-bold text-purple-800 md:text-4xl">
              Get In Touch
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">
              Interested in working together? Feel free to reach out for
              collaborations or just a friendly hello
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-background p-6 shadow-sm">
                <Mail className="h-10 w-10 text-purple-800" />
                <h3 className="text-xl font-semibold">Email Me</h3>
                <p className="text-center text-muted-foreground">
                  The fastest way to get in touch with me
                </p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  href="mailto:yoosharaza29@yahoo.com"
                >
                  <Button className="mt-2 bg-purple-800 hover:bg-purple-700">
                    yoosharaza29@yahoo.com
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-background p-6 shadow-sm">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                  href="https://www.linkedin.com/in/yoosha-raza/"
                >
                  <Linkedin className="h-10 w-10 text-purple-800" />
                  <h3 className="text-xl font-semibold">Connect on LinkedIn</h3>
                  <p className="text-center text-muted-foreground">
                    Let's connect professionally
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2 border-purple-800 text-purple-800 hover:bg-purple-800/10"
                  >
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-purple-800">YR</span>
              <span className="text-muted-foreground">
                © {new Date().getFullYear()} Yoosha Raza. All rights reserved.
              </span>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://github.com/whyareyr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-purple-800" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/yoosha-raza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-purple-800" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://leetcode.com/whyareyr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="h-5 w-5 text-muted-foreground hover:text-purple-800" />
                <span className="sr-only">Leetcode</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
