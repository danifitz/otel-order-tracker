FROM grafana/k6:latest

WORKDIR /app
COPY test.js .

ENTRYPOINT ["k6", "run", "test.js"]

