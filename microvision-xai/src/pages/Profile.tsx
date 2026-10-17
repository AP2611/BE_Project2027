import React from 'react';
import { Microscope, Mail } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MOCK_USER } from '../data/mockData';

export const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Profile</h1>
          <p className="text-sm text-text-secondary">User account and research profile settings.</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card hover>
          <CardHeader>
            <CardTitle className="text-sm">Researcher Profile</CardTitle>
            <CardDescription>Account information and preferences</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold text-2xl mb-4">
                {MOCK_USER.name.split(' ').map((n) => n[0]).join('')}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-semibold text-text-primary">{MOCK_USER.name}</h2>
                <span className="bg-text-muted/10 text-text-muted px-2 py-0.5 rounded text-xs">Researcher</span>
              </div>
              <p className="text-sm text-text-secondary mb-4">{MOCK_USER.email}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Microscope size={16} className="text-text-muted" />
                  <span className="text-sm text-text-primary">Microplastic Detection Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-text-muted" />
                  <span className="text-sm text-text-primary">{MOCK_USER.email}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Edit Profile</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};