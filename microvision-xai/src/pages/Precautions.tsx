import React from 'react';
import {} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_PRECAUTIONS } from '../data/mockData';

export const Precautions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Recommended Precautions</h1>
          <p className="text-sm text-text-secondary">Precautionary actions based on the analyzed sample.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PRECAUTIONS.map((precaution) => (
          <Card key={precaution.id} hover>
            <CardHeader>
              <CardTitle className="text-sm">{precaution.title}</CardTitle>
              <CardDescription>{precaution.reason}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between py-2 border-b border-border-light/50 mb-4">
                <span className="text-xs font-medium text-text-secondary">Priority</span>
                <Badge variant={precaution.priority === 'High' ? 'danger' : precaution.priority === 'Medium' ? 'warning' : 'success'}>
                  {precaution.priority}
                </Badge>
              </div>
              <div className="text-sm text-text-secondary">{precaution.action}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};