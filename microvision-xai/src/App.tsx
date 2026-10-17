import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { WaterSamples } from './pages/WaterSamples';
import { ImageAnalysis } from './pages/ImageAnalysis';
import { ImageQuality } from './pages/ImageQuality';
import { Preprocessing } from './pages/Preprocessing';
import { Detection } from './pages/Detection';
import { DetectionResults } from './pages/DetectionResults';
import { ParticleAnalysis } from './pages/ParticleAnalysis';
import { Concentration } from './pages/Concentration';
import { XAIAnalysis } from './pages/XAIAnalysis';
import { RiskAssessment } from './pages/RiskAssessment';
import { Precautions } from './pages/Precautions';
import { CorrectiveMeasures } from './pages/CorrectiveMeasures';
import { CompareSamples } from './pages/CompareSamples';
import { History } from './pages/History';
import { Reports } from './pages/Reports';
import { ModelPerformance } from './pages/ModelPerformance';
import { SettingsPage } from './pages/Settings';
import { Profile } from './pages/Profile';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

const PAGE_TITLES: Record<string, { title: string; breadcrumb: string }> = {
  '/dashboard': { title: 'Dashboard', breadcrumb: 'MicroVision-XAI / Dashboard' },
  '/water-samples': { title: 'Water Samples', breadcrumb: 'MicroVision-XAI / Water Samples' },
  '/image-analysis': { title: 'Image Analysis', breadcrumb: 'MicroVision-XAI / Image Analysis' },
  '/image-quality': { title: 'Image Quality', breadcrumb: 'MicroVision-XAI / Image Quality Assessment' },
  '/preprocessing': { title: 'Preprocessing', breadcrumb: 'MicroVision-XAI / Image Preprocessing' },
  '/detection': { title: 'Detection', breadcrumb: 'MicroVision-XAI / Microplastic Detection' },
  '/detection-results': { title: 'Detection Results', breadcrumb: 'MicroVision-XAI / Detection Results' },
  '/particle-analysis': { title: 'Particle Analysis', breadcrumb: 'MicroVision-XAI / Particle Characterization' },
  '/concentration': { title: 'Concentration', breadcrumb: 'MicroVision-XAI / Microplastic Quantification' },
  '/xai-analysis': { title: 'XAI Analysis', breadcrumb: 'MicroVision-XAI / Explainable AI' },
  '/risk-assessment': { title: 'Risk Assessment', breadcrumb: 'MicroVision-XAI / Environmental Risk' },
  '/precautions': { title: 'Precautions', breadcrumb: 'MicroVision-XAI / Recommended Precautions' },
  '/corrective-measures': { title: 'Corrective Measures', breadcrumb: 'MicroVision-XAI / Remedial Measures' },
  '/compare-samples': { title: 'Compare Samples', breadcrumb: 'MicroVision-XAI / Sample Comparison' },
  '/history': { title: 'History', breadcrumb: 'MicroVision-XAI / Analysis History' },
  '/reports': { title: 'Reports', breadcrumb: 'MicroVision-XAI / Analysis Report' },
  '/model-performance': { title: 'Model Performance', breadcrumb: 'MicroVision-XAI / Model Performance' },
  '/settings': { title: 'Settings', breadcrumb: 'MicroVision-XAI / Settings' },
  '/profile': { title: 'Profile', breadcrumb: 'MicroVision-XAI / Profile' },
};

const PUBLIC_ROUTES = ['/', '/landing', '/login', '/register'];

export const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const pageInfo = PAGE_TITLES[location.pathname] || { title: 'Dashboard', breadcrumb: 'MicroVision-XAI' };
  const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);

  if (isPublicRoute) {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen bg-background-primary">
      <Sidebar />
      <div className={`flex-1 flex flex-col overflow-hidden ml-64 transition-all duration-300`}>
        <Header
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          title={pageInfo.title}
          breadcrumb={pageInfo.breadcrumb}
        />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/water-samples" element={<WaterSamples />} />
            <Route path="/image-analysis" element={<ImageAnalysis />} />
            <Route path="/image-quality" element={<ImageQuality />} />
            <Route path="/preprocessing" element={<Preprocessing />} />
            <Route path="/detection" element={<Detection />} />
            <Route path="/detection-results" element={<DetectionResults />} />
            <Route path="/particle-analysis" element={<ParticleAnalysis />} />
            <Route path="/concentration" element={<Concentration />} />
            <Route path="/xai-analysis" element={<XAIAnalysis />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/precautions" element={<Precautions />} />
            <Route path="/corrective-measures" element={<CorrectiveMeasures />} />
            <Route path="/compare-samples" element={<CompareSamples />} />
            <Route path="/history" element={<History />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/model-performance" element={<ModelPerformance />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
