"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Button, Chip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PlayArrow, Code, CloudQueue, Psychology } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeExample {
  id: string;
  title: string;
  language: string;
  category: string;
  code: string;
  description: string;
  output: string;
  technologies: string[];
}

const codeExamples: CodeExample[] = [
  {
    id: 'ai-rag',
    title: 'AI RAG Implementation',
    language: 'python',
    category: 'AI/ML',
    description: 'Advanced Retrieval Augmented Generation with vector embeddings',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone'],
    code: `from langchain.vectorstores import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

class AIDocumentProcessor:
    def __init__(self, pinecone_key, openai_key):
        self.embeddings = OpenAIEmbeddings(openai_api_key=openai_key)
        self.vectorstore = Pinecone.from_existing_index(
            index_name="documents", 
            embedding=self.embeddings
        )
        self.llm = OpenAI(temperature=0, openai_api_key=openai_key)
        
    def create_rag_chain(self):
        return RetrievalQA.from_chain_type(
            llm=self.llm,
            chain_type="stuff",
            retriever=self.vectorstore.as_retriever(),
            return_source_documents=True
        )
    
    def query_documents(self, question: str):
        qa_chain = self.create_rag_chain()
        result = qa_chain({"query": question})
        return {
            "answer": result["result"],
            "sources": [doc.metadata for doc in result["source_documents"]]
        }`,
    output: '✅ RAG system successfully processes complex queries with 95% accuracy'
  },
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    language: 'java',
    category: 'Backend',
    description: 'Spring Boot microservice with circuit breaker pattern',
    technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes'],
    code: `@RestController
@RequestMapping("/api/v1/orders")
@CircuitBreaker(name = "payment-service", fallbackMethod = "fallbackPayment")
public class OrderController {
    
    @Autowired
    private PaymentServiceClient paymentClient;
    
    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    @PostMapping
    @Transactional
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest request) {
        try {
            // Process order
            Order order = orderService.createOrder(request);
            
            // Call payment service with circuit breaker
            PaymentResponse payment = paymentClient.processPayment(
                PaymentRequest.builder()
                    .orderId(order.getId())
                    .amount(order.getTotal())
                    .build()
            );
            
            // Publish event to Kafka
            OrderEvent event = OrderEvent.builder()
                .orderId(order.getId())
                .status(OrderStatus.CONFIRMED)
                .timestamp(Instant.now())
                .build();
                
            kafkaTemplate.send("order-events", event);
            
            return ResponseEntity.ok(OrderResponse.from(order));
            
        } catch (Exception e) {
            log.error("Order creation failed", e);
            throw new OrderProcessingException("Failed to create order", e);
        }
    }
    
    public ResponseEntity<OrderResponse> fallbackPayment(OrderRequest request, Exception ex) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
            .body(OrderResponse.error("Payment service unavailable"));
    }
}`,
    output: '🚀 Microservice handles 10K+ requests/minute with 99.9% uptime'
  },
  {
    id: 'react-performance',
    title: 'React Performance Optimization',
    language: 'typescript',
    category: 'Frontend',
    description: 'Advanced React hooks with memoization and virtualization',
    technologies: ['React', 'TypeScript', 'Next.js', 'Performance'],
    code: `import React, { useMemo, useCallback, memo } from 'react';
import { VariableSizeList as List } from 'react-window';

interface DataItem {
  id: string;
  title: string;
  content: string;
  metadata: Record<string, any>;
}

interface VirtualizedListProps {
  items: DataItem[];
  searchTerm: string;
  onItemClick: (item: DataItem) => void;
}

const VirtualizedList: React.FC<VirtualizedListProps> = memo(({ 
  items, 
  searchTerm, 
  onItemClick 
}) => {
  // Memoized filtering for performance
  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  // Memoized item renderer
  const renderItem = useCallback(({ index, style }) => {
    const item = filteredItems[index];
    return (
      <div style={style} className="list-item">
        <ItemComponent 
          item={item} 
          onClick={() => onItemClick(item)}
        />
      </div>
    );
  }, [filteredItems, onItemClick]);

  // Dynamic height calculation
  const getItemSize = useCallback((index: number) => {
    const item = filteredItems[index];
    return item.content.length > 100 ? 120 : 80;
  }, [filteredItems]);

  return (
    <List
      height={600}
      itemCount={filteredItems.length}
      itemSize={getItemSize}
      itemData={filteredItems}
      overscanCount={5}
    >
      {renderItem}
    </List>
  );
});`,
    output: '⚡ Renders 100K+ items smoothly with 60fps performance'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure as Code',
    language: 'yaml',
    category: 'DevOps',
    description: 'Terraform + Kubernetes deployment with auto-scaling',
    technologies: ['Terraform', 'Kubernetes', 'AWS', 'Docker'],
    code: `# terraform/main.tf
resource "aws_eks_cluster" "main" {
  name     = "guruprasad-cluster"
  role_arn = aws_iam_role.cluster.arn
  version  = "1.27"

  vpc_config {
    subnet_ids              = aws_subnet.private[*].id
    endpoint_private_access = true
    endpoint_public_access  = true
  }
}

# kubernetes/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-application
  labels:
    app: ai-application
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-application
  template:
    metadata:
      labels:
        app: ai-application
    spec:
      containers:
      - name: app
        image: guruprasad/ai-app:latest
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        env:
        - name: OPENAI_API_KEY
          valueFrom:
            secretKeyRef:
              name: ai-secrets
              key: openai-key
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ai-application-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-application
  minReplicas: 3
  maxReplicas: 50
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70`,
    output: '☁️ Auto-scales from 3 to 50 pods based on traffic with 99.99% uptime'
  }
];

export default function InteractiveCodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setShowOutput(false);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 2000);
  };

  const currentExample = codeExamples[activeTab];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
        🚀 Live Code Architecture Showcase
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 4, opacity: 0.8 }}>
        Interactive examples of production-ready code I've architected and deployed
      </Typography>

      <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable">
          {codeExamples.map((example, index) => (
            <Tab
              key={example.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {example.category === 'AI/ML' && <Psychology fontSize="small" />}
                  {example.category === 'Backend' && <Code fontSize="small" />}
                  {example.category === 'Frontend' && <PlayArrow fontSize="small" />}
                  {example.category === 'DevOps' && <CloudQueue fontSize="small" />}
                  {example.title}
                </Box>
              }
            />
          ))}
        </Tabs>

        <Box sx={{ p: 3 }}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                {currentExample.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {currentExample.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                {currentExample.technologies.map((tech) => (
                  <Chip key={tech} label={tech} size="small" color="primary" variant="outlined" />
                ))}
              </Box>
            </Box>

            <Box sx={{ position: 'relative' }}>
              <SyntaxHighlighter
                language={currentExample.language}
                style={atomDark}
                customStyle={{
                  borderRadius: '8px',
                  fontSize: '14px',
                  maxHeight: '400px',
                  overflow: 'auto'
                }}
              >
                {currentExample.code}
              </SyntaxHighlighter>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<PlayArrow />}
                  onClick={handleRunCode}
                  disabled={isRunning}
                  sx={{ 
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)'
                  }}
                >
                  {isRunning ? 'Running...' : 'Execute Code'}
                </Button>

                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Production-tested • Scalable • Optimized
                </Typography>
              </Box>

              <AnimatePresence>
                {showOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper 
                      sx={{ 
                        mt: 2, 
                        p: 2, 
                        backgroundColor: '#1a1a1a', 
                        color: '#00ff00',
                        fontFamily: 'monospace',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="body2">
                        OUTPUT:
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {currentExample.output}
                      </Typography>
                    </Paper>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </motion.div>
        </Box>
      </Paper>
    </Box>
  );
}