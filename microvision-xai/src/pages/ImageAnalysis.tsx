import React, { useState } from 'react';
import { Upload, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';


export const ImageAnalysis: React.FC = () => {
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setUploaded(true);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      setFile(e.dataTransfer.files[0]);
      setUploaded(true);
    }
  };

  const imageUrl = file ? URL.createObjectURL(file) : null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Image Analysis</h1>
          <p className="text-sm text-text-secondary">Upload Nile Red fluorescence microscopy images for automated microplastic detection.</p>
        </div>
      </div>

      {!uploaded ? (
        <Card hover>
          <CardContent className="p-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border-light rounded-lg p-8 hover:border-accent-primary transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Upload size={48} className="text-text-muted" />
              <h3 className="text-lg font-medium text-text-primary">Drag and drop microscopy images here</h3>
              <p className="text-sm text-text-secondary">PNG, JPG, TIFF supported</p>
              <Button variant="primary" onClick={() => document.getElementById('file-input')?.click()}>
                Browse Images
              </Button>
              <input
                id="file-input"
                type="file"
                accept=".png,.jpg,.jpeg,.tiff"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card hover>
              <CardHeader>
                <CardTitle className="text-sm">Image Preview</CardTitle>
                <CardDescription>Uploaded microscopy image</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-96 bg-background-secondary rounded-lg border border-border-light">
                {imageUrl && (
                  <img src={imageUrl} alt="Microscopy image" className="max-h-full max-w-full object-contain" />
                )}
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <CardTitle className="text-sm">Image Information</CardTitle>
                <CardDescription>Metadata from uploaded file</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border-light/50">
                    <span className="text-sm text-text-secondary">File Name</span>
                    <span className="text-sm text-text-primary">{file?.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light/50">
                    <span className="text-sm text-text-secondary">Resolution</span>
                    <span className="text-sm text-text-primary">2048 × 2048</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light/50">
                    <span className="text-sm text-text-secondary">Format</span>
                    <span className="text-sm text-text-primary">{file?.type.split('/')[1]?.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light/50">
                    <span className="text-sm text-text-secondary">File Size</span>
                    <span className="text-sm text-text-primary">{((file?.size || 0) / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light/50">
                    <span className="text-sm text-text-secondary">Magnification</span>
                    <span className="text-sm text-text-primary">400×</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light/50">
                    <span className="text-sm text-text-secondary">Sample ID</span>
                    <span className="text-sm text-text-primary">WS-024</span>
                  </div>
                </div>
                <CardFooter>
                  <Button variant="primary" onClick={() => {}}>
                    Continue to Quality Check <ArrowRight size={16} />
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};