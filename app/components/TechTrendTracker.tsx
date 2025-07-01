"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Chip, LinearProgress } from '@mui/material';
import Grid from '@mui/system/Grid';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Star, Code, Cloud, Psychology } from '@mui/icons-material';

interface TechTrend {
  name: string;
  category: 'AI/ML' | 'Frontend' | 'Backend' | 'Cloud' | 'DevOps';
  popularity: number;
  growth: number;
  myProficiency: number;
  trending: 'up' | 'down' | 'stable';
  projects: number;
  description: string;
}

const techTrends: TechTrend[] = [
  {
    name: 'LangChain',
    category: 'AI/ML',
    popularity: 95,
    growth: 45,
    myProficiency: 90,
    trending: 'up',
    projects: 8,
    description: 'Building production RAG systems'
  },
  {
    name: 'Vector Databases',
    category: 'AI/ML',
    popularity: 88,
    growth: 38,
    myProficiency: 85,
    trending: 'up',
    projects: 6,
    description: 'Pinecone, Chroma implementations'
  },
  {
    name: 'Next.js 14',
    category: 'Frontend',
    popularity: 92,
    growth: 25,
    myProficiency: 95,
    trending: 'up',
    projects: 12,
    description: 'Server components & App Router'
  },
  {
    name: 'Kubernetes',
    category: 'Cloud',
    popularity: 89,
    growth: 15,
    myProficiency: 88,
    trending: 'stable',
    projects: 15,
    description: 'Container orchestration at scale'
  },
  {
    name: 'Spring Boot 3',
    category: 'Backend',
    popularity: 85,
    growth: 12,
    myProficiency: 92,
    trending: 'stable',
    projects: 20,
    description: 'Java microservices architecture'
  },
  {
    name: 'Terraform',
    category: 'DevOps',
    popularity: 87,
    growth: 18,
    myProficiency: 85,
    trending: 'up',
    projects: 10,
    description: 'Infrastructure as Code'
  },
  {
    name: 'React Server Components',
    category: 'Frontend',
    popularity: 78,
    growth: 42,
    myProficiency: 80,
    trending: 'up',
    projects: 5,
    description: 'Next-gen React architecture'
  },
  {
    name: 'OpenAI GPT-4',
    category: 'AI/ML',
    popularity: 96,
    growth: 35,
    myProficiency: 88,
    trending: 'up',
    projects: 12,
    description: 'Advanced LLM integrations'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI/ML': return <Psychology />;
    case 'Frontend': return <Code />;
    case 'Backend': return <Code />;
    case 'Cloud': return <Cloud />;
    case 'DevOps': return <Cloud />;
    default: return <Star />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI/ML': return '#ff6b35';
    case 'Frontend': return '#4ecdc4';
    case 'Backend': return '#45b7d1';
    case 'Cloud': return '#96ceb4';
    case 'DevOps': return '#fca652';
    default: return '#dda0dd';
  }
};

export default function TechTrendTracker() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [animatedTrends, setAnimatedTrends] = useState<TechTrend[]>([]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setAnimatedTrends(prev => 
        prev.map(trend => ({
          ...trend,
          popularity: Math.min(100, trend.popularity + Math.random() * 2 - 1),
          growth: Math.max(-10, Math.min(50, trend.growth + Math.random() * 4 - 2))
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimatedTrends(techTrends);
  }, []);

  const filteredTrends = selectedCategory === 'all' 
    ? animatedTrends 
    : animatedTrends.filter(trend => trend.category === selectedCategory);

  const categories = ['all', ...Array.from(new Set(techTrends.map(t => t.category)))];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
        📊 Real-Time Tech Mastery Dashboard
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4, opacity: 0.8 }}>
        Live tracking of cutting-edge technologies in my arsenal
      </Typography>

      {/* Category Filter */}
      <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category === 'all' ? 'All Technologies' : category}
            onClick={() => setSelectedCategory(category)}
            color={selectedCategory === category ? 'primary' : 'default'}
            variant={selectedCategory === category ? 'filled' : 'outlined'}
            sx={{
              textTransform: 'capitalize',
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              },
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>

      {/* Tech Grid */}
      <Grid container spacing={3}>
        <AnimatePresence>
          {filteredTrends.map((trend, index) => (
            <Grid key={trend.name} size={{ xs: 12, md: 6, lg: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'hidden',
                    border: `2px solid ${getCategoryColor(trend.category)}`,
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  {/* Category Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      background: getCategoryColor(trend.category),
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderBottomLeftRadius: 8,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {trend.category}
                  </Box>

                  {/* Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: getCategoryColor(trend.category), mr: 1 }}>
                      {getCategoryIcon(trend.category)}
                    </Box>
                    <Typography variant="h6" fontWeight="bold">
                      {trend.name}
                    </Typography>
                    <Box sx={{ ml: 'auto' }}>
                      {trend.trending === 'up' && <TrendingUp color="success" />}
                      {trend.trending === 'down' && <TrendingDown color="error" />}
                      {trend.trending === 'stable' && <Star color="warning" />}
                    </Box>
                  </Box>

                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                    {trend.description}
                  </Typography>

                  {/* Metrics */}
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Industry Popularity</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {Math.round(trend.popularity)}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={trend.popularity}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: getCategoryColor(trend.category),
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">My Proficiency</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {trend.myProficiency}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={trend.myProficiency}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: 'primary.main',
                        },
                      }}
                    />
                  </Box>

                  {/* Stats */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" fontWeight="bold" color="primary">
                        {trend.projects}
                      </Typography>
                      <Typography variant="caption">Projects</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography 
                        variant="h6" 
                        fontWeight="bold" 
                        color={trend.growth > 0 ? 'success.main' : 'error.main'}
                      >
                        {trend.growth > 0 ? '+' : ''}{Math.round(trend.growth)}%
                      </Typography>
                      <Typography variant="caption">Growth</Typography>
                    </Box>
                  </Box>

                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(45deg, ${getCategoryColor(trend.category)}15, transparent)`,
                      pointerEvents: 'none',
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Paper
          elevation={3}
          sx={{
            mt: 4,
            p: 3,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h6" gutterBottom fontWeight="bold">
            🎯 Technology Mastery Summary
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                {techTrends.length}
              </Typography>
              <Typography variant="body2">Technologies Mastered</Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                {Math.round(techTrends.reduce((acc, t) => acc + t.myProficiency, 0) / techTrends.length)}%
              </Typography>
              <Typography variant="body2">Average Proficiency</Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                {techTrends.reduce((acc, t) => acc + t.projects, 0)}
              </Typography>
              <Typography variant="body2">Total Projects</Typography>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h4" fontWeight="bold">
                {techTrends.filter(t => t.trending === 'up').length}
              </Typography>
              <Typography variant="body2">Trending Up</Typography>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
}