# MicroVision-XAI

MicroVision-XAI is a proposed research and analysis platform for detecting and characterizing microplastic particles in water sample images. It combines a web interface, an image detection workflow intended to use a Roboflow hosted DETR model, and planned analysis and explainability features.

> **Project status: approximately 30–40% prepared.** This repository is an early college final year project prototype, not a finished or validated product. The interface and feature flow are substantially scaffolded, and there is an initial backend-to-Roboflow request path. Much of the displayed data is mock/demo data; the end-to-end scientific workflow, data storage, validation, and several backend integrations remain to be built. Percent complete is an approximate project estimate, not a measured implementation metric.

## Project goals

The project aims to help a researcher move from a water sample and its microscope images to a documented, interpretable assessment:

1. Record sample collection metadata and upload microscopy images.
2. Check and preprocess images for analysis.
3. Detect candidate microplastic particles and review model predictions.
4. Summarize particle characteristics and estimate concentration using sample volume.
5. Explain model predictions, assess possible risk, and present suggested follow-up actions.
6. Compare samples, retain analysis history, evaluate model performance, and prepare reports.

These are intended capabilities. The presence of a screen or mock data does not mean the corresponding scientific or persistence workflow is complete.

## Current implementation

### Frontend

The `microvision-xai/` directory contains a React 19, TypeScript, and Vite single-page application. React Router exposes these screens:

| Area | Screens | Current role |
| --- | --- | --- |
| Entry and account UI | Landing, Login, Register | Initial public-facing and account screens; authentication is not connected to an identity service. |
| Overview and samples | Dashboard, Water Samples, Image Analysis | Dashboard and sample/image workflow views, currently driven primarily by local mock data. |
| Image preparation | Image Quality, Preprocessing | UI for the intended quality review and preprocessing stages; production image-processing pipeline is not implemented here. |
| Model inference | Detection, Detection Results | Upload an image and request predictions from the backend; display detections and confidence filtering. |
| Analysis | Particle Analysis, Concentration, XAI Analysis | Present particle summaries, concentration estimates, and explanation examples; current summaries/explanations include mock data. |
| Decisions and review | Risk Assessment, Precautions, Corrective Measures, Compare Samples | Present intended downstream interpretation and sample comparison workflows using prototype data. |
| Operations and reporting | History, Reports, Model Performance, Settings, Profile | Prototype history, report configuration, metrics, and user settings/profile screens. |

Shared layout components, basic UI primitives, TypeScript data types, and example datasets are in `microvision-xai/src/`. The example data is defined in `microvision-xai/src/data/mockData.ts`; values such as sample counts, confidence, risk scores, and model metrics are illustrative and must not be treated as measured study results.

### Backend and current detection path

The `backend/` directory contains a small Express service. `POST /api/detect` accepts one multipart image field named `image`, holds it in memory with Multer, converts it to base64, and forwards it to Roboflow's hosted detection endpoint. The frontend detection page sends the selected image to this route and draws returned prediction boxes over the preview.

Configuration is read from the backend process environment. The example names are in `backend/.env.example`; copy it to `backend/.env` and fill in the Roboflow settings before trying a real request. Keep the API key on the server and out of frontend source control. `VITE_API_URL` can be set for the frontend to point at the backend; otherwise it uses `http://localhost:5000`.

The forwarding code is an initial integration scaffold, not a complete production API. It does not yet validate image type/size, robustly handle upstream errors or timeouts, normalize every possible prediction response, or protect the endpoint with authentication/rate limits. Configure and verify the exact Roboflow model identifier and version for your project before relying on it. `ROBOFLOW_WORKFLOW_ID` appears in the sample environment but is not currently used by `server.js`.

## Planned Roboflow DETR model integration

The Detection screen is designed around a hosted object-detection model in Roboflow. The intended model is a **DETR (DEtection TRansformer)** detector trained or fine-tuned for the project's microplastic image classes. DETR is an object-detection architecture that predicts object classes and bounding boxes using a transformer-based set prediction approach. In this project, the model's role is to propose candidate particle locations and classes from microscopy images; it does not by itself prove that a particle is plastic, identify polymer chemistry, or establish water safety.

The intended inference flow is:

1. A user chooses a microscopy image in the Detection page.
2. The browser uploads it as multipart form data to `POST /api/detect` on the Express backend.
3. The backend reads the image and sends it to the configured Roboflow hosted model endpoint using a server-side API key.
4. Roboflow returns predictions (expected to include class, confidence, and box coordinates).
5. The UI overlays boxes and labels, reports the returned prediction count and confidence, and lets the user adjust a confidence threshold.

The project still needs the final Roboflow workspace/project/model/version values, confirmed class taxonomy, trained and evaluated model, representative labeled dataset, and a verified agreement between Roboflow's response format and the frontend overlay. DETR is the intended model family; actual model identity, training details, dataset, and performance must be documented from the eventual Roboflow project rather than inferred from the UI. Do not present placeholder values or the mock performance dashboard as actual model results.

## Remaining project work

The following work is needed to turn the prepared prototype into a defensible final year project. Prioritize the scientific dataset and evaluation alongside product implementation.

### 1. Define the study and dataset

- Specify the research question, target particle definition, size range, water sample protocol, and image acquisition setup.
- Decide the label taxonomy (for example, particle classes such as fiber, fragment, film, and bead only if supported by the study protocol) and annotation rules.
- Collect representative microscope images with appropriate permissions and provenance; annotate bounding boxes and classes, and document inter-annotator review.
- Split data at the sample/site or acquisition-session level into train, validation, and held-out test sets to reduce leakage between near-duplicate images.
- Record staining, magnification, scale calibration, filtration, sample volume, and relevant environmental metadata.

### 2. Train and validate the detector

- Create/configure the Roboflow project and dataset version, train or select the DETR model, and record the exact model/version and training configuration.
- Verify preprocessing, image dimensions, class mapping, coordinate conventions, confidence values, and endpoint behavior with known examples.
- Evaluate on held-out annotated images. Report per-class precision/recall, mAP at declared IoU thresholds, confidence calibration where useful, inference latency, and failure cases.
- Compare against a suitable baseline and, where practical, human annotation or laboratory confirmation. Include limitations for small, overlapping, low-contrast, or ambiguous particles.
- Replace sample numbers in the model performance UI with measured results and state the evaluation split and metric definitions.

### 3. Complete the end-to-end image workflow

- Implement upload validation, image metadata capture, quality checks, and reproducible preprocessing while retaining the original image.
- Define how users review, correct, accept, or reject predictions and how those corrections are tracked.
- Handle Roboflow errors, timeouts, unavailable models, invalid files, and empty predictions with useful UI feedback.
- Ensure overlays use the exact returned coordinate convention and remain aligned across image scaling, resizing, and different aspect ratios.

### 4. Build meaningful analysis and explainability

- Define a transparent particle measurement method and calibrate pixels to micrometres using image scale metadata; bounding-box dimensions alone are not calibrated physical size.
- Calculate count and concentration from reviewed detections and documented sample volume, dilution, recovery efficiency, and image coverage. Clearly describe assumptions and uncertainty.
- Decide what particle attributes can actually be measured from images. Fluorescence and shape values in the prototype are examples, not derived values.
- Implement explainability compatible with the deployed detector. DETR attention visualization or other attribution methods need to be technically validated; the current Grad-CAM text is mock content and Grad-CAM cannot be assumed to apply directly to every model endpoint.
- Validate risk categories, precautions, and corrective measures with appropriate scientific/domain guidance. Clearly label these as decision support, not regulatory or health advice.

### 5. Add persistence, users, and reporting

- Design a database and API for users, samples, images, inference runs, reviewed detections, results, and audit metadata.
- Implement real authentication/authorization if multi-user access is in scope; the current login/register/profile views do not provide it.
- Persist analysis history and make comparisons use stored, compatible measurements.
- Generate downloadable reports from saved results with methods, model/version, units, provenance, uncertainty, and selected sections. The current report controls are UI scaffolding.
- Add settings backed by real configuration and define retention/deletion behavior for uploaded images and credentials.

### 6. Deployment, security, and project validation

- Add backend input limits, file validation, rate limiting, access control as appropriate, safe error handling, logging without secrets, and secure secret management.
- Configure production CORS, HTTPS, deployment environments, and frontend/backend URLs.
- Add automated checks and end-to-end validation for upload, detection, coordinate rendering, analysis calculations, and report generation.
- Conduct usability review with intended users; document known limitations, reproducibility steps, ethics/privacy considerations, and future extensions.

## Technology stack

- **Frontend:** React 19, TypeScript, Vite, React Router, Tailwind CSS, Lucide React, Recharts.
- **Backend:** Node.js, Express, Multer (in-memory upload), CORS, dotenv, node-fetch.
- **Inference service (planned/partially wired):** Roboflow hosted object detection using the project's DETR model.
- **Persistence:** Not implemented yet; frontend prototype data is local/static.

## Run locally

Requirements: a current Node.js installation with npm. Install dependencies separately for the frontend and backend.

### Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env` with the Roboflow API key, model URL/project identifier, and version appropriate to the configured hosted model. Then start the API:

```bash
npm run dev
```

The server defaults to `http://localhost:5000`. `npm start` runs it without nodemon.

### Frontend

In another terminal:

```bash
cd microvision-xai
npm install
npm run dev
```

Open the local URL printed by Vite. If the backend is hosted elsewhere, create `microvision-xai/.env` with:

```dotenv
VITE_API_URL=http://localhost:5000
```

The browser detection flow requires a reachable backend and valid Roboflow configuration. Other prototype views may render from mock data without those services. Frontend scripts also include `npm run build`, `npm run lint`, and `npm run preview`.

## Environment variables

| Variable | Used by | Purpose |
| --- | --- | --- |
| `PORT` | Backend | API listening port; defaults to `5000`. |
| `ROBOFLOW_API_KEY` | Backend | Secret key for hosted inference; keep server-side. |
| `ROBOFLOW_MODEL_URL` | Backend | Roboflow model identifier/path used to construct the hosted detection URL. |
| `ROBOFLOW_VERSION` | Backend | Hosted model version. |
| `ROBOFLOW_PROJECT` | Backend | Project identifier fallback used by the current URL construction. |
| `ROBOFLOW_WORKFLOW_ID` | Example only | Present in `.env.example` for a possible future workflow integration; currently unused in backend code. |
| `VITE_API_URL` | Frontend | Base URL for the Express API; defaults to `http://localhost:5000`. |

Check the backend URL construction against the actual Roboflow deployment format before use; the code currently supports model URL/version combinations and a project/version fallback.

## Repository layout

```text
.
├── README.md
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── microvision-xai/
    ├── package.json
    └── src/
        ├── components/      # Shared layout and UI components
        ├── data/            # Prototype/mock datasets
        ├── pages/           # Routed application screens
        └── types/           # TypeScript domain interfaces
```

## Research and interpretation notes

- Treat all current mock records, risk scores, recommendations, detection examples, and displayed performance metrics as illustrative placeholders.
- A model prediction is a candidate visual detection, not a laboratory-confirmed microplastic identification. Establish ground truth with the study's chosen validation method.
- Concentration requires a documented sampling and imaging protocol; a raw count in an image is not automatically particles per litre.
- Document model version, dataset version, preprocessing, thresholds, and evaluation protocol so results can be reproduced.
- This prototype is for academic development and evaluation. It is not currently validated for operational environmental, regulatory, or health decisions.

## License and attribution

No project license or third-party model/dataset attribution has been added yet. Add the chosen license and credit the Roboflow model, training data, libraries, and other assets according to their terms before public distribution.
