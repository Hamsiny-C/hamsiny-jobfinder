import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Search, Frown } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { SkillInput } from '@/components/skills/SkillInput';
import { ExperienceSelector } from '@/components/skills/ExperienceSelector';
import { RoleCard } from '@/components/roles/RoleCard';
import { RoleDetailModal } from '@/components/roles/RoleDetailModal';
import { Button } from '@/components/ui/button';
import { getMatchingRoles, Role } from '@/data/skillsData';

type Step = 'skills' | 'experience' | 'results';

export default function FindRole() {
  const [currentStep, setCurrentStep] = useState<Step>('skills');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState('fresher');
  const [workPreference, setWorkPreference] = useState('both');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const matchedRoles = getMatchingRoles(selectedSkills, experienceLevel, workPreference);

  const canProceedFromSkills = selectedSkills.length > 0;
  const canProceedFromExperience = experienceLevel && workPreference;

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  const stepConfig = {
    skills: {
      title: 'What are your skills?',
      subtitle: 'Select or type your skills to find matching roles',
      icon: Search,
    },
    experience: {
      title: 'Tell us about yourself',
      subtitle: 'Help us filter the best opportunities for you',
      icon: Sparkles,
    },
    results: {
      title: matchedRoles.length > 0 ? 'Your Matching Roles' : 'No matches found',
      subtitle: matchedRoles.length > 0 
        ? `Found ${matchedRoles.length} roles that fit your profile`
        : 'Try adding more skills or adjusting your preferences',
      icon: matchedRoles.length > 0 ? Sparkles : Frown,
    },
  };

  const currentConfig = stepConfig[currentStep];
  const Icon = currentConfig.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {(['skills', 'experience', 'results'] as Step[]).map((step, index) => {
              const isActive = currentStep === step;
              const isPast = 
                (currentStep === 'experience' && step === 'skills') ||
                (currentStep === 'results' && (step === 'skills' || step === 'experience'));

              return (
                <div key={step} className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => isPast && goToStep(step)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : isPast
                        ? 'bg-success text-success-foreground cursor-pointer'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {index + 1}
                  </motion.button>
                  {index < 2 && (
                    <div className={`w-16 h-1 rounded-full ${
                      isPast || (isActive && step !== 'skills')
                        ? 'bg-primary'
                        : 'bg-secondary'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Header */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{currentConfig.title}</h1>
            <p className="text-muted-foreground">{currentConfig.subtitle}</p>
          </motion.div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {currentStep === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card"
              >
                <SkillInput
                  selectedSkills={selectedSkills}
                  onSkillsChange={setSelectedSkills}
                />

                <div className="flex justify-end mt-8">
                  <Button
                    variant="hero"
                    size="lg"
                    disabled={!canProceedFromSkills}
                    onClick={() => goToStep('experience')}
                    className="gap-2"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card"
              >
                <ExperienceSelector
                  experienceLevel={experienceLevel}
                  workPreference={workPreference}
                  onExperienceChange={setExperienceLevel}
                  onPreferenceChange={setWorkPreference}
                />

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => goToStep('skills')}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    disabled={!canProceedFromExperience}
                    onClick={() => goToStep('results')}
                    className="gap-2"
                  >
                    Find Roles
                    <Sparkles className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {matchedRoles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {matchedRoles.map((role, index) => (
                      <RoleCard
                        key={role.id}
                        role={role}
                        selectedSkills={selectedSkills}
                        onViewDetails={setSelectedRole}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="glass-card text-center py-12">
                    <Frown className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg mb-6">
                      We couldn't find matching roles for your current selection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="outline"
                        onClick={() => goToStep('skills')}
                      >
                        Add More Skills
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => goToStep('experience')}
                      >
                        Change Preferences
                      </Button>
                    </div>
                  </div>
                )}

                <div className="flex justify-start mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => goToStep('experience')}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <RoleDetailModal
        role={selectedRole}
        selectedSkills={selectedSkills}
        onClose={() => setSelectedRole(null)}
      />
    </div>
  );
}
