import React from 'react';
import { Microscope, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const metrics = [
  { label: 'Resolution', value: '2048 × 2048', status: 'good' },
  { label: 'Brightness', value: 'Good', status: 'good' },
  { label: 'Contrast', value: 'Good', status: 'good' },
  { label: 'Noise', value: 'Low', status: 'good' },
  { label: 'Blur', value: 'Low', status: 'good' },
  { label: 'Fluorescence', value: 'Good', status: 'good' },
];

export const ImageQuality: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Image Quality Assessment</h1>
          <p className="text-sm text-text-secondary">Evaluate microscopy image suitability for automated detection.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Microscopy Image</CardTitle>
              <CardDescription>Nile Red fluorescence stained sample</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-96 bg-background-secondary rounded-lg border border-border-light">
              <div className="flex flex-col items-center gap-4">
                <Microscope size={64} className="text-text-muted" />
                <span className="text-sm text-text-secondary">Image placeholder</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Quality Metrics</CardTitle>
              <CardDescription>Technical image quality indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between py-3 border-b border-border-light/50 last:border-0">
                    <div>
                      <div className="text-sm font-medium text-text-primary">{metric.label}</div>
                    </div>
                    <div className="text-right">
                      <Badge variant={metric.status === 'good' ? 'success' : 'neutral'}>
                        {metric.value}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Overall Quality</CardTitle>
              <CardDescription>Composite quality assessment</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <CheckCircle size={32} className="text-status-success" />
                <span className="text-2xl font-bold text-text-primary">GOOD</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">
                Image quality is suitable for automated detection.
              </p>
              <CardFooter>
                <Button variant="primary" onClick={() => window.location.href = '/preprocessing'}>
                  Proceed to Preprocessing <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};