import { motion } from 'framer-motion';
import { experienceLevels, workPreferences } from '@/data/skillsData';
import { Check } from 'lucide-react';

interface ExperienceSelectorProps {
  experienceLevel: string;
  workPreference: string;
  onExperienceChange: (level: string) => void;
  onPreferenceChange: (preference: string) => void;
}

export function ExperienceSelector({
  experienceLevel,
  workPreference,
  onExperienceChange,
  onPreferenceChange,
}: ExperienceSelectorProps) {
  return (
    <div className="space-y-8">
      {/* Experience Level */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Experience Level</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {experienceLevels.map((level) => {
            const isSelected = experienceLevel === level.id;
            return (
              <motion.button
                key={level.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onExperienceChange(level.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border-2 ${
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-transparent bg-secondary/50 hover:bg-secondary'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold">{level.label}</span>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{level.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Work Preference */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Work Preference</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {workPreferences.map((preference) => {
            const isSelected = workPreference === preference.id;
            return (
              <motion.button
                key={preference.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onPreferenceChange(preference.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border-2 ${
                  isSelected
                    ? 'border-accent bg-accent/5 shadow-md'
                    : 'border-transparent bg-secondary/50 hover:bg-secondary'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-semibold">{preference.label}</span>
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{preference.description}</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
