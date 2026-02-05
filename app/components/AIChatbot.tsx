"use client";
import React, { useState, useRef, useEffect } from "react";
import {
	Box,
	Paper,
	Typography,
	TextField,
	IconButton,
	Fab,
	Collapse,
	Avatar,
	Chip,
	CircularProgress,
} from "@mui/material";
import {
	Chat as ChatIcon,
	Send as SendIcon,
	Close as CloseIcon,
	SmartToy as AIIcon,
} from "@mui/icons-material";

interface Message {
	id: string;
	text: string;
	isUser: boolean;
	timestamp: Date;
}

// This will be replaced with real LLM integration

const generateAIResponse = async (userMessage: string): Promise<string> => {
	try {
		const response = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: userMessage }),
		});

		if (!response.ok) {
			throw new Error('Failed to get AI response');
		}

		const data = await response.json();
		return data.response;
	} catch (error) {
		console.error('Error getting AI response:', error);
		return "I'm sorry, I'm having trouble connecting to my AI brain right now. Please try again in a moment, or feel free to contact Guruprasad directly at vgp1399@gmail.com.";
	}
};

export default function AIChatbot() {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			id: "1",
			text: "Hi! I'm Guruprasad's AI assistant. Ask me about his experience, skills, or projects!",
			isUser: false,
			timestamp: new Date(),
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSendMessage = async () => {
		if (!inputValue.trim()) return;

		const userMessage: Message = {
			id: Date.now().toString(),
			text: inputValue,
			isUser: true,
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		const messageText = inputValue;
		setInputValue("");
		setIsTyping(true);

		// Get real AI response
		try {
			const aiResponseText = await generateAIResponse(messageText);
			const aiResponse: Message = {
				id: (Date.now() + 1).toString(),
				text: aiResponseText,
				isUser: false,
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, aiResponse]);
		} catch (error) {
			console.error('Error in handleSendMessage:', error);
			const errorResponse: Message = {
				id: (Date.now() + 1).toString(),
				text: "I'm sorry, I'm having trouble right now. Please try again.",
				isUser: false,
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, errorResponse]);
		} finally {
			setIsTyping(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const quickQuestions = [
		"What's your experience?",
		"Tell me about your AI projects",
		"What technologies do you use?",
		"How can I contact you?",
	];

	return (
		<>
			{/* Chat Fab Button */}
			<Fab
				color="primary"
				sx={{
					position: "fixed",
					bottom: 24,
					right: 24,
					zIndex: 1000,
				}}
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <CloseIcon /> : <ChatIcon />}
			</Fab>

			{/* Chat Window */}
			<Collapse in={isOpen}>
				<Paper
					elevation={8}
					sx={{
						position: "fixed",
						bottom: 100,
						right: 24,
						width: { xs: "calc(100vw - 48px)", sm: 400 },
						height: 500,
						zIndex: 999,
						borderRadius: 3,
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
					}}
				>
					{/* Header */}
					<Box
						sx={{
							background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
							color: "white",
							p: 2,
							display: "flex",
							alignItems: "center",
							gap: 2,
						}}
					>
						<Avatar sx={{ bgcolor: "rgba(255,255,255,0.2)" }}>
							<AIIcon />
						</Avatar>
						<Box sx={{ flex: 1 }}>
							<Typography variant="h6" fontWeight={600}>
								AI Assistant
							</Typography>
							<Typography variant="body2" sx={{ opacity: 0.9 }}>
								Ask about Guruprasad's work
							</Typography>
						</Box>
					</Box>

					{/* Messages */}
					<Box
						sx={{
							flex: 1,
							overflow: "auto",
							p: 2,
							backgroundColor: "grey.50",
						}}
					>
						{messages.map((message) => (
							<Box
								key={message.id}
								sx={{
									display: "flex",
									justifyContent: message.isUser ? "flex-end" : "flex-start",
									mb: 2,
								}}
							>
								<Paper
									elevation={1}
									sx={{
										p: 2,
										maxWidth: "80%",
										backgroundColor: message.isUser ? "primary.main" : "white",
										color: message.isUser ? "white" : "text.primary",
										borderRadius: 2,
									}}
								>
									<Typography variant="body2" sx={{ lineHeight: 1.5 }}>
										{message.text}
									</Typography>
								</Paper>
							</Box>
						))}

						{isTyping && (
							<Box
								sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
							>
								<Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
									<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
										<CircularProgress size={16} />
										<Typography variant="body2" color="text.secondary">
											AI is thinking...
										</Typography>
									</Box>
								</Paper>
							</Box>
						)}

						{/* Quick Questions */}
						{messages.length === 1 && (
							<Box sx={{ mt: 2 }}>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{ mb: 1 }}
								>
									Quick questions:
								</Typography>
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
									{quickQuestions.map((question) => (
										<Chip
											key={question}
											label={question}
											size="small"
											variant="outlined"
											onClick={() => setInputValue(question)}
											sx={{
												cursor: "pointer",
												"&:hover": {
													backgroundColor: "primary.50",
												},
											}}
										/>
									))}
								</Box>
							</Box>
						)}

						<div ref={messagesEndRef} />
					</Box>

					{/* Input */}
					<Box
						sx={{
							p: 2,
							backgroundColor: "white",
							borderTop: "1px solid",
							borderColor: "grey.200",
						}}
					>
						<Box sx={{ display: "flex", gap: 1 }}>
							<TextField
								fullWidth
								size="small"
								placeholder="Ask about experience, skills, projects..."
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyPress={handleKeyPress}
								disabled={isTyping}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: 2,
									},
								}}
							/>
							<IconButton
								color="primary"
								onClick={handleSendMessage}
								disabled={!inputValue.trim() || isTyping}
								sx={{
									backgroundColor: "primary.main",
									color: "white",
									"&:hover": {
										backgroundColor: "primary.dark",
									},
									"&:disabled": {
										backgroundColor: "grey.300",
									},
								}}
							>
								<SendIcon />
							</IconButton>
						</Box>
					</Box>
				</Paper>
			</Collapse>
		</>
	);
}
