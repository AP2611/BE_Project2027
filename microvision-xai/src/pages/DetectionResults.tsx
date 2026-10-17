import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

import { MOCK_DETECTION_RESULT } from '../data/mockData';

export const DetectionResults: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Detection Results</h1>
          <p className="text-sm text-text-secondary">Detailed particle detection data and analysis.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Total Particles</div>
            <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.totalParticles}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Avg. Confidence</div>
            <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.averageConfidence}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Highest Confidence</div>
            <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.highestConfidence}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Lowest Confidence</div>
            <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.lowestConfidence}%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between mb-0">
              <div>
                <CardTitle className="text-sm">Detected Particles</CardTitle>
                <CardDescription>Individual particle detection data</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Particle ID</th>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Confidence</th>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">X</th>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Y</th>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Size (µm)</th>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Shape</th>
                      <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Fluorescence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_DETECTION_RESULT.particles.map((p) => (
                      <tr key={p.id} className="border-b border-border-light hover:bg-background-secondary/50 transition-colors">
                        <td className="px-3 py-3 text-sm font-medium text-text-primary">{p.id}</td>
                        <td className="px-3 py-3 text-sm text-text-primary">{p.confidence}%</td>
                        <td className="px-3 py-3 text-sm text-text-secondary">{p.x}</td>
                        <td className="px-3 py-3 text-sm text-text-secondary">{p.y}</td>
                        <td className="px-3 py-3 text-sm text-text-primary">{p.size}</td>
                        <td className="px-3 py-3 text-sm text-text-secondary">{p.shape}</td>
                        <td className="px-3 py-3 text-sm text-text-secondary">{p.fluorescence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Detection Overview</CardTitle>
              <CardDescription>Summary statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Total Detected</div>
                  <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.totalParticles}</div>
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Average Confidence</div>
                  <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.averageConfidence}%</div>
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Analysis Time</div>
                  <div className="text-2xl font-bold text-text-primary">{MOCK_DETECTION_RESULT.timestamp}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardFooter className="pt-0">
              <Button variant="primary" onClick={() => {}} className="w-full">
                Continue to Particle Analysis <ArrowRight size={16} />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};