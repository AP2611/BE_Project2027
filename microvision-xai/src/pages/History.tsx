import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_HISTORY } from '../data/mockData';

export const History: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Analysis History</h1>
          <p className="text-sm text-text-secondary">View past sample analyses and results.</p>
        </div>
        <div className="flex items-center gap-2">
          <Search size={16} className="text-text-muted" />
          <input type="text" placeholder="Search history..." className="px-3 py-1.5 text-sm bg-background-secondary border-none rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary w-48" />
        </div>
      </div>

      <Card hover>
        <CardHeader>
          <CardTitle className="text-sm">Analysis Records</CardTitle>
          <CardDescription>Historical sample analysis data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Sample ID</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Date</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Location</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Particle Count</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Concentration</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Risk</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Status</th>
                  <th className="px-4 py-3 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_HISTORY.map((entry) => (
                  <tr key={entry.id} className="border-b border-border-light hover:bg-background-secondary/50 transition-colors">
                    <td className="px-4 py-4 text-sm font-medium text-text-primary">{entry.sampleId}</td>
                    <td className="px-4 py-4 text-sm text-text-secondary">{entry.date}</td>
                    <td className="px-4 py-4 text-sm text-text-primary">{entry.location}</td>
                    <td className="px-4 py-4 text-sm text-text-primary">{entry.particleCount}</td>
                    <td className="px-4 py-4 text-sm text-text-primary">{entry.concentration}</td>
                    <td className="px-4 py-4 text-sm">
                      <Badge variant={entry.risk === 'High' || entry.risk === 'Very High' ? 'danger' : entry.risk === 'Moderate' ? 'warning' : 'success'}>
                        {entry.risk}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <Badge variant="success">{entry.status}</Badge>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="text-accent-primary hover:text-accent-secondary text-sm font-medium">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};