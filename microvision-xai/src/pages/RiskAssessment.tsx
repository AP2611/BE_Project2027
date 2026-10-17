import React from 'react';
import { Info } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_RISK_ASSESSMENT } from '../data/mockData';

export const RiskAssessment: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Environmental Risk Assessment</h1>
          <p className="text-sm text-text-secondary">Assess sample risk using configured analysis criteria.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Risk Score</CardTitle>
              <CardDescription>Overall environmental risk classification</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-8">
              <div className="inline-flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-text-primary">{MOCK_RISK_ASSESSMENT.riskScore}</span>
                <span className="text-xl font-medium text-text-secondary">/ 100</span>
              </div>
              <div className="flex justify-center items-center gap-2 mb-6">
                <Badge variant={MOCK_RISK_ASSESSMENT.riskLevel === 'High' || MOCK_RISK_ASSESSMENT.riskLevel === 'Very High' ? 'danger' : MOCK_RISK_ASSESSMENT.riskLevel === 'Moderate' ? 'warning' : 'success'} className="px-4 py-2 text-base">
                  {MOCK_RISK_ASSESSMENT.riskLevel}
                </Badge>
              </div>
              <div className="w-full bg-background-secondary rounded-full h-4 overflow-hidden">
                <div className="bg-accent-primary h-4 rounded-full" style={{ width: `${MOCK_RISK_ASSESSMENT.riskScore}%` }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Risk Factors</CardTitle>
              <CardDescription>Individual risk component analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {MOCK_RISK_ASSESSMENT.riskFactors.map((factor) => (
                  <div key={factor.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-text-primary">{factor.name}</span>
                      <span className="text-sm font-medium text-text-primary">{factor.value}%</span>
                    </div>
                    <div className="w-full bg-background-secondary rounded-full h-2 overflow-hidden">
                      <div className="bg-accent-primary h-2 rounded-full" style={{ width: `${factor.value}%` }} />
                    </div>
                    <div className="text-xs text-text-secondary">{factor.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card hover>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info size={16} className="text-accent-primary mt-0.5" />
            <div>
              <p className="text-xs font-medium text-text-primary">Important Disclaimer</p>
              <p className="text-xs text-text-secondary">
                Risk classification is an analytical assessment based on configured criteria and detected sample characteristics. It should not be interpreted as a direct health-risk diagnosis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};