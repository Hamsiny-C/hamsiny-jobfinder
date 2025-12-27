import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { roles, skills, getMatchingRoles } from '@/data/skillsData';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  suggestions?: string[];
}

const quickSuggestions = [
  'Which role suits me?',
  'Where should I apply?',
  'What should I learn next?',
  'Show me freelance options',
  'I have Java skills',
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: "Hi! I'm SkillBot 🤖 — your personal career guide. Tell me about your skills, and I'll help you find the perfect role with direct apply links. What skills do you have?",
      suggestions: ['I know Java', 'I have Excel skills', 'I can do graphic design', 'I have no skills yet'],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): { content: string; suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for skill mentions
    const mentionedSkills = skills.filter(skill =>
      lowerMessage.includes(skill.name.toLowerCase()) ||
      lowerMessage.includes(skill.id.toLowerCase())
    );

    if (mentionedSkills.length > 0) {
      const skillIds = mentionedSkills.map(s => s.id);
      const matchedRoles = getMatchingRoles(skillIds, 'fresher', 'both');

      if (matchedRoles.length > 0) {
        const roleList = matchedRoles
          .slice(0, 3)
          .map(r => `• **${r.name}** (${r.salaryRange})`)
          .join('\n');

        return {
          content: `Great! With your ${mentionedSkills.map(s => s.name).join(', ')} skills, here are some roles that would suit you:\n\n${roleList}\n\nWould you like me to show you direct apply links for any of these roles?`,
          suggestions: matchedRoles.slice(0, 3).map(r => `Tell me about ${r.name}`),
        };
      }
    }

    // Check for role mentions
    const mentionedRole = roles.find(role =>
      lowerMessage.includes(role.name.toLowerCase())
    );

    if (mentionedRole) {
      const platformList = mentionedRole.platforms
        .map(p => `• **${p.name}**: [Apply Here](${p.url})`)
        .join('\n');

      return {
        content: `**${mentionedRole.name}**\n\n${mentionedRole.description}\n\n💰 Salary: ${mentionedRole.salaryRange}\n📈 Growth: ${mentionedRole.growthPath}\n\n**Where to Apply:**\n${platformList}\n\nWould you like step-by-step instructions for any platform?`,
        suggestions: mentionedRole.platforms.map(p => `How to apply on ${p.name}?`),
      };
    }

    // Check for platform instructions
    if (lowerMessage.includes('how to apply') || lowerMessage.includes('instructions')) {
      const platforms = ['linkedin', 'indeed', 'fiverr', 'internshala'];
      const mentionedPlatform = platforms.find(p => lowerMessage.includes(p));

      if (mentionedPlatform) {
        const platformInstructions: Record<string, string> = {
          linkedin: "**Applying on LinkedIn:**\n1. Click the job link\n2. Sign in or create account\n3. Complete your profile\n4. Click 'Easy Apply'\n5. Upload resume\n6. Submit!\n\nPro tip: Add a headline mentioning your key skill!",
          indeed: "**Applying on Indeed:**\n1. Open the job listing\n2. Create an Indeed account\n3. Build your Indeed Resume\n4. Click 'Apply Now'\n5. Follow the application steps\n6. Watch your email for responses!",
          fiverr: "**Getting Started on Fiverr:**\n1. Create a seller account\n2. Build your gig with good description\n3. Add portfolio samples\n4. Set competitive pricing\n5. Respond quickly to inquiries\n6. Deliver quality work to build ratings!",
          internshala: "**Using Internshala:**\n1. Register as a student/fresher\n2. Complete your profile fully\n3. Browse relevant internships\n4. Write compelling cover letters\n5. Apply to multiple opportunities\n6. Check regularly for new listings!",
        };

        return {
          content: platformInstructions[mentionedPlatform],
          suggestions: ['Show me more roles', 'What skills should I learn?', 'Other platforms?'],
        };
      }
    }

    // Learning suggestions
    if (lowerMessage.includes('learn') || lowerMessage.includes('what should i study')) {
      return {
        content: "Here are the most in-demand skills right now:\n\n**For IT roles:**\n• Python, JavaScript, React\n• Data Analysis, SQL\n• Cloud basics (AWS/Azure)\n\n**For Non-IT:**\n• Excel proficiency\n• Communication skills\n• Digital marketing basics\n\n**For Freelance:**\n• Any creative skill (design, writing)\n• Tech skills in demand\n• Client communication\n\nWhat area interests you most?",
        suggestions: ['IT/Software', 'Creative/Design', 'Business/Marketing', 'Skilled trades'],
      };
    }

    // Fresher/beginner
    if (lowerMessage.includes('fresher') || lowerMessage.includes('beginner') || lowerMessage.includes('no experience') || lowerMessage.includes('no skills')) {
      return {
        content: "Don't worry! Everyone starts somewhere. Here are roles perfect for beginners:\n\n• **Customer Support** - Just need good communication\n• **Data Entry** - Basic computer skills\n• **Sales Executive** - Energy and enthusiasm\n• **Delivery Executive** - Valid driving license\n\nWould you like to explore any of these?",
        suggestions: ['Tell me about Customer Support', 'Tell me about Data Entry', 'What skills are easy to learn?'],
      };
    }

    // Freelance focus
    if (lowerMessage.includes('freelance') || lowerMessage.includes('work from home') || lowerMessage.includes('remote')) {
      return {
        content: "Freelancing is a great choice! Top freelance opportunities:\n\n• **Content Writing** - Start on Fiverr, Medium\n• **Graphic Design** - Fiverr, 99designs\n• **Web Development** - Upwork, Fiverr\n• **Data Entry** - Fiverr, Freelancer\n• **Virtual Assistant** - Belay, Upwork\n\nWhat skill area would you like to explore?",
        suggestions: ['Content Writing', 'Graphic Design', 'Web Development', 'I want a regular job instead'],
      };
    }

    // Default response
    return {
      content: "I'd love to help you find the right role! Could you tell me:\n\n1. What skills do you have? (e.g., Java, Excel, driving)\n2. Are you a fresher or experienced?\n3. Do you prefer a job or freelancing?\n\nOr just tell me what you're good at, and I'll suggest matching roles!",
      suggestions: quickSuggestions.slice(0, 4),
    };
  };

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: response.content,
        suggestions: response.suggestions,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        role: 'bot',
        content: "Hi! I'm SkillBot 🤖 — your personal career guide. Tell me about your skills, and I'll help you find the perfect role with direct apply links. What skills do you have?",
        suggestions: ['I know Java', 'I have Excel skills', 'I can do graphic design', 'I have no skills yet'],
      },
    ]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-3xl mx-auto">
      {/* Chat Header */}
      <div className="glass-panel px-6 py-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg">SkillBot</h2>
            <p className="text-sm text-muted-foreground">Your AI Career Guide</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={resetChat}>
          <RefreshCw className="w-5 h-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 px-2 py-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user'
                    ? 'bg-primary'
                    : 'bg-gradient-to-br from-primary to-accent'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <div className={`chat-bubble ${
                    message.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'
                  }`}>
                    <div className="whitespace-pre-wrap text-sm">
                      {message.content.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                      )}
                    </div>
                  </div>

                  {/* Suggestions */}
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.suggestions.map((suggestion, i) => (
                        <motion.button
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="chat-bubble chat-bubble-bot flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="glass-panel p-4 flex gap-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, roles, or where to apply..."
          className="flex-1"
          disabled={isTyping}
        />
        <Button type="submit" variant="hero" size="icon" disabled={isTyping || !input.trim()}>
          <Send className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
}
