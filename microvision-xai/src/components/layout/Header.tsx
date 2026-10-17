import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  HelpCircle,
  Menu,
  Search,
} from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  title: string;
  breadcrumb: string;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, title, breadcrumb }) => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-border-light">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 text-text-muted hover:text-text-primary transition-colors md:hidden"
          >
            <Menu size={20} />
          </button>
          <div>
            <Link
              to={location.pathname}
              className="text-lg font-semibold text-text-primary"
            >
              {title}
            </Link>
            <p className="text-xs text-text-muted">{breadcrumb}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            <Search size={16} className="text-text-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 text-sm bg-background-secondary border-none rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary w-32"
            />
          </div>
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
            <HelpCircle size={20} />
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-border-light">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium text-text-primary">Arjun Panse</span>
              <span className="text-xs text-text-secondary">Researcher</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-medium text-sm">
              AP
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};