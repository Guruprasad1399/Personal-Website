'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Chip,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import Grid from '@mui/system/Grid';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import { 
  WorkOutline as WorkIcon, 
  School as SchoolIcon, 
  Person as PersonIcon, 
  VerifiedUser as VerifiedUserIcon 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const experiences = [
    {
      title: "Software Analyst",
      company: "Nomura",
      location: "United States",
      period: "April 21, 2024 - Present",
      responsibilities: [
        "Contributing to AI-driven projects by developing backend microservices and supporting cloud integrations.",
        "Participating in internal AI platform development, working on machine learning model integrations and deployments.",
        "Using technologies such as Python, AWS services, Spring Boot, and React.js.",
        "Improving skills in data processing, model evaluation, and secure software deployment.",
        "Integrating authentication and SSO solutions into enterprise applications.",
        "Supporting the creation and enhancement of internal developer portal solutions."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Hinckley Medical",
      location: "United States",
      period: "January 2024 - April 2024",
      responsibilities: [
        "Developed responsive web applications using React Native and React.js.",
        "Implemented user interface components and optimized user experience.",
        "Integrated RESTful APIs to facilitate seamless communication between front-end and back-end systems.",
        "Conducted testing and debugging to ensure application reliability and performance.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions."
      ]
    },
    {
      title: "Software Developer Trainee",
      company: "SkillNet Solutions",
      location: "United States",
      period: "June 2023 - August 2023",
      responsibilities: [
        "Led the creation of responsive web applications using JavaScript, React JS, and Redux focusing on user interface design and interactivity.",
        "Integrated RESTful API services using Spring Boot, achieving a 50% improvement in data retrieval efficiency.",
        "Elevated application reliability by 25% through meticulous testing and debugging.",
        "Integrated cloud-based database services, optimizing application functionality and reducing response time by 40%."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Cleveland State University",
      location: "United States",
      period: "January 2022 - May 2023",
      responsibilities: [
        "Orchestrated the implementation of React.js and Laravel frameworks, resulting in a 50% increase in user satisfaction and a 25% decrease in bounce rate.",
        "Collaborated with backend teams on API development and integration, ensuring seamless full-stack functionality.",
        "Managed state and data flow in applications, leading to a 15% boost in efficiency and scalability.",
        "Transformed the user-experience testing process by integrating Nightwatch and Selenium, cutting testing time by 60%."
      ]
    },
    {
      title: "React Native Developer",
      company: "StackSmith Consultancy",
      location: "India",
      period: "October 2021 - March 2022",
      responsibilities: [
        "Integrated cloud-based database services and developed RESTful API services using Node.js.",
        "Integrated push notifications into mobile apps through Firebase Cloud Messaging.",
        "Led a team of 8 in advanced development of React Native mobile apps, achieving a 30% enhancement in system performance and contributing to a 40% increase in user engagement.",
        "Performed unit testing, debugging, and configured continuous integration tools such as Jenkins for automated deployment processes."
      ]
    },
    {
      title: "Software Engineer",
      company: "Triloki Smart Systems",
      location: "India",
      period: "August 2020 - July 2021",
      responsibilities: [
        "Streamlined website deployment processes using Jenkins, reducing deployment times by 50% and improving operational efficiency.",
        "Played a crucial role in development for various projects, focusing on backend systems, API integrations, and cloud-based solutions.",
        "Created and re-organized software solutions for data analysis and reporting, utilizing modern programming languages and database technologies."
      ]
    }
  ];

  const education = [
    {
      degree: "Master's degree, Computer Science",
      institution: "Cleveland State University",
      location: "Cleveland, OH, USA",
      period: "January 2022 - May 2023"
    },
    {
      degree: "Bachelor of Engineering - BE, Electrical, Electronics and Communications Engineering",
      institution: "Anand Institute Of Higher Technology",
      location: "Chennai, TN, India",
      period: "2016 - 2020"
    }
  ];

  return (
    <Box className="flex flex-col min-h-screen">
      <Navbar />
      
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Skills Overview */}
          <motion.div variants={fadeInUp}>
            <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <PersonIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                <Typography variant="h4" component="h2" fontWeight="bold">
                  Skills Overview
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                I specialize in a variety of technologies including Java, JavaScript, TypeScript, C, MongoDB, MSSQL, Node, Express, React, Vue, Redux, jQuery, NoSQL, Git, Spring, Spring Boot, Hibernate ORM, AngularJS, React-native, Kubernetes, Docker, MySQL, Python, GraphQL, Linux, Shell Scripting, PHP, .Net, Jenkins, Azure, AWS, Cloud Computing, CI/CD, JUnit, Jest, Cucumber, Unit Testing, Ansible, Lambda, Apache Kafka, Terraform, RabbitMQ. I have experience in Microservices, Distributed Systems, Frontend, Backend, and Full-Stack development.
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>AI & Modern Development Focus:</strong> As development practices evolve in 2025, I'm actively expanding my expertise in AI technologies including LLM Integration, Prompt Engineering, AI Orchestration, Vector Databases, RAG (Retrieval Augmented Generation), and AI frameworks like LangChain and Hugging Face. I'm passionate about building intelligent applications that leverage these cutting-edge technologies while maintaining a focus on scalability, security, and performance.
              </Typography>
            </Paper>
          </motion.div>
          
          {/* Experience */}
          <motion.div variants={fadeInUp}>
            <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <WorkIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                <Typography variant="h4" component="h2" fontWeight="bold">
                  Experience
                </Typography>
              </Box>
              
              <Timeline position="alternate">
                {experiences.map((exp, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent color="text.secondary">
                      {exp.period}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" variant="outlined">
                        <WorkIcon />
                      </TimelineDot>
                      {index < experiences.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          {exp.company}
                        </Typography>
                        {exp.location && (
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {exp.location}
                          </Typography>
                        )}
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                          {exp.responsibilities.map((resp, i) => (
                            <Box component="li" key={i} sx={{ mb: 1 }}>
                              <Typography variant="body2">
                                {resp}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Paper>
          </motion.div>
          
          {/* Education */}
          <motion.div variants={fadeInUp}>
            <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
              <Box display="flex" alignItems="center" mb={3}>
                <SchoolIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                <Typography variant="h4" component="h2" fontWeight="bold">
                  Education
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {education.map((edu, index) => (
                  <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <Paper elevation={2} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
                      <Typography variant="h6" component="h3" fontWeight="bold">
                        {edu.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {edu.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {edu.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {edu.period}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </motion.div>
          
          {/* Certifications */}
          <motion.div variants={fadeInUp}>
            <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <VerifiedUserIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                <Typography variant="h4" component="h2" fontWeight="bold">
                  Certifications
                </Typography>
              </Box>
              <Box display="flex" flexWrap="wrap" gap={1}>
                <Chip 
                  label="AWS Certified Solutions Architect (02/2020)" 
                  color="primary" 
                  variant="outlined"
                  icon={<VerifiedUserIcon />}
                />
              </Box>
            </Paper>
          </motion.div>
          
          {/* Mentorship */}
          <motion.div variants={fadeInUp}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <PersonIcon color="primary" sx={{ mr: 1, fontSize: 30 }} />
                <Typography variant="h4" component="h2" fontWeight="bold">
                  Mentorship
                </Typography>
              </Box>
              <Typography variant="body1">
                Computer Science Tutor: Programming, Data Structure and Algorithms, Coding Interview Prep, Professional Portfolio.
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
      
      <Footer />
    </Box>
  );
}
