import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Grafana frontend o11y
import { createRoutesFromChildren, matchRoutes, Routes, useLocation, useNavigationType } from 'react-router-dom';
import { createReactRouterV6Options, getWebInstrumentations, initializeFaro, ReactIntegration } from '@grafana/faro-react';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

initializeFaro({
  url: 'https://faro-collector-prod-eu-west-2.grafana.net/collect/39b41a31e6863ee9a30075c864748e19',
  app: {
    name: 'frontend_service',
    version: '1.0.0',
    environment: 'production'
  },
  
  instrumentations: [
    // Mandatory, omits default instrumentations otherwise.
    ...getWebInstrumentations(),

    // Tracing package to get end-to-end visibility for HTTP requests.
    new TracingInstrumentation(),

    // React integration for React applications.
     new ReactIntegration({
      router: createReactRouterV6Options({
        createRoutesFromChildren,
        matchRoutes,
        Routes,
        useLocation,
        useNavigationType,
      }),
    }),
  ],
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);