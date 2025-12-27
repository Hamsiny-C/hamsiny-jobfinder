import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card text-center py-12 px-8 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Ready to Start?
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Your Perfect Role is Just
              <br />
              <span className="gradient-text">One Click Away</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Stop wasting time on wrong applications. Let us guide you to the right opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-role">
                <Button variant="hero" size="lg" className="group">
                  Find My Role Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/chat">
                <Button variant="glass" size="lg">
                  Chat with SkillBot
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
