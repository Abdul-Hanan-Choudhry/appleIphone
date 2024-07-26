import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://76e461e1536f38b39677acfd68afa89e@o4507656418689024.ingest.us.sentry.io/4507656420851712",
  integrations: [
    Sentry.browserTracingIntegration(),
  //  Sentry.metrics.metricsAggregatedIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect : React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
 
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
