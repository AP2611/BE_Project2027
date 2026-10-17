import React from 'react';
import {} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { MOCK_CORRECTIVE_MEASURES } from '../data/mockData';

export const CorrectiveMeasures: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Corrective & Remedial Measures</h1>
          <p className="text-sm text-text-secondary">Remedial actions based on risk assessment results.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CORRECTIVE_MEASURES.map((measure) => (
          <Card key={measure.id} hover>
            <CardHeader>
              <CardTitle className="text-sm">{measure.title}</CardTitle>
              <CardDescription>{measure.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50 mb-4">
                <span className="text-xs font-medium text-text-secondary">Priority</span>
                <Badge variant={measure.priority === 'High' ? 'danger' : measure.priority === 'Medium' ? 'warning' : 'success'}>
                  {measure.priority}
                </Badge>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50 mb-4">
                <span className="text-xs font-medium text-text-secondary">Status</span>
                <Badge variant="neutral">{measure.status}</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" onClick={() => {}}>
                  Mark as Planned
                </Button>
                <Button variant="primary" size="sm" onClick={() => {}}>
                  Mark as Completed
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};