"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Database,
  Cloud,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BarChart3,
  Activity,
  Download,
  GraduationCap,
  Award,
  Send,
} from "lucide-react"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      title: "Airbnb Investment Analysis – Istanbul",
      description:
        "Analyzed Airbnb listing data from Istanbul to uncover high-return investment opportunities. Used Excel to perform data cleaning, calculate average pricing, and evaluate occupancy rates and neighborhood demand.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airbnb%20Istanbul-kAvvwKWy9J98HgvTzZFNmwsu0eU7ZP.png",
      technologies: ["Excel", "Data Analysis", "Dashboard Design", "ROI Analysis"],
      category: "Data Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      github: "https://github.com/Qadrageous/Airbnb_Istanbul",
      demo: "#",
      featured: true,
    },
    {
      title: "Bahrain Medical Import Analysis",
      description:
        "Real-world business consulting simulation analyzing Bahrain's medical import trends (2020–2024). Developed dynamic Power BI dashboard to visualize cost trends, volume per product, and import source mapping.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MedImport-eoQE452odaiHVCleSxxjj9nTqYizSK.png",
      technologies: ["Power BI", "Data Visualization", "Business Intelligence", "Trend Analysis"],
      category: "Data Analytics",
      icon: <Activity className="w-5 h-5" />,
      github: "https://github.com/Qadrageous/Bahrain_Imports",
      demo: "#",
      featured: true,
    },
    {
      title: "Suicide Rate Analysis & Awareness",
      description:
        "Comprehensive data analysis project examining global suicide rates and mental health trends. Created awareness materials and visualizations to promote mental health support and suicide prevention initiatives.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Suicide-4fq49r1YfbwBG7gM1tKQrcCFCz0xxU.png",
      technologies: ["Data Analysis", "Mental Health Research", "Awareness Campaign", "Social Impact"],
      category: "Data Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      github: "#",
      demo: "#",
      featured: true,
    },
  ]

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Create email content
    const emailSubject = `Portfolio Contact: ${subject}`
    const emailBody = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`

    // Open default email client with pre-filled content
    window.location.href = `mailto:abdulqadeer.aqr@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/AbdulQadeer_Resume.pdf"
    link.download = "AbdulQadeer_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(8,145,178,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(8,145,178,0.2),transparent_50%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4 text-sm font-medium">
                  <Shield className="w-3 h-3 mr-1" />
                  AWS Certified Cloud Practitioner
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                  Hi, I'm <span className="text-primary">AbdulQadeer</span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 text-balance">
                  Cybersecurity & Data Analytics Student
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
                  Passionate about securing digital infrastructures and extracting insights from data. Currently
                  pursuing my degree at University of Bahrain while building expertise in threat detection, cloud
                  security, and data-driven cybersecurity solutions.
                </p>
              </div>

              {/* Skills Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Cybersecurity</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border">
                  <Database className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Data Analytics</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border">
                  <Cloud className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">AWS Cloud</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="text-base font-medium">
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-base font-medium"
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border/50 backdrop-blur-sm">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-xl flex items-center justify-center overflow-hidden border border-primary/10">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional%20Pic-ej7nMu9sWsvKjpdi1K8qurenz5Abd0.png"
                      alt="AbdulQadeer - Professional Photo"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/20">
                  <Cloud className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Passionate cybersecurity and data analytics enthusiast with a strong foundation in network security,
              ethical hacking, and cloud services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio & Education */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  I'm a dedicated cybersecurity and data analytics student at the University of Bahrain, passionate
                  about applying data-driven insights to solve complex security challenges. My expertise spans threat
                  detection, cloud security, and analytical thinking, with hands-on experience in SOC monitoring and red
                  teaming concepts.
                </p>
                <p className="text-muted-foreground text-pretty">
                  Through my AWS certification and practical projects, I've developed a unique perspective on how data
                  analytics can enhance cybersecurity operations, making me well-suited for roles in SOC, cyber
                  analytics, or security consulting.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Bachelor's in Cybersecurity</h4>
                      <Badge variant="outline">Expected Jan 2026</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">University of Bahrain</p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive study of network security, cryptography, ethical hacking, and IT auditing
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Data Analytics Immersive Bootcamp</h4>
                      <Badge variant="outline">Jun 2025 - Sep 2025</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">General Assembly Bahrain</p>
                    <p className="text-sm text-muted-foreground">
                      Intensive program covering SQL, Python, Power BI, and real-world data analysis projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">AWS Certified Cloud Practitioner</h4>
                      <p className="text-sm text-muted-foreground">Amazon Web Services • May 2024</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => window.open("https://aws.amazon.com/verification", "_blank")}
                      className="block w-full max-w-md mx-auto hover:opacity-90 transition-opacity duration-200 rounded-lg overflow-hidden border border-border/50 hover:border-primary/20"
                    >
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-28%20000528-7YvQJhKJvbGqKJvbGqKJvb.png"
                        alt="AWS Certified Cloud Practitioner Certificate - AbdulQadeer Khan"
                        className="w-full h-auto"
                      />
                    </button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Click to verify certificate • Validation: c73f9e7a1c3b49bfb4a46dffd95e8ccd
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>

                {/* Cybersecurity Tools */}
                <div className="mb-8">
                  <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Cybersecurity Tools
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Kali Linux", "Burp Suite", "Nmap", "Wireshark"].map((skill) => (
                      <div key={skill} className="bg-card px-3 py-2 rounded-lg border text-sm font-medium text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Programming Languages */}
                <div className="mb-8">
                  <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                    <Database className="w-4 h-4 text-accent" />
                    Programming Languages
                  </h4>
                  <div className="space-y-3">
                    {[
                      { name: "Python", level: 85 },
                      { name: "SQL", level: 80 },
                      { name: "JavaScript", level: 70 },
                      { name: "Java", level: 65 },
                      { name: "PHP", level: 60 },
                    ].map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cloud & Analytics */}
                <div className="mb-8">
                  <h4 className="font-medium text-foreground mb-4 flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-primary" />
                    Cloud & Analytics
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["AWS (EC2, IAM, S3)", "Power BI", "Tableau", "Git/GitHub"].map((skill) => (
                      <div key={skill} className="bg-card px-3 py-2 rounded-lg border text-sm font-medium text-center">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <h4 className="font-medium text-foreground mb-4">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Analytical Thinking", "Problem Solving", "Teamwork", "Communication", "Adaptability"].map(
                      (skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A showcase of my work in cybersecurity, data analytics, and cloud security. Each project demonstrates
              practical skills and real-world problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {project.icon}
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.github, "_blank")}
                      disabled={project.github === "#"}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="w-6 h-6 bg-background/90 backdrop-blur-sm rounded-md flex items-center justify-center text-primary">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 pt-0">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs px-2">
                      <Github className="w-3 h-3" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs px-2">
                      <ExternalLink className="w-3 h-3" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 mx-auto bg-transparent"
              onClick={() => window.open("https://github.com/Qadrageous?tab=repositories", "_blank")}
            >
              <Github className="w-4 h-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Resume</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Download my complete resume or explore my professional journey and achievements below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Download Resume */}
            <div className="lg:col-span-1">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Get the complete version of my resume with detailed information about my experience and skills.
                </p>
                <Button size="lg" className="w-full" onClick={downloadResume}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </Card>
            </div>

            {/* Professional Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Timeline</h3>

                {/* Current Education */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Bachelor's in Cybersecurity</h4>
                      <Badge variant="secondary">2022 - 2026</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">University of Bahrain</p>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive study of network security, cryptography, ethical hacking, and IT auditing. Expected
                      graduation: January 2026.
                    </p>
                  </div>
                </div>

                {/* Data Analytics Bootcamp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Data Analytics Immersive Bootcamp</h4>
                      <Badge variant="secondary">Jun 2025 - Sep 2025</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">General Assembly Bahrain</p>
                    <p className="text-sm text-muted-foreground">
                      Intensive program covering SQL, Python, Power BI, and real-world data analysis projects. Completed
                      projects on Airbnb investment analysis and medical import trends.
                    </p>
                  </div>
                </div>

                {/* AWS Certification */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">AWS Certified Cloud Practitioner</h4>
                      <Badge variant="secondary">May 2024</Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">Amazon Web Services</p>
                    <p className="text-sm text-muted-foreground">
                      Demonstrated foundational knowledge of AWS cloud services, security, and best practices.
                    </p>
                  </div>
                </div>

                {/* Additional Certifications */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Additional Certifications</h4>
                      <Badge variant="secondary">2023 - 2024</Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• Cybersecurity Safety Online Awareness - NCSC Bahrain (Nov 2023)</p>
                      <p>• Essentials of Career Development - Thinksmart (Mar 2024)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">AWS Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Achieved AWS Cloud Practitioner certification, demonstrating cloud security expertise
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Data Analytics Projects</h4>
                <p className="text-sm text-muted-foreground">
                  Completed real-world analytics projects with measurable business impact
                </p>
              </Card>
              <Card className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Security Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Hands-on experience with cybersecurity tools and ethical hacking techniques
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always interested in discussing cybersecurity opportunities, data analytics projects, or potential
              collaborations. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Whether you're looking for a cybersecurity analyst, data analytics specialist, or someone passionate
                  about both fields, I'd love to hear from you. I'm particularly interested in SOC, red teaming, and
                  cyber analytics roles.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-sm text-muted-foreground">abdulqadeer.aqr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">www.linkedin.com/in/aqadeerk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">GitHub</h4>
                    <p className="text-sm text-muted-foreground">github.com/Qadrageous</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 bg-transparent"
                    onClick={() => window.open("https://github.com/Qadrageous", "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 bg-transparent"
                    onClick={() => window.open("https://www.linkedin.com/in/aqadeerk", "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 bg-transparent"
                    onClick={() => window.open("mailto:abdulqadeer.aqr@gmail.com", "_blank")}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Send Me a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <form id="contact-form" className="space-y-6" onSubmit={handleContactSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Job Opportunity / Project Collaboration"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about the opportunity or project you'd like to discuss..."
                        rows={5}
                        required
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="px-0 pb-0">
                  <Button type="submit" form="contact-form" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">AbdulQadeer</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Cybersecurity & Data Analytics Student passionate about securing digital infrastructures and extracting
                insights from data.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => window.open("https://github.com/Qadrageous", "_blank")}
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => window.open("https://www.linkedin.com/in/aqadeerk", "_blank")}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => window.open("mailto:abdulqadeer.aqr@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "About", "Projects", "Resume", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-4">Expertise</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Cybersecurity Analysis</p>
                <p>• Data Analytics & Visualization</p>
                <p>• AWS Cloud Security</p>
                <p>• Network Security Assessment</p>
                <p>• SOC Monitoring</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2024 AbdulQadeer. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
