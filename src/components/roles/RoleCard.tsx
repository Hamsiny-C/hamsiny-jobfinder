import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Role, getWhyItFits } from '@/data/skillsData';
import { Button } from '@/components/ui/button';

interface RoleCardProps {
  role: Role;
  selectedSkills: string[];
  onViewDetails: (role: Role) => void;
  index: number;
}

const categoryColors = {
  it: 'from-primary to-primary/60',
  'non-it': 'from-success to-success/60',
  skilled: 'from-warning to-warning/60',
  freelance: 'from-accent to-accent/60',
  service: 'from-primary to-accent',
};

const categoryLabels = {
  it: 'IT & Software',
  'non-it': 'Non-IT',
  skilled: 'Skilled Trade',
  freelance: 'Freelance',
  service: 'Service',
};

export function RoleCard({ role, selectedSkills, onViewDetails, index }: RoleCardProps) {
  const whyItFits = getWhyItFits(role, selectedSkills);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="role-card"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[role.category]} text-primary-foreground`}>
          {categoryLabels[role.category]}
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <DollarSign className="w-4 h-4" />
          {role.salaryRange}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">{role.name}</h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {role.description}
      </p>

      {/* Why it fits */}
      <div className="flex items-start gap-2 p-3 rounded-xl bg-success/10 text-success mb-4">
        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <span className="text-sm font-medium">{whyItFits}</span>
      </div>

      {/* Quick stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4" />
          <span>{role.experienceLevel === 'any' ? 'All levels' : role.experienceLevel}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          <span>{role.platforms.length} platforms</span>
        </div>
      </div>

      {/* Platform previews */}
      <div className="flex flex-wrap gap-2 mb-4">
        {role.platforms.slice(0, 3).map((platform) => (
          <span
            key={platform.name}
            className="px-2 py-1 rounded-lg bg-secondary text-xs font-medium"
          >
            {platform.name}
          </span>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full group"
        onClick={() => onViewDetails(role)}
      >
        View Details & Apply
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
}
