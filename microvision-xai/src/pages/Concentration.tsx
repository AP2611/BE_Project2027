import React from 'react';
import { Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

import { MOCK_CONCENTRATION } from '../data/mockData';

export const Concentration: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Microplastic Quantification</h1>
          <p className="text-sm text-text-secondary">Estimate microplastic concentration from detected particles.</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Estimated Concentration</CardTitle>
            <CardDescription>Particles per liter of water sample</CardDescription>
          </CardHeader>
          <CardContent className="text-center py-10">
            <div className="inline-flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-text-primary">{MOCK_CONCENTRATION.estimatedConcentration}</span>
              <span className="text-xl font-medium text-text-secondary">particles/L</span>
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-text-muted">Total Particles</span>
                <span className="text-text-primary font-medium">{MOCK_CONCENTRATION.totalParticles}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-text-muted">Sample Volume</span>
                <span className="text-text-primary font-medium">{MOCK_CONCENTRATION.sampleVolume} L</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-text-muted">Images Analyzed</span>
                <span className="text-text-primary font-medium">{MOCK_CONCENTRATION.imagesAnalyzed}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-text-muted">Avg. Particles/Image</span>
                <span className="text-text-primary font-medium">{MOCK_CONCENTRATION.averageParticlesPerImage}</span>
              </div>
            </div>
          </CardContent>
          <CardContent className="bg-background-secondary/50 rounded-lg border border-border-light/50 p-4">
            <div className="flex items-start gap-3">
              <Info size={16} className="text-accent-primary mt-0.5" />
              <p className="text-xs text-text-secondary">
                Concentration is estimated from detected particles and the analyzed sample volume.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};