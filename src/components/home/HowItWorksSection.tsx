import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Enter Your Skills',
    description: 'Select or type your skills. Choose your experience level and work preference.',
  },
  {
    number: '02',
    title: 'Get Role Matches',
    description: 'Our AI recommends 3-5 realistic roles based on your profile. No unrealistic senior positions.',
  },
  {
    number: '03',
    title: 'Explore Each Role',
    description: 'See job descriptions, salary ranges, growth paths, and why each role fits you.',
  },
  {
    number: '04',
    title: 'Click & Apply',
    description: 'Access direct links to LinkedIn, Indeed, Fiverr, and more with step-by-step instructions.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple <span className="gradient-text-accent">4-Step</span> Process
          </h2>
          <p className="text-muted-foreground text-lg">
            From skills to applications in minutes, not hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="glass-card flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {step.title}
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
