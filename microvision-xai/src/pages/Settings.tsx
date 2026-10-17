import React from 'react';
import {} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Select } from '../components/ui/Input';


export const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Settings</h1>
          <p className="text-sm text-text-secondary">Configure platform preferences and system options.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">General Settings</CardTitle>
              <CardDescription>Platform configuration options</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Institution</label>
                  <Input placeholder="University or organization name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Default Detection Threshold</label>
                  <Select value="0.50" onChange={() => {}}>
                    <option value="0.30">0.30</option>
                    <option value="0.50">0.50</option>
                    <option value="0.70">0.70</option>
                    <option value="0.90">0.90</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Analysis Model</label>
                  <Select value="DETR" onChange={() => {}}>
                    <option value="DETR">DETR (Detection Transformer)</option>
                    <option value="YOLOv8">YOLOv8</option>
                    <option value="Faster R-CNN">Faster R-CNN</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email Notifications</label>
                  <Select value="enabled" onChange={() => {}}>
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Save Settings</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">System Status</CardTitle>
              <CardDescription>Platform health and version</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Platform Version</span>
                  <span className="text-sm font-medium text-text-primary">v1.0.0</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">DETR Model</span>
                  <span className="text-sm font-medium text-text-primary">v2.1.3</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Database</span>
                  <span className="text-sm font-medium text-text-primary">Connected</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Last Backup</span>
                  <span className="text-sm font-medium text-text-primary">2 hours ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};