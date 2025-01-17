FROM openjdk:17-slim
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y maven
RUN mvn clean package
CMD ["java", "-jar", "target/inventory-service-1.0-SNAPSHOT.jar"]