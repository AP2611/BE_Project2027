import React from 'react';
import {
  LineChart, Line, ResponsiveContainer, BarChart, Bar, Pie, PieChart, Tooltip,
  Cell, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import { Droplets, Image as ImageIcon, BarChart3, AlertCircle, Activity, Microscope } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_WATER_SAMPLES, CONCENTRATION_OVER_TIME, PARTICLE_SHAPE_DISTRIBUTION, RISK_DISTRIBUTION } from '../data/mockData';

const statCards = [
  {
    title: 'Water Samples',
    value: '24',
    change: '+3 this month',
    icon: Droplets,
    iconColor: 'text-accent-primary',
  },
  {
    title: 'Images Analyzed',
    value: '186',
    change: '',
    icon: ImageIcon,
    iconColor: 'text-accent-primary',
  },
  {
    title: 'Particles Detected',
    value: '4,821',
    change: '',
    icon: BarChart3,
    iconColor: 'text-accent-primary',
  },
  {
    title: 'Avg. Concentration',
    value: '126 particles/L',
    change: '',
    icon: Activity,
    iconColor: 'text-accent-primary',
  },
  {
    title: 'High-Risk Samples',
    value: '5',
    change: '',
    icon: AlertCircle,
    iconColor: 'text-status-danger',
  },
  {
    title: 'Model mAP',
    value: '91.4%',
    change: '',
    icon: Microscope,
    iconColor: 'text-accent-primary',
  },
];

export const Dashboard: React.FC = () => {
  const CUSTOM_COLORS = ['#5B8DB8', '#6A9BC2', '#6FA7A3', '#94A3B8', '#C59A55'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Microplastic Analysis Dashboard</h1>
          <p className="text-sm text-text-secondary">Monitor samples, detection results, particle characteristics and environmental risk.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {statCards.map((card, idx) => (
          <Card key={idx} hover>
            <CardHeader className="flex flex-row items-center justify-between mb-0">
              <div>
                <CardTitle className="text-sm">{card.title}</CardTitle>
                {card.change && <CardDescription>{card.change}</CardDescription>}
              </div>
              <card.icon size={24} className={card.iconColor} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-text-primary">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Chart 1: Concentration Over Time */}
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Microplastic Concentration Over Time</CardTitle>
            <CardDescription>Particles per liter over sampling period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={CONCENTRATION_OVER_TIME}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                  <XAxis dataKey="date" stroke="#94A3B8" fontSize={12} />
                  <YAxis stroke="#94A3B8" fontSize={12} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="particles"
                    stroke="#5B8DB8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Chart 2: Particle Shape Distribution */}
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Particle Shape Distribution</CardTitle>
            <CardDescription>Breakdown by particle morphology</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PARTICLE_SHAPE_DISTRIBUTION}
                    dataKey="count"
                    nameKey="shape"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    fill="#8884d8"
                    labelLine={false}
                    label={({ name }: any) => (
                      <text
                        x={0}
                        y={0}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        fontSize={10}
                        fill="#64748B"
                      >
                        {name}
                      </text>
                    )}
                  >
                    {PARTICLE_SHAPE_DISTRIBUTION.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={CUSTOM_COLORS[index % CUSTOM_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 3: Risk Distribution */}
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Environmental Risk Distribution</CardTitle>
            <CardDescription>Samples by risk classification</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RISK_DISTRIBUTION}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={false} />
                  <XAxis type="number" stroke="#94A3B8" fontSize={12} />
                  <YAxis dataKey="level" stroke="#94A3B8" fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="count" radius={[4, 4, 4, 4]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Samples Table */}
        <Card hover>
          <CardHeader className="flex flex-row items-center justify-between mb-0">
            <div>
              <CardTitle className="text-sm">Recent Samples</CardTitle>
              <CardDescription>Latest water sample analyses</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Sample ID</th>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Location</th>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Type</th>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Particles</th>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Concentration</th>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Risk</th>
                    <th className="px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider border-b border-border-light">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_WATER_SAMPLES.slice(0, 5).map((sample) => (
                    <tr key={sample.id} className="border-b border-border-light hover:bg-background-secondary/50 transition-colors">
                      <td className="px-3 py-3 text-sm font-medium text-text-primary">{sample.sampleId}</td>
                      <td className="px-3 py-3 text-sm text-text-primary">{sample.location}</td>
                      <td className="px-3 py-3 text-sm text-text-secondary">{sample.waterType}</td>
                      <td className="px-3 py-3 text-sm text-text-primary">{sample.particles}</td>
                      <td className="px-3 py-3 text-sm text-text-primary">{sample.concentration}</td>
                      <td className="px-3 py-3 text-sm">
                        <Badge variant={sample.risk === 'High' || sample.risk === 'Very High' ? 'danger' : sample.risk === 'Moderate' ? 'warning' : 'success'}>
                          {sample.risk}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 text-sm">
                        <Badge variant="success">{sample.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};