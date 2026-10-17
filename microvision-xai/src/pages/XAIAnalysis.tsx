import React from 'react';
import { Brain, Microscope, Image as ImageIcon, Eye } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_XAI_ANALYSIS } from '../data/mockData';

export const XAIAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Explainable AI Analysis</h1>
          <p className="text-sm text-text-secondary">Understand which image regions influenced model detections.</p>
        </div>
      </div>

      {/* Main Visualization */}
      <Card hover>
        <CardHeader>
          <CardTitle className="text-sm">XAI Visualization</CardTitle>
          <CardDescription>Attention maps and detection explanations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-background-secondary rounded-lg border border-border-light p-4">
              <div className="flex items-center gap-2 mb-3">
                <ImageIcon size={16} className="text-text-muted" />
                <span className="text-xs font-medium text-text-secondary">Original Image</span>
              </div>
              <div className="h-48 bg-background-secondary/50 rounded flex items-center justify-center">
                <Microscope size={32} className="text-text-muted" />
              </div>
            </div>
            <div className="bg-background-secondary rounded-lg border border-border-light p-4">
              <div className="flex items-center gap-2 mb-3">
                <Eye size={16} className="text-text-muted" />
                <span className="text-xs font-medium text-text-secondary">DETR Detection</span>
              </div>
              <div className="h-48 bg-background-secondary/50 rounded flex items-center justify-center">
                <Microscope size={32} className="text-text-muted" />
              </div>
            </div>
            <div className="bg-background-secondary rounded-lg border border-border-light p-4">
              <div className="flex items-center gap-2 mb-3">
                <Brain size={16} className="text-text-muted" />
                <span className="text-xs font-medium text-text-secondary">XAI Attention Map</span>
              </div>
              <div className="h-48 bg-background-secondary/50 rounded flex items-center justify-center">
                <Microscope size={32} className="text-text-muted" />
              </div>
            </div>
          </div>

          <div className="bg-background-secondary rounded-lg border border-border-light p-4">
            <div className="flex items-center gap-2 mb-3">
              <Brain size={16} className="text-text-muted" />
              <span className="text-xs font-medium text-text-secondary">Attention Overlay</span>
            </div>
            <div className="h-48 bg-background-secondary/50 rounded flex items-center justify-center">
              <Microscope size={32} className="text-text-muted" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Explanation Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {MOCK_XAI_ANALYSIS.map((analysis) => (
          <Card key={analysis.particleId} hover>
            <CardHeader>
              <CardTitle className="text-sm">{analysis.particleId}</CardTitle>
              <CardDescription>Confidence: {analysis.confidence}%</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Detection Confidence</span>
                  <span className="text-sm font-medium text-text-primary">{analysis.detectionConfidence}%</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Attention Region</span>
                  <span className="text-sm text-text-secondary truncate max-w-xs">{analysis.attentionRegion}</span>
                </div>
                <div className="py-2">
                  <div className="text-xs font-medium text-text-secondary mb-1">Explanation</div>
                  <p className="text-sm text-text-secondary">{analysis.explanation}</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-text-secondary">Method</span>
                  <Badge variant="info">{analysis.explanationMethod}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};