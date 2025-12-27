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
  
  // Get the primary platform for quick apply
  const primaryPlatform = role.platforms[0];

  const handleQuickApply = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (primaryPlatform) {
      window.open(primaryPlatform.url, '_blank', 'noopener,noreferrer');
    }
  };

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

      {/* Quick Apply Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {role.platforms.slice(0, 2).map((platform) => (
          <button
            key={platform.name}
            onClick={(e) => {
              e.stopPropagation();
              window.open(platform.url, '_blank', 'noopener,noreferrer');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border/50 text-xs font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            <ExternalLink className="w-3 h-3" />
            {platform.name}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1 group"
          onClick={() => onViewDetails(role)}
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          variant="accent"
          className="gap-2 hover:scale-105 transition-transform"
          onClick={handleQuickApply}
        >
          Apply
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
