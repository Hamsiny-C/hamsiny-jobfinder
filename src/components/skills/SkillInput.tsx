import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Plus, Check } from 'lucide-react';
import { skills, Skill } from '@/data/skillsData';
import { Input } from '@/components/ui/input';

interface SkillInputProps {
  selectedSkills: string[];
  onSkillsChange: (skills: string[]) => void;
}

export function SkillInput({ selectedSkills, onSkillsChange }: SkillInputProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [customSkill, setCustomSkill] = useState('');

  const categories = [
    { id: 'technical', label: 'Technical' },
    { id: 'creative', label: 'Creative' },
    { id: 'business', label: 'Business' },
    { id: 'service', label: 'Service' },
    { id: 'skilled', label: 'Skilled Trades' },
  ];

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      onSkillsChange(selectedSkills.filter(id => id !== skillId));
    } else {
      onSkillsChange([...selectedSkills, skillId]);
    }
  };

  const addCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.toLowerCase())) {
      onSkillsChange([...selectedSkills, customSkill.toLowerCase()]);
      setCustomSkill('');
    }
  };

  const removeSkill = (skillId: string) => {
    onSkillsChange(selectedSkills.filter(id => id !== skillId));
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 h-12 text-base"
        />
      </div>

      {/* Selected Skills */}
      <AnimatePresence>
        {selectedSkills.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2"
          >
            {selectedSkills.map((skillId) => {
              const skill = skills.find(s => s.id === skillId);
              const displayName = skill?.name || skillId;
              
              return (
                <motion.div
                  key={skillId}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                >
                  <Check className="w-4 h-4" />
                  {displayName}
                  <button
                    onClick={() => removeSkill(skillId)}
                    className="hover:bg-primary-foreground/20 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Skill Input */}
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Add custom skill..."
          value={customSkill}
          onChange={(e) => setCustomSkill(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addCustomSkill()}
          className="flex-1"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addCustomSkill}
          className="px-4 py-2 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </motion.button>
      </div>

      {/* Skill Categories */}
      <div className="space-y-6">
        {categories.map((category) => {
          const categorySkills = filteredSkills.filter(
            skill => skill.category === category.id
          );

          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill.id);
                  return (
                    <motion.button
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleSkill(skill.id)}
                      className={`skill-tag ${isSelected ? 'skill-tag-selected' : ''}`}
                    >
                      {isSelected && <Check className="w-4 h-4 inline mr-1" />}
                      {skill.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
