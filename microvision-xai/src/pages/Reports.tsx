import React from 'react';
import { Download, Printer } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MOCK_REPORT_SECTIONS } from '../data/mockData';

export const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Analysis Report</h1>
          <p className="text-sm text-text-secondary">Generate comprehensive research reports.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Report Preview</CardTitle>
              <CardDescription>Sample analysis report structure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border border-border-light rounded-lg p-4 bg-white">
                {MOCK_REPORT_SECTIONS.map((section) => (
                  <div key={section.id} className="flex items-center justify-between py-2 border-b border-border-light/50 last:border-0">
                    <span className="text-sm text-text-primary">{section.title}</span>
                    <span className="text-xs text-text-secondary">{section.included ? 'Included' : 'Excluded'}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Report Configuration</CardTitle>
              <CardDescription>Select sections to include</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {MOCK_REPORT_SECTIONS.map((section) => (
                  <div key={section.id} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked={section.included}
                      className="w-4 h-4 rounded border-border-light text-accent-primary focus:ring-accent-primary"
                    />
                    <span className="text-sm text-text-primary">{section.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => {}}>
                  <Printer size={16} className="mr-2" />
                  Print
                </Button>
                <Button variant="primary" onClick={() => {}}>
                  <Download size={16} className="mr-2" />
                  Generate PDF
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};