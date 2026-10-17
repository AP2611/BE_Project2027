import React, { useState, useRef } from 'react';
import { Microscope, Eye, EyeOff, RotateCcw, ArrowRight, Upload, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Detection: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showBoxes, setShowBoxes] = useState(true);
  const [confidenceThreshold, setConfidenceThreshold] = useState(0.5);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setResults(null);
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPreview(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetect = async () => {
    if (!selectedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/detect`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Roboflow response:', data);
      setResults(data);
      drawDetections(data);
    } catch (error) {
      console.error('Detection failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const drawDetections = (data: any) => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || !data.predictions) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    canvas.style.width = img.clientWidth + 'px';
    canvas.style.height = img.clientHeight + 'px';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

    if (!showBoxes) return;

    const scaleX = img.naturalWidth / img.clientWidth;
    const scaleY = img.naturalHeight / img.clientHeight;
    const displayScaleX = img.clientWidth / img.naturalWidth;
    const displayScaleY = img.clientHeight / img.naturalHeight;

    data.predictions.forEach((pred: any) => {
      if (pred.confidence < confidenceThreshold) return;
      let x, y, w, h;
      if (pred.x !== undefined && pred.width !== undefined) {
        x = (pred.x - pred.width / 2) * displayScaleX;
        y = (pred.y - pred.height / 2) * displayScaleY;
        w = pred.width * displayScaleX;
        h = pred.height * displayScaleY;
      } else if (pred.bbox) {
        x = pred.bbox.x * displayScaleX;
        y = pred.bbox.y * displayScaleY;
        w = pred.bbox.width * displayScaleX;
        h = pred.bbox.height * displayScaleY;
      } else {
        return;
      }
      ctx.strokeStyle = '#5B8DB8';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, w, h);
      const label = pred.class || pred.class_name || 'obj';
      ctx.fillStyle = '#5B8DB8';
      ctx.fillRect(x, y - 20, w > 120 ? w : 120, 20);
      ctx.fillStyle = '#ffffff';
      ctx.font = '12px Inter';
      ctx.fillText(`${label} ${(pred.confidence * 100).toFixed(1)}%`, x + 4, y - 6);
    });
  };

  const handleThresholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfidenceThreshold(parseFloat(e.target.value));
    if (results) drawDetections(results);
  };

  const toggleBoxes = () => {
    setShowBoxes(!showBoxes);
    if (results) drawDetections(results);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">Microplastic Detection</h1>
          <p className="text-sm text-text-secondary">DETR-based automated particle detection via Roboflow.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Detection View</CardTitle>
              <CardDescription>Upload image and run DETR detection</CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col items-center justify-center h-[500px] bg-background-secondary rounded-lg border border-border-light overflow-hidden">
              {preview ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative inline-block max-w-full max-h-full">
                    <img
                      ref={imgRef}
                      src={preview}
                      alt="Preview"
                      className="max-w-full max-h-full object-contain block"
                      onLoad={() => results && drawDetections(results)}
                    />
                    <canvas ref={canvasRef} className="absolute top-0 left-0 pointer-events-none" style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Microscope size={64} className="text-text-muted mb-4 mx-auto" />
                  <p className="text-sm text-text-secondary mb-4">Upload a microscopy image to start detection</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button variant="primary" onClick={() => fileInputRef.current?.click()}>
                    <Upload size={16} className="mr-2" /> Choose Image
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="pt-4 flex flex-col gap-4">
              <div className="flex gap-2 flex-wrap">
                <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
                  <Upload size={14} className="mr-2" /> Upload New
                </Button>
                <Button variant="primary" size="sm" onClick={handleDetect} disabled={!selectedFile || loading}>
                  {loading ? (
                    <>
                      <Loader2 size={14} className="mr-2 animate-spin" /> Detecting...
                    </>
                  ) : (
                    <>
                      <Microscope size={14} className="mr-2" /> Run Detection
                    </>
                  )}
                </Button>
                <Button variant="secondary" size="sm" onClick={toggleBoxes} disabled={!results}>
                  {showBoxes ? <EyeOff size={14} className="mr-2" /> : <Eye size={14} className="mr-2" />}
                  {showBoxes ? 'Hide Boxes' : 'Show Boxes'}
                </Button>
                <Button variant="secondary" size="sm" onClick={() => window.location.reload()} disabled={!results}>
                  <RotateCcw size={14} className="mr-2" /> Reset
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card hover>
            <CardHeader>
              <CardTitle className="text-sm">Detection Summary</CardTitle>
              <CardDescription>Automated detection results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="text-3xl font-bold text-text-primary">
                  {results?.predictions?.length || 0}
                </div>
                <div className="text-sm text-text-secondary">Detected Particles</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Avg Confidence</span>
                  <span className="text-sm font-medium text-text-primary">
                    {results?.predictions?.length > 0
                      ? ((results.predictions.reduce((a: number, p: any) => a + p.confidence, 0) /
                          results.predictions.length) *
                          100).toFixed(1) + '%'
                      : '0%'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border-light/50">
                  <span className="text-sm text-text-secondary">Threshold</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={confidenceThreshold}
                      onChange={handleThresholdChange}
                      className="w-24 accent-accent-primary"
                    />
                    <span className="text-xs text-text-muted">{confidenceThreshold.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              {results?.predictions?.length > 0 && (
                <div className="mt-4 max-h-48 overflow-y-auto">
                  <p className="text-xs font-medium text-text-secondary mb-2">Detections:</p>
                  {results.predictions
                    .filter((p: any) => p.confidence >= confidenceThreshold)
                    .map((pred: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1">
                        <span className="text-text-primary">{pred.class}</span>
                        <span className="text-accent-primary">{(pred.confidence * 100).toFixed(1)}%</span>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full" disabled={!results} onClick={() => window.location.href = '/particle-analysis'}>
                Continue to Particle Analysis <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
