export interface WaterSample {
  id: string;
  sampleId: string;
  location: string;
  waterType: string;
  date: string;
  images: number;
  particles: number;
  concentration: string;
  risk: string;
  status: string;
  latitude?: number;
  longitude?: number;
  volume?: number;
  collectionMethod?: string;
  description?: string;
}

export interface Particle {
  id: string;
  confidence: number;
  x: number;
  y: number;
  width: number;
  height: number;
  size: number;
  shape: string;
  fluorescence: number;
}

export interface DetectionResult {
  id: string;
  imageId: string;
  totalParticles: number;
  averageConfidence: number;
  highestConfidence: number;
  lowestConfidence: number;
  particles: Particle[];
  timestamp: string;
}

export interface ParticleAnalysis {
  averageSize: number;
  minSize: number;
  maxSize: number;
  sizeDistribution: { size: string; count: number }[];
  shapeDistribution: { shape: string; count: number; percentage: number }[];
  fluorescenceDistribution: { level: string; count: number; percentage: number }[];
}

export interface ConcentrationData {
  estimatedConcentration: number;
  totalParticles: number;
  sampleVolume: number;
  imagesAnalyzed: number;
  averageParticlesPerImage: number;
}

export interface XAIAnalysis {
  particleId: string;
  confidence: number;
  explanation: string;
  attentionRegion: string;
  detectionConfidence: number;
  particleCharacteristics: {
    size: number;
    shape: string;
    fluorescence: number;
  };
  explanationMethod: string;
}

export interface RiskAssessment {
  riskScore: number;
  riskLevel: string;
  riskFactors: {
    name: string;
    value: number;
    label: string;
  }[];
}

export interface Precaution {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  reason: string;
  action: string;
}

export interface CorrectiveMeasure {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Planned' | 'In Progress' | 'Completed';
  description: string;
}

export interface ModelPerformance {
  precision: number;
  recall: number;
  f1Score: number;
  mAP: number;
  iou: number;
  inferenceTime: number;
}

export interface ComparisonData {
  sampleA: WaterSample;
  sampleB: WaterSample;
  metrics: {
    name: string;
    valueA: number | string;
    valueB: number | string;
    unit: string;
  }[];
}

export interface HistoryEntry {
  id: string;
  sampleId: string;
  date: string;
  location: string;
  particleCount: number;
  concentration: string;
  risk: string;
  status: string;
}

export interface ReportSection {
  id: string;
  title: string;
  included: boolean;
}

export interface User {
  name: string;
  role: string;
  email: string;
  avatar: string;
}