import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Droplets,
  Image,
  Search,
  BarChart3,
  Brain,
  AlertTriangle,
  Shield,
  Wrench,
  RefreshCcw,
  History,
  FileText,
  BarChart2,
  Settings,
  User,
  Microscope,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface NavItem {
  title: string;
  icon: React.ElementType;
  path: string;
  group?: 'main' | 'research' | 'system';
}

const MAIN_NAV: NavItem[] = [
  { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { title: 'Water Samples', icon: Droplets, path: '/water-samples' },
  { title: 'Image Analysis', icon: Image, path: '/image-analysis' },
  { title: 'Detection Results', icon: Search, path: '/detection-results' },
  { title: 'Particle Analysis', icon: BarChart3, path: '/particle-analysis' },
  { title: 'XAI Analysis', icon: Brain, path: '/xai-analysis' },
  { title: 'Risk Assessment', icon: AlertTriangle, path: '/risk-assessment' },
  { title: 'Precautions', icon: Shield, path: '/precautions' },
  { title: 'Corrective Measures', icon: Wrench, path: '/corrective-measures' },
  { title: 'Compare Samples', icon: RefreshCcw, path: '/compare-samples' },
  { title: 'History', icon: History, path: '/history' },
  { title: 'Reports', icon: FileText, path: '/reports' },
];

const RESEARCH_NAV: NavItem[] = [
  { title: 'Model Performance', icon: BarChart2, path: '/model-performance' },
];

const SYSTEM_NAV: NavItem[] = [
  { title: 'Settings', icon: Settings, path: '/settings' },
  { title: 'Profile', icon: User, path: '/profile' },
];

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-full border-r border-border-light bg-white z-20 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className={`p-4 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center text-accent-primary">
              <Microscope size={18} />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-sm font-semibold text-text-primary tracking-tight">MicroVision-XAI</h1>
                <p className="text-xs text-text-muted">Microplastic Analysis</p>
              </div>
            )}
          </div>
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="p-2 text-text-muted hover:text-text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className={`px-3 ${collapsed ? 'justify-center' : ''}`}>
            <NavGroup
              title="Main"
              items={MAIN_NAV}
              collapsed={collapsed}
              onNavClick={handleNavClick}
            />
          </div>
          <div className={`px-3 ${collapsed ? 'justify-center' : ''}`}>
            <NavGroup
              title="Research"
              items={RESEARCH_NAV}
              collapsed={collapsed}
              onNavClick={handleNavClick}
            />
          </div>
          <div className={`px-3 ${collapsed ? 'justify-center' : ''}`}>
            <NavGroup
              title="System"
              items={SYSTEM_NAV}
              collapsed={collapsed}
              onNavClick={handleNavClick}
            />
          </div>
        </nav>

        {/* Collapse toggle */}
        {collapsed && (
          <div className="px-2 py-2 border-t border-border-light">
            <button
              onClick={() => setCollapsed(false)}
              className="w-full p-2 text-text-muted hover:text-text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

interface NavGroupProps {
  title: string;
  items: NavItem[];
  collapsed: boolean;
  onNavClick: (path: string) => void;
}

const NavGroup: React.FC<NavGroupProps> = ({ title, items, collapsed, onNavClick }) => {
  return (
    <div className="mb-6">
      {!collapsed && title && (
        <h2 className="px-3 mb-3 text-xs font-semibold text-text-muted uppercase tracking-wider">
          {title}
        </h2>
      )}
      {items.map((item) => (
        <button
          key={item.title}
          onClick={() => onNavClick(item.path)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
            collapsed
              ? 'justify-center text-text-secondary hover:bg-background-secondary'
              : 'text-text-secondary hover:bg-background-secondary hover:text-accent-primary'
          }`}
        >
          <item.icon size={16} />
          {!collapsed && <span>{item.title}</span>}
        </button>
      ))}
    </div>
  );
};