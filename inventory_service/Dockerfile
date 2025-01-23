FROM openjdk:17-slim
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y maven
RUN mvn clean package

# Otel
RUN apt-get install -y wget
RUN wget https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar
ENV JAVA_TOOL_OPTIONS="-javaagent:opentelemetry-javaagent.jar"

CMD ["java", "-jar", "target/inventory-service-1.0-SNAPSHOT.jar"]