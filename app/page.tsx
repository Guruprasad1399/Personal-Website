"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
  Avatar,
  Divider,
} from "@mui/material";
import Grid from "@mui/system/Grid";
import {
  Download as DownloadIcon,
  GitHub,
  LinkedIn,
  LocationOn,
  Work,
  Email,
  Psychology,
  RecordVoiceOver,
  Translate,
  AutoAwesome,
  TrendingUp,
  Storage,
  Code,
  Cloud,
  PhoneAndroid,
  OpenInNew,
} from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const aiProjects = [
  {
    name: "Text-to-Speech AI App",
    description:
      "React Native mobile app that converts text to speech, transcribes speech to text, and transforms tweets into audio using modern AI APIs. Features audio playback controls, sharing, and background audio support.",
    tech: ["React Native", "TypeScript", "Expo", "AI/TTS", "Speech-to-Text", "OpenAI"],
    github: "https://github.com/Guruprasad1399/AI_App",
    category: "AI/ML",
    icon: "voice",
    highlight: true,
  },
  {
    name: "Language Detector",
    description:
      "NLP-powered language detection engine built with Node.js. Analyzes text input and identifies the programming or natural language with high accuracy using machine learning techniques.",
    tech: ["Node.js", "NLP", "JavaScript", "Machine Learning", "Text Analysis"],
    github: "https://github.com/Guruprasad1399/language_detector",
    category: "AI/NLP",
    icon: "translate",
    highlight: true,
  },
];

const allProjects = [
  {
    name: "NovaTrader",
    description:
      "Full-stack trading platform for buying and selling stocks with real-time market data, portfolio management, and analytics. Backed by a Python-based REST API backend.",
    tech: ["TypeScript", "React", "Python", "AWS", "Real-time APIs"],
    github: "https://github.com/Guruprasad1399/NovaTrader",
    category: "FinTech",
  },
  {
    name: "Cloud E-commerce Backend",
    description:
      "Scalable microservices architecture for high-volume e-commerce operations with GraphQL API, containerized deployments, and distributed caching.",
    tech: ["Node.js", "GraphQL", "Docker", "Kubernetes", "MongoDB"],
    github: "https://github.com/Guruprasad1399/Cloud-native_e-commerce-Backend",
    category: "Cloud Native",
  },
  {
    name: "Angular Blog Platform",
    description:
      "Modern full-stack blogging platform with rich text editing, real-time collaboration, and a Java Spring Boot backend connected to PostgreSQL.",
    tech: ["Angular", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
    github: "https://github.com/Guruprasad1399/angular-blog-platform",
    category: "Full-Stack",
  },
  {
    name: "ShopWiseLocal",
    description:
      "React Native mobile app connecting users with local businesses and services, featuring maps integration, Firebase real-time sync, and location-based discovery.",
    tech: ["React Native", "JavaScript", "Node.js", "Firebase", "Maps API"],
    github: "https://github.com/Guruprasad1399/shopWiseLocal",
    category: "Mobile",
  },
  {
    name: "MAUI Cross-Platform App",
    description:
      ".NET MAUI Windows application with Bluetooth connectivity and device integration, showcasing cross-platform mobile/desktop development in C#.",
    tech: ["C#", ".NET MAUI", "Windows", "Bluetooth", "IoT"],
    github: "https://github.com/Guruprasad1399/MAUI_App",
    category: "Cross-Platform",
  },
  {
    name: "Realtime Chat App",
    description:
      "Live chat application built with React Native, Expo, and AWS Amplify — supporting real-time messaging and user authentication at scale.",
    tech: ["React Native", "TypeScript", "Expo", "AWS Amplify", "GraphQL"],
    github: "https://github.com/Guruprasad1399/Realtime_chat_App",
    category: "Mobile",
  },
];

const skills = [
  {
    category: "AI/ML & Data",
    icon: "ai",
    skills: [
      "OpenAI APIs",
      "Text-to-Speech (TTS)",
      "Speech-to-Text (STT)",
      "NLP",
      "TensorFlow",
      "LLM Integration",
      "Machine Learning",
      "Data Analytics",
    ],
  },
  {
    category: "Frontend Development",
    icon: "code",
    skills: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "HTML5/CSS3"],
  },
  {
    category: "Backend Development",
    icon: "storage",
    skills: ["Node.js", "Python", "Java", "Spring Boot", "GraphQL", "REST APIs", "Flask"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "AWS Amplify", "Docker", "Kubernetes", "CI/CD", "Microservices", "Serverless"],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "DynamoDB"],
  },
  {
    category: "Mobile Development",
    icon: "mobile",
    skills: ["React Native", "Expo", ".NET MAUI", "iOS", "Android", "Cross-platform"],
  },
];

const skillIcon = (icon: string) => {
  const props = { sx: { fontSize: 28, color: "primary.main", mb: 1 } };
  switch (icon) {
    case "ai": return <Psychology {...props} />;
    case "code": return <Code {...props} />;
    case "storage": return <Storage {...props} />;
    case "cloud": return <Cloud {...props} />;
    case "mobile": return <PhoneAndroid {...props} />;
    default: return <AutoAwesome {...props} />;
  }
};

const projectIcon = (icon: string) => {
  const props = { sx: { fontSize: 36, color: "primary.main" } };
  switch (icon) {
    case "voice": return <RecordVoiceOver {...props} />;
    case "translate": return <Translate {...props} />;
    default: return <AutoAwesome {...props} />;
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className="flex flex-col min-h-screen" sx={{ bgcolor: "background.default" }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f0f9ff 100%)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-50%",
            left: "-10%",
            width: "120%",
            height: "200%",
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(37,99,235,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(99,102,241,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="md">
          <Avatar
            src="/GuruprasadVenkatraman.jpg"
            alt="Guruprasad Venkatraman"
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              margin: "0 auto 1.5rem auto",
              border: "4px solid",
              borderColor: "primary.main",
              boxShadow: "0 8px 32px rgba(37,99,235,0.2)",
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            className="gradient-text"
            sx={{ mb: 1.5, fontSize: { xs: "2.2rem", md: "3.2rem" }, fontWeight: 700 }}
          >
            Guruprasad Venkatraman
          </Typography>

          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ mb: 3, fontWeight: 400, fontSize: { xs: "1.15rem", md: "1.4rem" } }}
          >
            Full-Stack Engineer & AI Specialist
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, justifyContent: "center", mb: 4 }}>
            <Chip icon={<Work />} label="Software Analyst @ Nomura" color="primary" variant="outlined" sx={{ fontWeight: 500 }} />
            <Chip icon={<LocationOn />} label="New York, NY" color="secondary" variant="outlined" sx={{ fontWeight: 500 }} />
            <Chip icon={<Psychology />} label="AI/ML Builder" sx={{ fontWeight: 500, bgcolor: "primary.main", color: "white", "& .MuiChip-icon": { color: "white" } }} />
          </Box>

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="/Guruprasad_Resume.pdf"
              target="_blank"
              download
              startIcon={<DownloadIcon />}
              sx={{ borderRadius: 2, px: 3 }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://github.com/Guruprasad1399"
              target="_blank"
              startIcon={<GitHub />}
              sx={{ borderRadius: 2, px: 3 }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
              target="_blank"
              startIcon={<LinkedIn />}
              sx={{ borderRadius: 2, px: 3 }}
            >
              LinkedIn
            </Button>
          </Box>
        </Container>
      </Box>

      <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>

        {/* About Section */}
        <Box id="about" sx={{ py: 8 }}>
          <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
            <Typography variant="h3" component="h2" gutterBottom className="gradient-text" sx={{ fontWeight: 700 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.8, color: "text.secondary" }}>
              I'm a full-stack software engineer with 5+ years of experience building scalable
              applications and AI-powered solutions. Currently working as a Software Analyst at
              Nomura in New York, I specialise in modern web technologies, cloud architecture,
              and integrating AI capabilities — including Text-to-Speech, Speech-to-Text, and
              NLP-based language intelligence — into real-world products.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "text.secondary" }}>
              With a Master's degree in Computer Science from Cleveland State University and
              44+ GitHub repositories, I'm passionate about building tools that leverage
              AI to create smarter, more intuitive user experiences.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Grid container spacing={3}>
              {[
                { number: "5+", label: "Years Experience" },
                { number: "44+", label: "GitHub Repos" },
                { number: "15+", label: "Technologies" },
                { number: "100+", label: "Projects Delivered" },
              ].map((stat) => (
                <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h4" color="primary" fontWeight={700}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        {/* AI Spotlight Section */}
        <Box id="ai-work" sx={{ py: 8 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              icon={<AutoAwesome />}
              label="AI Work"
              color="primary"
              sx={{ mb: 2, fontWeight: 600, fontSize: "0.85rem" }}
            />
            <Typography variant="h3" component="h2" className="gradient-text" sx={{ fontWeight: 700 }}>
              AI Projects
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, fontSize: "1.05rem" }}>
              Hands-on AI applications — from voice interfaces to NLP-powered language intelligence
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {aiProjects.map((project) => (
              <Grid size={{ xs: 12, md: 6 }} key={project.name}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: "1.5px solid",
                    borderColor: "primary.light",
                    background: "linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%)",
                    boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      boxShadow: "0 8px 40px rgba(37,99,235,0.18)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: "primary.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {project.icon === "voice"
                          ? <RecordVoiceOver sx={{ fontSize: 28, color: "white" }} />
                          : <Translate sx={{ fontSize: 28, color: "white" }} />}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <Typography variant="h6" fontWeight={700} color="text.primary">
                            {project.name}
                          </Typography>
                          <Chip label={project.category} size="small" color="primary" sx={{ fontWeight: 600 }} />
                        </Box>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 3 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            fontSize: "0.72rem",
                            bgcolor: "primary.50",
                            color: "primary.dark",
                            border: "1px solid",
                            borderColor: "primary.light",
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="outlined"
                      size="small"
                      href={project.github}
                      target="_blank"
                      startIcon={<GitHub />}
                      endIcon={<OpenInNew sx={{ fontSize: 14 }} />}
                      sx={{ borderRadius: 2 }}
                    >
                      View on GitHub
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            className="gradient-text"
            textAlign="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Technical Skills
          </Typography>

          <Grid container spacing={3}>
            {skills.map((skillGroup) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={skillGroup.category}>
                <Paper
                  sx={{
                    p: 3.5,
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                    transition: "box-shadow 0.2s",
                    "&:hover": { boxShadow: "0 4px 24px rgba(37,99,235,0.1)" },
                  }}
                >
                  {skillIcon(skillGroup.icon)}
                  <Typography variant="h6" gutterBottom color="primary" fontWeight={700} sx={{ mb: 2 }}>
                    {skillGroup.category}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {skillGroup.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor: "primary.main",
                          color: "primary.main",
                          fontWeight: 500,
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* All Projects */}
        <Box id="projects" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            className="gradient-text"
            textAlign="center"
            sx={{ mb: 2, fontWeight: 700 }}
          >
            More Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6, fontSize: "1.05rem" }}>
            Full-stack, cloud, mobile, and fintech — built across various domains
          </Typography>

          <Grid container spacing={3}>
            {allProjects.map((project) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.name}>
                <Card
                  component="a"
                  href={project.github}
                  target="_blank"
                  sx={{
                    height: "100%",
                    textDecoration: "none",
                    cursor: "pointer",
                    borderRadius: 3,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      boxShadow: "0 6px 32px rgba(37,99,235,0.14)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1.5 }}>
                      <Typography variant="h6" fontWeight={600} color="text.primary" sx={{ flex: 1, fontSize: "1rem" }}>
                        {project.name}
                      </Typography>
                      <Chip label={project.category} size="small" color="primary" variant="outlined" sx={{ ml: 1, fontWeight: 500 }} />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.65 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mb: 2.5 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "0.7rem", height: "22px", borderColor: "grey.300", color: "text.secondary" }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", color: "primary.main" }}>
                      <GitHub sx={{ mr: 0.75, fontSize: 18 }} />
                      <Typography variant="body2" fontWeight={500} fontSize="0.85rem">
                        View on GitHub
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button
              variant="contained"
              size="large"
              href="https://github.com/Guruprasad1399?tab=repositories"
              target="_blank"
              startIcon={<GitHub />}
              sx={{ borderRadius: 2, px: 4, mr: 2, mb: { xs: 2, sm: 0 } }}
            >
              View All 44+ Repositories
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="mailto:vgp1399@gmail.com"
              startIcon={<Email />}
              sx={{ borderRadius: 2, px: 4 }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>

        {/* Professional Experience */}
        <Box id="experience" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            className="gradient-text"
            textAlign="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Professional Experience
          </Typography>

          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 3,
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              borderLeft: "4px solid",
              borderColor: "primary.main",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3, flexWrap: "wrap", gap: 2 }}>
              <Box>
                <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
                  Software Analyst
                </Typography>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Nomura Securities International, Inc.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  New York, NY &nbsp;•&nbsp; 2019 – Present
                </Typography>
              </Box>
              <Chip label="Current Role" color="primary" sx={{ fontWeight: 600 }} />
            </Box>

            <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "text.secondary" }}>
              Leading development of AI-powered financial solutions and scalable trading platforms.
              Responsible for architecting cloud-native applications, implementing machine learning
              models, and optimising system performance for high-frequency trading environments.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {["Financial Technology", "AI/ML Integration", "Cloud Architecture", "Trading Systems", "Performance Optimisation"].map(
                (skill) => (
                  <Chip key={skill} label={skill} variant="outlined" size="small" sx={{ borderColor: "primary.main", color: "primary.main", fontWeight: 500 }} />
                )
              )}
            </Box>
          </Paper>
        </Box>

        {/* CTA */}
        <Box sx={{ py: 8 }}>
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              borderRadius: 3,
              background: "linear-gradient(135deg, #f0f4ff 0%, #eef2ff 100%)",
              boxShadow: "0 2px 20px rgba(37,99,235,0.08)",
            }}
          >
            <TrendingUp sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
            <Typography variant="h4" gutterBottom className="gradient-text" fontWeight={700}>
              Let's Build Something Amazing Together
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: "1.1rem", maxWidth: 560, mx: "auto" }}>
              Open to discussing new opportunities, AI-driven projects, and technical collaborations.
              Whether you need a full-stack developer or AI specialist — let's connect.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                href="mailto:vgp1399@gmail.com"
                startIcon={<Email />}
                sx={{ borderRadius: 2, px: 4 }}
              >
                Send Email
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/"
                target="_blank"
                startIcon={<LinkedIn />}
                sx={{ borderRadius: 2, px: 4 }}
              >
                Connect on LinkedIn
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
