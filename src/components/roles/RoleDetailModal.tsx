import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign,
  ChevronRight,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Role, getWhyItFits, skills } from '@/data/skillsData';
import { Button } from '@/components/ui/button';

interface RoleDetailModalProps {
  role: Role | null;
  selectedSkills: string[];
  onClose: () => void;
}

export function RoleDetailModal({ role, selectedSkills, onClose }: RoleDetailModalProps) {
  if (!role) return null;

  const whyItFits = getWhyItFits(role, selectedSkills);

  const handleApply = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {role && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full md:max-h-[90vh] bg-card rounded-3xl shadow-lg z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">{role.name}</h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  <span>{role.salaryRange}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  About This Role
                </h3>
                <p className="text-muted-foreground">{role.description}</p>
              </div>

              {/* Why it fits */}
              <div className="p-4 rounded-2xl bg-success/10 border border-success/20">
                <h3 className="font-semibold mb-1 text-success">Why This Fits You</h3>
                <p className="text-sm">{whyItFits}</p>
              </div>

              {/* Required Skills */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {role.requiredSkills.map((skillId) => {
                    const skill = skills.find(s => s.id === skillId);
                    const isMatched = selectedSkills.includes(skillId);
                    return (
                      <span
                        key={skillId}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isMatched
                            ? 'bg-success text-success-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        {skill?.name || skillId}
                        {isMatched && ' ✓'}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Growth Path */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Growth Path
                </h3>
                <p className="text-muted-foreground">{role.growthPath}</p>
              </div>

              {/* Common Mistakes */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  Common Mistakes to Avoid
                </h3>
                <ul className="space-y-1">
                  {role.commonMistakes.map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-warning">•</span>
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Links */}
              <div>
                <h3 className="font-semibold mb-4">Apply Now</h3>
                <div className="space-y-4">
                  {role.platforms.map((platform) => (
                    <div
                      key={platform.name}
                      className="p-4 rounded-2xl bg-secondary/50 border border-border"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="font-semibold">{platform.name}</span>
                          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                            platform.type === 'freelance'
                              ? 'bg-accent/20 text-accent'
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {platform.type === 'freelance' ? 'Freelance' : 'Job'}
                          </span>
                        </div>
                        <Button
                          variant="accent"
                          size="sm"
                          onClick={() => handleApply(platform.url)}
                          className="gap-2"
                        >
                          Apply
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Instructions */}
                      <details className="group">
                        <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                          <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                          Step-by-step instructions
                        </summary>
                        <ol className="mt-3 space-y-2 pl-6">
                          {platform.instructions.map((instruction, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-medium">
                                {i + 1}
                              </span>
                              {instruction}
                            </li>
                          ))}
                        </ol>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
