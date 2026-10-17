import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-text-secondary mb-1">{label}</label>}
      <input
        className={`block w-full px-3 py-2 text-sm text-text-primary bg-white border border-border-light rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary ${error ? 'border-status-danger' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-status-danger">{error}</p>}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-text-secondary mb-1">{label}</label>}
      <textarea
        className={`block w-full px-3 py-2 text-sm text-text-primary bg-white border border-border-light rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary ${error ? 'border-status-danger' : ''} ${className}`}
        rows={4}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-status-danger">{error}</p>}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export const Select: React.FC<SelectProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-text-secondary mb-1">{label}</label>}
      <select
        className={`block w-full px-3 py-2 text-sm text-text-primary bg-white border border-border-light rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary ${error ? 'border-status-danger' : ''} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-status-danger">{error}</p>}
    </div>
  );
};