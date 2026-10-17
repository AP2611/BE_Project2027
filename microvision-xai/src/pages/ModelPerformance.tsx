import React from 'react';
import { BarChart2, Activity } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

import { MOCK_MODEL_PERFORMANCE } from '../data/mockData';

export const ModelPerformance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Model Performance</h1>
          <p className="text-sm text-text-secondary">Evaluate DETR detection performance across experimental conditions.</p>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Precision</div>
            <div className="text-2xl font-bold text-text-primary">{Math.round(MOCK_MODEL_PERFORMANCE.precision * 100)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Recall</div>
            <div className="text-2xl font-bold text-text-primary">{Math.round(MOCK_MODEL_PERFORMANCE.recall * 100)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">F1 Score</div>
            <div className="text-2xl font-bold text-text-primary">{Math.round(MOCK_MODEL_PERFORMANCE.f1Score * 100)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">mAP</div>
            <div className="text-2xl font-bold text-text-primary">{Math.round(MOCK_MODEL_PERFORMANCE.mAP * 100)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">IoU</div>
            <div className="text-2xl font-bold text-text-primary">{Math.round(MOCK_MODEL_PERFORMANCE.iou * 100)}%</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs text-text-secondary">Inference Time</div>
            <div className="text-2xl font-bold text-text-primary">{MOCK_MODEL_PERFORMANCE.inferenceTime} ms</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Detection Performance vs Particle Size</CardTitle>
            <CardDescription>Model accuracy across different particle sizes</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <div className="flex items-center justify-center h-full">
              <BarChart2 size={48} className="text-text-muted" />
              <span className="ml-2 text-sm text-text-secondary">Performance by Size Chart</span>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">mAP vs Image Quality</CardTitle>
            <CardDescription>Detection quality across image conditions</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <div className="flex items-center justify-center h-full">
              <Activity size={48} className="text-text-muted" />
              <span className="ml-2 text-sm text-text-secondary">Quality vs Performance Chart</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Particle Size Analysis</CardTitle>
            <CardDescription>Detection performance by size category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">5-10 µm</span>
                <span className="text-sm font-medium text-text-primary">85% precision</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">10-20 µm</span>
                <span className="text-sm font-medium text-text-primary">91% precision</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">20-50 µm</span>
                <span className="text-sm font-medium text-text-primary">94% precision</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Particle Shape Analysis</CardTitle>
            <CardDescription>Detection performance by morphology</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Fragment</span>
                <span className="text-sm font-medium text-text-primary">92% precision</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Fiber</span>
                <span className="text-sm font-medium text-text-primary">89% precision</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Film</span>
                <span className="text-sm font-medium text-text-primary">87% precision</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Fluorescence Analysis</CardTitle>
            <CardDescription>Detection by fluorescence intensity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Low</span>
                <span className="text-sm font-medium text-text-primary">78% precision</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">Medium</span>
                <span className="text-sm font-medium text-text-primary">91% precision</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                <span className="text-sm text-text-secondary">High</span>
                <span className="text-sm font-medium text-text-primary">95% precision</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};