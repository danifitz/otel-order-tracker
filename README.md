# Order Tracker

## Run the demo

1. Go to https://<YOUR_TENANT>.grafana.net/connections/add-new-connection/open-telemetry and generate a new Alloy OTLP config
2. Create a new file `alloy/config.alloy` and copy the config from the step 5 in the UI into this file.
3.  `podman compose up --build` or `docker-compose up --build`
4. Access the frontend on `http://localhost:3000`
5. Access the Grafana Alloy UI on `http://localhost:5006`

## Learnings

1. Javascript - auto-instrumentation agent doesn't support logging or metrics (yet) - https://github.com/open-telemetry/opentelemetry-js/issues/4552

