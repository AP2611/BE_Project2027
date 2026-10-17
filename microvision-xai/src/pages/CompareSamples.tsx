import React from 'react';
import {} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Select } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { MOCK_WATER_SAMPLES } from '../data/mockData';

export const CompareSamples: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Compare Samples</h1>
          <p className="text-sm text-text-secondary">Side-by-side comparison of water samples.</p>
        </div>
      </div>

      <Card hover>
        <CardHeader>
          <CardTitle className="text-sm">Sample Selection</CardTitle>
          <CardDescription>Select two samples to compare</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Sample A</label>
              <Select value="WS-024" onChange={() => {}}>
                {MOCK_WATER_SAMPLES.map((s) => (
                  <option key={s.id} value={s.sampleId}>{s.sampleId} - {s.location}</option>
                ))}
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Sample B</label>
              <Select value="WS-023" onChange={() => {}}>
                {MOCK_WATER_SAMPLES.map((s) => (
                  <option key={s.id} value={s.sampleId}>{s.sampleId} - {s.location}</option>
                ))}
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Sample A: WS-024</CardTitle>
            <CardDescription>Mula-Mutha River</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Particle Count</span>
                <span className="text-sm font-medium text-text-primary">127</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Concentration</span>
                <span className="text-sm font-medium text-text-primary">127/L</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Risk Level</span>
                <Badge variant="danger">High</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Sample B: WS-023</CardTitle>
            <CardDescription>Pawana Lake</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Particle Count</span>
                <span className="text-sm font-medium text-text-primary">89</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Concentration</span>
                <span className="text-sm font-medium text-text-primary">89/L</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Risk Level</span>
                <Badge variant="warning">Moderate</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};