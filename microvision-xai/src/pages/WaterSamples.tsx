import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Select, TextArea } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { MOCK_WATER_SAMPLES } from '../data/mockData';

export const WaterSamples: React.FC = () => {
  const [formData, setFormData] = useState({
    sampleId: '',
    location: '',
    waterType: '',
    collectionDate: '',
    sampleVolume: '',
    collectionMethod: '',
    description: '',
    latitude: '',
    longitude: '',
  });

  const waterTypes = ['River Water', 'Lake Water', 'Sea Water', 'Groundwater', 'Wastewater', 'Tap Water'];
  const methods = ['Grab sampling', 'Composite sampling', 'Surface skimming', 'Bottle sampling'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sample created:', formData);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Water Samples</h1>
          <p className="text-sm text-text-secondary">Manage collected water samples and their analysis history.</p>
        </div>
        <Button onClick={() => {}}>
          <Plus size={18} className="mr-2" />
          New Sample
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sample Creation Form */}
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Create New Sample</CardTitle>
              <CardDescription>Enter details for a new water sample collection.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Input label="Sample ID" placeholder="e.g. WS-025" value={formData.sampleId} onChange={(e) => setFormData({...formData, sampleId: e.target.value})} />
                </div>
                <div className="col-span-2">
                  <Input label="Collection Location" placeholder="e.g. Mula-Mutha River" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} />
                </div>
                <div>
                  <Select label="Water Type" value={formData.waterType} onChange={(e) => setFormData({...formData, waterType: e.target.value})}>
                    <option value="">Select water type</option>
                    {waterTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Select>
                </div>
                <div>
                  <Input type="date" label="Collection Date" value={formData.collectionDate} onChange={(e) => setFormData({...formData, collectionDate: e.target.value})} />
                </div>
                <div>
                  <Input type="number" label="Sample Volume (L)" placeholder="1.0" value={formData.sampleVolume} onChange={(e) => setFormData({...formData, sampleVolume: e.target.value})} />
                </div>
                <div>
                  <Select label="Collection Method" value={formData.collectionMethod} onChange={(e) => setFormData({...formData, collectionMethod: e.target.value})}>
                    <option value="">Select method</option>
                    {methods.map((method) => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </Select>
                </div>
                <div className="col-span-2">
                  <TextArea label="Description" placeholder="Additional notes about the sample..." value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <Input type="number" label="Latitude" placeholder="e.g. 18.5204" value={formData.latitude} onChange={(e) => setFormData({...formData, latitude: e.target.value})} />
                  <Input type="number" label="Longitude" placeholder="e.g. 73.8567" value={formData.longitude} onChange={(e) => setFormData({...formData, longitude: e.target.value})} />
                </div>
                <div className="col-span-2 flex gap-3 pt-4">
                  <Button variant="secondary" type="button">Cancel</Button>
                  <Button type="submit">Save Sample</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Samples List */}
        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Recent Samples</CardTitle>
              <CardDescription>Previously collected samples</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {MOCK_WATER_SAMPLES.slice(0, 6).map((sample) => (
                  <div key={sample.id} className="flex items-center justify-between p-3 bg-background-secondary rounded-md border border-border-light/50">
                    <div>
                      <div className="text-sm font-medium text-text-primary">{sample.sampleId}</div>
                      <div className="text-xs text-text-secondary">{sample.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-text-primary">{sample.particles}</div>
                      <div className="text-xs text-text-secondary">particles</div>
                    </div>
                    <Badge variant={sample.risk === 'High' || sample.risk === 'Very High' ? 'danger' : sample.risk === 'Moderate' ? 'warning' : 'success'}>
                      {sample.risk}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};