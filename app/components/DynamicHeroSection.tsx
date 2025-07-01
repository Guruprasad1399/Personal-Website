"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Paper, Chip } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const expertiseAreas = [
  "AI-Powered Full-Stack Applications",
  "Machine Learning Model Deployments", 
  "Cloud-Native Microservices",
  "Real-Time Data Processing Systems",
  "Advanced React Performance Optimization",
  "Kubernetes Orchestration at Scale",
  "Vector Database Implementations",
  "LLM Integration & RAG Architectures"
];

const liveMetrics = [
  { label: "Lines of Code", value: "500K+", color: "#00ff41" },
  { label: "Systems Deployed", value: "50+", color: "#ff6b35" },
  { label: "APIs Built", value: "200+", color: "#4ecdc4" },
  { label: "AI Models Integrated", value: "25+", color: "#ffe66d" }
];

export default function DynamicHeroSection() {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [codeAnimation, setCodeAnimation] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % liveMetrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const codeSnippets = [
      '> npm create next-app --typescript',
      '> docker build -t ai-app .',
      '> kubectl apply -f deployment.yaml',
      '> terraform plan -out=tfplan',
      '> python train_model.py --gpu',
    ];
    
    let index = 0;
    const codeInterval = setInterval(() => {
      setCodeAnimation(codeSnippets[index]);
      index = (index + 1) % codeSnippets.length;
    }, 3000);
    
    return () => clearInterval(codeInterval);
  }, []);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(33,150,243,0.1) 0%, rgba(156,39,176,0.1) 50%, rgba(233,30,99,0.1) 100%)',
          animation: 'gradient 15s ease infinite',
          '@keyframes gradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      />
      
      {/* Floating Code Terminal */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1,
        }}
      >
        <Paper
          sx={{
            p: 2,
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: '#00ff41',
            fontFamily: 'monospace',
            borderRadius: 2,
            minWidth: '300px',
            border: '1px solid #00ff41',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            guruprasad@nomura:~$
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {codeAnimation}
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </Typography>
        </Paper>
      </motion.div>

      {/* Live Metrics Dashboard */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1,
        }}
      >
        <Paper
          sx={{
            p: 2,
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: 2,
            minWidth: '200px',
            border: '2px solid',
            borderColor: liveMetrics[currentMetric].color,
            transition: 'border-color 0.5s ease',
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            🔥 Live Stats
          </Typography>
          {liveMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              animate={{
                scale: index === currentMetric ? 1.1 : 1,
                color: index === currentMetric ? metric.color : '#666',
              }}
              transition={{ duration: 0.3 }}
            >
              <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <span>{metric.label}:</span>
                <strong>{metric.value}</strong>
              </Typography>
            </motion.div>
          ))}
        </Paper>
      </motion.div>

      {/* Main Hero Content */}
      <Box sx={{ position: 'relative', zIndex: 2, py: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar
            src="/GuruprasadVenkatraman.jpg"
            alt="Guruprasad Venkatraman"
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto',
              mb: 3,
              border: '4px solid #1976d2',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease',
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Guruprasad Venkatraman
          </Typography>
          
          <Box sx={{ height: '60px', mb: 3 }}>
            <Typography variant="h5" color="primary" fontWeight="500">
              <Typewriter
                options={{
                  strings: expertiseAreas,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
              />
            </Typography>
          </Box>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 4 }}>
              {['AI Specialist', 'Cloud Architect', 'Performance Expert', '5+ Years'].map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <Chip
                    label={tag}
                    sx={{
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </motion.div>

        {/* Animated Code Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            fontFamily: 'monospace',
            fontSize: '12px',
            lineHeight: 1.2,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <pre style={{ color: '#1976d2', opacity: 0.3 }}>
{`
const developer = {
  name: "Guruprasad Venkatraman",
  currentRole: "Software Analyst @ Nomura",
  expertise: ["AI/ML", "Cloud", "Full-Stack"],
  impact: "Building the future of intelligent applications",
  passion: "Solving complex problems with elegant code"
};

// Latest Achievement
const aiPlatform = await deployModel({
  architecture: "RAG + Vector DB",
  scale: "Enterprise",
  performance: "99.9% uptime"
});
`}
          </pre>
        </motion.div>
      </Box>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </Box>
  );
}