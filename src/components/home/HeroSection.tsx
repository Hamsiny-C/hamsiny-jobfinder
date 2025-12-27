import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Lightbulb, Link2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const floatingCards = [
  { icon: Lightbulb, label: 'Your Skills', color: 'from-primary to-primary/60', delay: 0 },
  { icon: Briefcase, label: 'Right Role', color: 'from-accent to-warning', delay: 0.2 },
  { icon: Link2, label: 'Direct Link', color: 'from-success to-success/60', delay: 0.4 },
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Your Career Journey Starts Here
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-balance">
            From <span className="gradient-text">Skills</span> to{' '}
            <span className="gradient-text-accent">Roles</span>
            <br />
            with Direct Apply Links
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Discover jobs that match your skills. Get personalized recommendations
            for IT, Non-IT, Skilled, and Freelance opportunities — all with
            step-by-step application guidance.
          </p>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {floatingCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: card.delay + 0.3 }}
                className="floating-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="glass-card flex items-center gap-3 px-6 py-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-semibold">{card.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/find-role">
            <Button variant="hero" size="xl" className="group">
              Find My Role
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/chat">
            <Button variant="outline" size="xl">
              Talk to SkillBot
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '20+', label: 'Skills Covered' },
            { value: '15+', label: 'Job Roles' },
            { value: '50+', label: 'Apply Links' },
            { value: '24/7', label: 'AI Guidance' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
