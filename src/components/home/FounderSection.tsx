import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import founderImage from '@/assets/founder-hamsiny.jpeg';

export function FounderSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm font-medium mb-4">
            <Heart className="w-4 h-4 text-accent" />
            Meet the Creator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Built with <span className="text-gradient">Purpose</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo Container */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Animated ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-success rounded-full opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Photo */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img
                  src={founderImage}
                  alt="HAMSINY C - Founder"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Sparkle decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-8 h-8 text-warning" />
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-2"
              >
                HAMSINY C
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-primary font-medium mb-4"
              >
                Founder & Creator
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed italic"
              >
                "Guiding people to their right career path with{' '}
                <span className="text-foreground font-semibold">clarity</span> and{' '}
                <span className="text-foreground font-semibold">confidence</span>."
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-6 flex flex-wrap justify-center md:justify-start gap-3"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Career Guide
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Tech Enthusiast
                </span>
                <span className="px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium">
                  Problem Solver
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
