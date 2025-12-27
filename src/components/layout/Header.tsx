import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/find-role', label: 'Find Role', icon: Search },
    { path: '/chat', label: 'SkillBot', icon: MessageCircle },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav className="glass-panel max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg hidden sm:block">
            Skill<span className="text-primary">→</span>Role<span className="text-accent">→</span>Link
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
