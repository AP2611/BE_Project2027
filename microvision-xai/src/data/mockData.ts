import type {
  WaterSample,
  DetectionResult,
  ParticleAnalysis,
  ConcentrationData,
  XAIAnalysis,
  RiskAssessment,
  Precaution,
  CorrectiveMeasure,
  ModelPerformance,
  HistoryEntry,
  ReportSection,
  User,
} from '../types';

export const MOCK_USER: User = {
  name: 'Arjun Panse',
  role: 'Researcher',
  email: 'arjun.panse@university.edu',
  avatar: '/avatars/user.png',
};

export const MOCK_WATER_SAMPLES: WaterSample[] = [
  {
    id: '1',
    sampleId: 'WS-024',
    location: 'Mula-Mutha River',
    waterType: 'River Water',
    date: '12 Oct 2026',
    images: 6,
    particles: 127,
    concentration: '127/L',
    risk: 'High',
    status: 'Analyzed',
    latitude: 18.5204,
    longitude: 73.8567,
    volume: 1.0,
    collectionMethod: 'Grab sampling',
    description: 'Collected from downstream industrial zone',
  },
  {
    id: '2',
    sampleId: 'WS-023',
    location: 'Pawana Lake',
    waterType: 'Lake Water',
    date: '10 Oct 2026',
    images: 4,
    particles: 89,
    concentration: '89/L',
    risk: 'Moderate',
    status: 'Analyzed',
    latitude: 18.6866,
    longitude: 73.7167,
    volume: 1.0,
    collectionMethod: 'Grab sampling',
    description: 'Recreational area, near boating zone',
  },
  {
    id: '3',
    sampleId: 'WS-022',
    location: 'Mithi River',
    waterType: 'River Water',
    date: '08 Oct 2026',
    images: 8,
    particles: 203,
    concentration: '203/L',
    risk: 'Very High',
    status: 'Analyzed',
    latitude: 19.0760,
    longitude: 72.8777,
    volume: 1.0,
    collectionMethod: 'Grab sampling',
    description: 'Urban river, high pollution zone',
  },
  {
    id: '4',
    sampleId: 'WS-021',
    location: 'Powai Lake',
    waterType: 'Lake Water',
    date: '05 Oct 2026',
    images: 5,
    particles: 67,
    concentration: '67/L',
    risk: 'Low',
    status: 'Analyzed',
    latitude: 19.1169,
    longitude: 72.9061,
    volume: 1.0,
    collectionMethod: 'Grab sampling',
    description: 'Residential area, monsoon season',
  },
  {
    id: '5',
    sampleId: 'WS-020',
    location: 'Arabian Sea Coast',
    waterType: 'Sea Water',
    date: '03 Oct 2026',
    images: 7,
    particles: 156,
    concentration: '156/L',
    risk: 'High',
    status: 'Analyzed',
    latitude: 18.9388,
    longitude: 72.8355,
    volume: 1.0,
    collectionMethod: 'Surface skimming',
    description: 'Coastal water near marina',
  },
  {
    id: '6',
    sampleId: 'WS-019',
    location: 'Vaitarna River',
    waterType: 'River Water',
    date: '01 Oct 2026',
    images: 3,
    particles: 45,
    concentration: '45/L',
    risk: 'Low',
    status: 'Analyzed',
    latitude: 19.6500,
    longitude: 73.2500,
    volume: 1.0,
    collectionMethod: 'Grab sampling',
    description: 'Upstream, relatively clean',
  },
];

export const MOCK_DETECTION_RESULT: DetectionResult = {
  id: 'det-001',
  imageId: 'img-001',
  totalParticles: 127,
  averageConfidence: 91.4,
  highestConfidence: 98.2,
  lowestConfidence: 84.6,
  particles: [
    { id: 'P001', confidence: 96.2, x: 340, y: 280, width: 45, height: 38, size: 12.5, shape: 'Fragment', fluorescence: 85 },
    { id: 'P002', confidence: 94.8, x: 512, y: 410, width: 52, height: 44, size: 15.2, shape: 'Fiber', fluorescence: 78 },
    { id: 'P003', confidence: 92.1, x: 200, y: 150, width: 38, height: 35, size: 10.8, shape: 'Film', fluorescence: 92 },
    { id: 'P004', confidence: 89.5, x: 680, y: 320, width: 41, height: 39, size: 11.9, shape: 'Bead', fluorescence: 71 },
    { id: 'P005', confidence: 95.3, x: 420, y: 500, width: 48, height: 42, size: 13.7, shape: 'Fragment', fluorescence: 88 },
    { id: 'P006', confidence: 87.2, x: 150, y: 450, width: 35, height: 32, size: 9.4, shape: 'Other', fluorescence: 65 },
    { id: 'P007', confidence: 93.7, x: 590, y: 210, width: 44, height: 40, size: 12.1, shape: 'Fiber', fluorescence: 82 },
    { id: 'P008', confidence: 91.8, x: 310, y: 380, width: 46, height: 41, size: 13.2, shape: 'Fragment', fluorescence: 90 },
    { id: 'P009', confidence: 88.4, x: 720, y: 450, width: 39, height: 36, size: 10.7, shape: 'Film', fluorescence: 74 },
    { id: 'P010', confidence: 94.1, x: 250, y: 220, width: 42, height: 37, size: 11.5, shape: 'Bead', fluorescence: 79 },
  ],
  timestamp: '12 Oct 2026, 14:30',
};

export const MOCK_PARTICLE_ANALYSIS: ParticleAnalysis = {
  averageSize: 12.4,
  minSize: 8.2,
  maxSize: 18.7,
  sizeDistribution: [
    { size: '5-10 µm', count: 34 },
    { size: '10-20 µm', count: 58 },
    { size: '20-50 µm', count: 25 },
    { size: '50-100 µm', count: 8 },
    { size: '100+ µm', count: 2 },
  ],
  shapeDistribution: [
    { shape: 'Fragment', count: 52, percentage: 41.0 },
    { shape: 'Fiber', count: 31, percentage: 24.4 },
    { shape: 'Film', count: 22, percentage: 17.3 },
    { shape: 'Bead', count: 15, percentage: 11.8 },
    { shape: 'Other', count: 7, percentage: 5.5 },
  ],
  fluorescenceDistribution: [
    { level: 'Low', count: 28, percentage: 22.0 },
    { level: 'Medium', count: 63, percentage: 49.6 },
    { level: 'High', count: 36, percentage: 28.4 },
  ],
};

export const MOCK_CONCENTRATION: ConcentrationData = {
  estimatedConcentration: 127,
  totalParticles: 127,
  sampleVolume: 1.0,
  imagesAnalyzed: 6,
  averageParticlesPerImage: 21.2,
};

export const MOCK_XAI_ANALYSIS: XAIAnalysis[] = [
  {
    particleId: 'P012',
    confidence: 94.2,
    explanation: 'The model focused primarily on the fluorescent region associated with the detected particle, showing strong activation in the Nile Red stained area.',
    attentionRegion: 'Central region (x: 445, y: 312)',
    detectionConfidence: 94.2,
    particleCharacteristics: { size: 14.2, shape: 'Fragment', fluorescence: 88 },
    explanationMethod: 'Gradient-weighted Class Activation Mapping (Grad-CAM)',
  },
  {
    particleId: 'P005',
    confidence: 95.3,
    explanation: 'High attention on the elongated fiber structure with consistent fluorescence intensity across the particle boundary.',
    attentionRegion: 'Right region (x: 512, y: 410)',
    detectionConfidence: 95.3,
    particleCharacteristics: { size: 15.2, shape: 'Fiber', fluorescence: 78 },
    explanationMethod: 'Grad-CAM',
  },
  {
    particleId: 'P003',
    confidence: 92.1,
    explanation: 'Model detected the thin film structure with moderate fluorescence, attention concentrated on the particle edges.',
    attentionRegion: 'Left region (x: 200, y: 150)',
    detectionConfidence: 92.1,
    particleCharacteristics: { size: 10.8, shape: 'Film', fluorescence: 92 },
    explanationMethod: 'Grad-CAM',
  },
];

export const MOCK_RISK_ASSESSMENT: RiskAssessment = {
  riskScore: 72,
  riskLevel: 'High',
  riskFactors: [
    { name: 'Microplastic Abundance', value: 82, label: 'High particle count per liter' },
    { name: 'Particle Concentration', value: 76, label: 'Elevated concentration levels' },
    { name: 'Particle Size', value: 61, label: 'Significant portion in 10-50 µm range' },
    { name: 'Particle Characteristics', value: 68, label: 'Mixed shapes with high fluorescence' },
  ],
};

export const MOCK_PRECAUTIONS: Precaution[] = [
  {
    id: '1',
    title: 'Avoid Direct Use of Contaminated Water',
    priority: 'High',
    reason: 'Elevated microplastic concentration detected in sample WS-024.',
    action: 'Do not use water from this source for drinking or cooking without treatment.',
  },
  {
    id: '2',
    title: 'Improve Filtration',
    priority: 'High',
    reason: 'High particle abundance suggests inadequate current filtration.',
    action: 'Install or upgrade filtration systems with fine mesh filters (≤10 µm).',
  },
  {
    id: '3',
    title: 'Increase Monitoring Frequency',
    priority: 'Medium',
    reason: 'Risk level remains high; more frequent sampling recommended.',
    action: 'Schedule bi-weekly water quality assessments for the next 3 months.',
  },
  {
    id: '4',
    title: 'Investigate Contamination Sources',
    priority: 'Medium',
    reason: 'Multiple particle types suggest varied contamination sources.',
    action: 'Conduct upstream survey to identify potential microplastic entry points.',
  },
];

export const MOCK_CORRECTIVE_MEASURES: CorrectiveMeasure[] = [
  {
    id: '1',
    title: 'Improve Water Filtration',
    priority: 'High',
    status: 'Planned',
    description: 'Upgrade existing filtration infrastructure to capture microplastic particles down to 10 µm.',
  },
  {
    id: '2',
    title: 'Investigate Contamination Source',
    priority: 'High',
    status: 'In Progress',
    description: 'Trace upstream sources of microplastic pollution in the Mula-Mutha River basin.',
  },
  {
    id: '3',
    title: 'Increase Sampling Frequency',
    priority: 'Medium',
    status: 'Planned',
    description: 'Implement weekly sampling at affected locations to track changes over time.',
  },
  {
    id: '4',
    title: 'Improve Wastewater Treatment',
    priority: 'Medium',
    status: 'Planned',
    description: 'Enhance treatment plant processes to include microplastic removal stages.',
  },
];

export const MOCK_MODEL_PERFORMANCE: ModelPerformance = {
  precision: 0.91,
  recall: 0.88,
  f1Score: 0.89,
  mAP: 0.914,
  iou: 0.85,
  inferenceTime: 234,
};

export const MOCK_HISTORY: HistoryEntry[] = [
  { id: '1', sampleId: 'WS-024', date: '12 Oct 2026', location: 'Mula-Mutha River', particleCount: 127, concentration: '127/L', risk: 'High', status: 'Analyzed' },
  { id: '2', sampleId: 'WS-023', date: '10 Oct 2026', location: 'Pawana Lake', particleCount: 89, concentration: '89/L', risk: 'Moderate', status: 'Analyzed' },
  { id: '3', sampleId: 'WS-022', date: '08 Oct 2026', location: 'Mithi River', particleCount: 203, concentration: '203/L', risk: 'Very High', status: 'Analyzed' },
  { id: '4', sampleId: 'WS-021', date: '05 Oct 2026', location: 'Powai Lake', particleCount: 67, concentration: '67/L', risk: 'Low', status: 'Analyzed' },
  { id: '5', sampleId: 'WS-020', date: '03 Oct 2026', location: 'Arabian Sea Coast', particleCount: 156, concentration: '156/L', risk: 'High', status: 'Analyzed' },
  { id: '6', sampleId: 'WS-019', date: '01 Oct 2026', location: 'Vaitarna River', particleCount: 45, concentration: '45/L', risk: 'Low', status: 'Analyzed' },
];

export const MOCK_REPORT_SECTIONS: ReportSection[] = [
  { id: '1', title: 'Sample Information', included: true },
  { id: '2', title: 'Image Information', included: true },
  { id: '3', title: 'Detection Results', included: true },
  { id: '4', title: 'Particle Count', included: true },
  { id: '5', title: 'Concentration', included: true },
  { id: '6', title: 'Particle Characteristics', included: true },
  { id: '7', title: 'XAI Analysis', included: true },
  { id: '8', title: 'Risk Assessment', included: true },
  { id: '9', title: 'Precautions', included: true },
  { id: '10', title: 'Corrective Measures', included: true },
];

// Chart data
export const CONCENTRATION_OVER_TIME = [
  { date: 'Oct 1', particles: 45 },
  { date: 'Oct 3', particles: 156 },
  { date: 'Oct 5', particles: 67 },
  { date: 'Oct 8', particles: 203 },
  { date: 'Oct 10', particles: 89 },
  { date: 'Oct 12', particles: 127 },
];

export const PARTICLE_SIZE_DISTRIBUTION = [
  { size: '5-10 µm', count: 34 },
  { size: '10-20 µm', count: 58 },
  { size: '20-50 µm', count: 25 },
  { size: '50-100 µm', count: 8 },
  { size: '100+ µm', count: 2 },
];

export const PARTICLE_SHAPE_DISTRIBUTION = [
  { shape: 'Fragment', count: 52, color: '#5B8DB8' },
  { shape: 'Fiber', count: 31, color: '#6A9BC2' },
  { shape: 'Film', count: 22, color: '#6FA7A3' },
  { shape: 'Bead', count: 15, color: '#94A3B8' },
  { shape: 'Other', count: 7, color: '#C59A55' },
];

export const FLUORESCENCE_DISTRIBUTION = [
  { level: 'Low', count: 28 },
  { level: 'Medium', count: 63 },
  { level: 'High', count: 36 },
];

export const RISK_DISTRIBUTION = [
  { level: 'Low', count: 12, color: '#5E9C83' },
  { level: 'Moderate', count: 8, color: '#6FA7A3' },
  { level: 'High', count: 5, color: '#C59A55' },
  { level: 'Very High', count: 2, color: '#C56B6B' },
];

export const MODEL_PERFORMANCE_BY_SIZE = [
  { size: '5-10 µm', precision: 0.85, recall: 0.82 },
  { size: '10-20 µm', precision: 0.91, recall: 0.89 },
  { size: '20-50 µm', precision: 0.94, recall: 0.91 },
  { size: '50-100 µm', precision: 0.96, recall: 0.93 },
  { size: '100+ µm', precision: 0.98, recall: 0.95 },
];

export const MODEL_PERFORMANCE_BY_QUALITY = [
  { quality: 'Poor', mAP: 0.72 },
  { quality: 'Fair', mAP: 0.81 },
  { quality: 'Good', mAP: 0.89 },
  { quality: 'Excellent', mAP: 0.94 },
];