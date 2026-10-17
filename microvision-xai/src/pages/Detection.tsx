import React from 'react';
import { Microscope, Eye, EyeOff, RotateCcw, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Detection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Microplastic Detection</h1>
          <p className="text-sm text-text-secondary">DETR-based automated particle detection.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Detection View</CardTitle>
              <CardDescription>DETR model output with bounding boxes</CardDescription>
            </CardHeader>
            <CardContent className="relative flex items-center justify-center h-[500px] bg-background-secondary rounded-lg border border-border-light overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Microscope size={64} className="text-text-muted mb-4" />
                  <p className="text-sm text-text-secondary">Microscopy image with detection overlay</p>
                </div>
              </div>
              {/* Detection overlay indicators */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                <div className="flex items-center gap-1 px-2 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded text-xs text-accent-primary">
                  <span>P001</span> <span>96.2%</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded text-xs text-accent-primary">
                  <span>P002</span> <span>94.8%</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 bg-accent-primary/10 border border-accent-primary/20 rounded text-xs text-accent-primary">
                  <span>P003</span> <span>92.1%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" onClick={() => {}}>
                  <Eye size={14} className="mr-2" /> Show Boxes
                </Button>
                <Button variant="secondary" size="sm" onClick={() => {}}>
                  <EyeOff size={14} className="mr-2" /> Hide Boxes
                </Button>
                <Button variant="secondary" size="sm" onClick={() => {}}>
                  <Eye size={14} className="mr-2" /> Show Labels
                </Button>
                <Button variant="secondary" size="sm" onClick={() => {}}>
                  <RotateCcw size={14} className="mr-2" /> Reset View
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Detection Summary</CardTitle>
              <CardDescription>Automated detection results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-3xl font-bold text-text-primary">127</div>
                <div className="text-sm text-text-secondary">Detected Particles</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Average Confidence</span>
                  <span className="text-sm font-medium text-text-primary">91.4%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Confidence Threshold</span>
                  <div className="flex items-center gap-2">
                    <input type="range" min="0" max="1" step="0.01" defaultValue="0.5" className="w-24 accent-accent-primary" />
                    <span className="text-xs text-text-muted">0.50</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
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