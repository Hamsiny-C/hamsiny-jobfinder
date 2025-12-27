import { motion } from 'framer-motion';
import { 
  Target, 
  Link2, 
  BookOpen, 
  Shield, 
  MessageCircle, 
  TrendingUp 
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Smart Role Matching',
    description: 'Our AI analyzes your skills and experience to suggest only realistic, achievable job roles.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Link2,
    title: 'Direct Apply Links',
    description: 'One click to job listings on LinkedIn, Indeed, Fiverr, and more. No middleman, no confusion.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: BookOpen,
    title: 'Step-by-Step Guide',
    description: 'Detailed instructions for each platform showing exactly how to apply successfully.',
    color: 'bg-success/10 text-success',
  },
  {
    icon: Shield,
    title: 'Reality Filter',
    description: 'No senior positions for freshers, no scam jobs. Only genuine opportunities that fit your level.',
    color: 'bg-warning/10 text-warning',
  },
  {
    icon: MessageCircle,
    title: 'SkillBot Assistant',
    description: 'Chat with our AI to get personalized advice on roles, skills to learn, and career paths.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: TrendingUp,
    title: 'Dual Career Paths',
    description: 'Get both job and freelance opportunities for every skill. Explore all your options.',
    color: 'bg-accent/10 text-accent',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How We <span className="gradient-text">Help You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From identifying your skills to landing your dream job — we've got every step covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
