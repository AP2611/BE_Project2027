import React from 'react';
import { Link } from 'react-router-dom';
import {
  Microscope,
  Droplets,
  Brain,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-primary to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-border-light z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 animate-fade-in-down">
              <Microscope className="w-8 h-8 text-accent-primary" />
              <span className="text-xl font-bold text-text-primary">MicroVision-XAI</span>
            </div>
            <div className="flex items-center gap-4 animate-fade-in-down">
              <Link to="/login">
                <Button variant="secondary" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4 animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                  AI-Powered{' '}
                  <span className="bg-gradient-to-r from-accent-primary to-teal-primary bg-clip-text text-transparent">
                    Microplastic Detection
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                  Advanced water quality analysis using cutting-edge computer vision and
                  explainable AI to detect, classify, and quantify microplastics with
                  unprecedented accuracy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
                <Link to="/register">
                  <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                    Start Analyzing
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-8 animate-fade-in-up animation-delay-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-status-success" />
                  <span className="text-sm text-text-secondary">High Accuracy Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-status-success" />
                  <span className="text-sm text-text-secondary">Explainable AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-status-success" />
                  <span className="text-sm text-text-secondary">Comprehensive Reports</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="relative rounded-2xl overflow-hidden shadow-xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-teal-primary/20"></div>
                <div className="relative bg-gradient-to-br from-accent-primary to-teal-primary h-96 sm:h-[500px] flex items-center justify-center">
                  <div className="text-center text-white space-y-4 p-8">
                    <Droplets className="w-24 h-24 mx-auto opacity-90" />
                    <h3 className="text-2xl font-semibold">Scientific Precision</h3>
                    <p className="text-sm opacity-90">
                      Transform microscopic imagery into actionable environmental insights
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Powerful Features for Water Quality Analysis
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our comprehensive platform combines advanced AI with scientific rigor to deliver
              reliable microplastic detection and analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-background-primary rounded-xl border border-border-light hover:border-accent-primary/30 transition-all hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">How It Works</h2>
            <p className="text-lg text-text-secondary">
              Simple, streamlined workflow from image upload to actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center space-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <div className="w-16 h-16 bg-accent-primary text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent-primary to-teal-primary -z-10"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-accent-primary to-teal-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join the fight against microplastic pollution with AI-powered water quality
              analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/register">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-accent-primary hover:bg-white/90 w-full sm:w-auto"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Already Have Account?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Microscope className="w-6 h-6" />
              <span className="text-lg font-semibold">MicroVision-XAI</span>
            </div>
            <p className="text-sm text-white/70 text-center md:text-right">
              Advancing environmental monitoring through explainable AI and computer vision.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © {new Date().getFullYear()} MicroVision-XAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Microscope,
    title: 'Advanced Detection',
    description:
      'State-of-the-art deep learning models accurately identify and classify microplastics in microscopic water samples.',
  },
  {
    icon: Brain,
    title: 'Explainable AI (XAI)',
    description:
      'Understand model decisions with heatmaps, saliency maps, and interpretable insights for scientific validation.',
  },
  {
    icon: BarChart3,
    title: 'Quantitative Analysis',
    description:
      'Precise particle counting, size distribution, shape characterization, and concentration measurements.',
  },
  {
    icon: Droplets,
    title: 'Water Sample Management',
    description:
      'Organize and track multiple samples with metadata, history, and comparative analysis tools.',
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description:
      'Evaluate environmental risks with automated risk scoring and evidence-based recommendations.',
  },
  {
    icon: CheckCircle,
    title: 'Professional Reports',
    description:
      'Generate comprehensive, publication-ready reports with visualizations, statistics, and findings.',
  },
];

const steps = [
  {
    step: 1,
    title: 'Upload Images',
    description: 'Upload microscope images of your water samples to the platform.',
  },
  {
    step: 2,
    title: 'AI Processing',
    description: 'Our models detect and analyze microplastics with high precision.',
  },
  {
    step: 3,
    title: 'XAI Insights',
    description: 'Review explainable visualizations to understand the results.',
  },
  {
    step: 4,
    title: 'Generate Reports',
    description: 'Export detailed analysis reports for your research or monitoring needs.',
  },
];
