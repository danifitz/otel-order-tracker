FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

# OpenTelemetry
RUN opentelemetry-bootstrap -a install

CMD ["opentelemetry-instrument", "python", "app.py"]

