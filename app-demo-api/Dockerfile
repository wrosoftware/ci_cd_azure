FROM openjdk:17.0.1-jdk-slim
WORKDIR /app
COPY /app-demo-api/target/*.jar ./app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
