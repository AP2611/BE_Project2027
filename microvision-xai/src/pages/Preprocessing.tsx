import React from 'react';
import { Microscope, SlidersHorizontal, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const pipelineSteps = [
  { name: 'Original Image', icon: ImageIcon, status: 'complete' },
  { name: 'Noise Reduction', icon: SlidersHorizontal, status: 'complete' },
  { name: 'Contrast Enhancement', icon: SlidersHorizontal, status: 'complete' },
  { name: 'Normalization', icon: SlidersHorizontal, status: 'complete' },
  { name: 'Processed Image', icon: Microscope, status: 'pending' },
];

export const Preprocessing: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Image Preprocessing</h1>
          <p className="text-sm text-text-secondary">Prepare microscopy images for DETR-based detection.</p>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <Card hover>
        <CardHeader>
          <CardTitle className="text-sm">Preprocessing Pipeline</CardTitle>
          <CardDescription>Sequential image enhancement steps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pipelineSteps.map((step, idx) => (
              <div key={step.name} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step.status === 'complete' ? 'border-accent-primary bg-accent-primary/10' : 'border-border-light bg-white'}`}
                >
                  <step.icon size={16} className={step.status === 'complete' ? 'text-accent-primary' : 'text-text-muted'} />
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <div className="w-4 h-1 bg-border-light mx-2"></div>
                )}
                <div className="flex-1">
                  <div className="text-sm font-medium text-text-primary">{step.name}</div>
                  <div className="text-xs text-text-secondary">
                    {step.status === 'complete' ? 'Completed' : 'Pending'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Original Image</CardTitle>
            <CardDescription>Raw microscopy image</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-80 bg-background-secondary rounded-lg border border-border-light">
            <div className="flex flex-col items-center gap-4">
              <ImageIcon size={48} className="text-text-muted" />
              <span className="text-sm text-text-secondary">Original</span>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Processed Image</CardTitle>
            <CardDescription>Enhanced and normalized</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-80 bg-background-secondary rounded-lg border border-border-light">
            <div className="flex flex-col items-center gap-4">
              <Microscope size={48} className="text-text-muted" />
              <span className="text-sm text-text-secondary">Processed</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <CardFooter>
          <Button variant="primary" onClick={() => {}}>
            Run Detection <ArrowRight size={16} />
          </Button>
        </CardFooter>
      </div>
    </div>
  );
};