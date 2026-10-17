import React from 'react';
import { BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

import { MOCK_PARTICLE_ANALYSIS } from '../data/mockData';

export const ParticleAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Particle Characterization</h1>
          <p className="text-sm text-text-secondary">Analyze detected microplastic particles based on size, shape and fluorescence.</p>
        </div>
      </div>

      {/* Size Section */}
      <Card hover>
        <CardHeader>
          <CardTitle className="text-sm">Particle Size Analysis</CardTitle>
          <CardDescription>Size distribution of detected microplastic particles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-background-secondary rounded-lg p-4">
              <div className="text-xs text-text-secondary uppercase tracking-wider">Average Size</div>
              <div className="text-2xl font-bold text-text-primary">{MOCK_PARTICLE_ANALYSIS.averageSize} µm</div>
            </div>
            <div className="bg-background-secondary rounded-lg p-4">
              <div className="text-xs text-text-secondary uppercase tracking-wider">Minimum Size</div>
              <div className="text-2xl font-bold text-text-primary">{MOCK_PARTICLE_ANALYSIS.minSize} µm</div>
            </div>
            <div className="bg-background-secondary rounded-lg p-4">
              <div className="text-xs text-text-secondary uppercase tracking-wider">Maximum Size</div>
              <div className="text-2xl font-bold text-text-primary">{MOCK_PARTICLE_ANALYSIS.maxSize} µm</div>
            </div>
          </div>
          <div className="h-64">
            <div className="flex items-center justify-center h-full">
              <BarChart3 size={48} className="text-text-muted" />
              <span className="ml-2 text-sm text-text-secondary">Size Distribution Chart</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shape Distribution */}
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Particle Shape Distribution</CardTitle>
            <CardDescription>Morphological classification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_PARTICLE_ANALYSIS.shapeDistribution.map((item) => (
                <div key={item.shape} className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-medium text-text-primary">{item.shape}</div>
                    <div className="text-xs text-text-secondary">{item.count} particles</div>
                  </div>
                  <div className="w-24 bg-background-secondary rounded-full h-2 overflow-hidden">
                    <div className="bg-accent-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                  <div className="text-sm font-medium text-text-primary">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fluorescence Distribution */}
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Fluorescence Intensity</CardTitle>
            <CardDescription>Nile Red fluorescence levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_PARTICLE_ANALYSIS.fluorescenceDistribution.map((item) => (
                <div key={item.level} className="flex items-center justify-between py-2">
                  <div>
                    <div className="text-sm font-medium text-text-primary">{item.level}</div>
                    <div className="text-xs text-text-secondary">{item.count} particles</div>
                  </div>
                  <div className="w-24 bg-background-secondary rounded-full h-2 overflow-hidden">
                    <div className="bg-teal-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                  <div className="text-sm font-medium text-text-primary">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};