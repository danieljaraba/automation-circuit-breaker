# Use an official Maven image as the base image
FROM maven:3.9.6-amazoncorretto-17 AS build
# Set the working directory in the container
COPY . /app
WORKDIR /app
# Copy the pom.xml and the project files to the container
# Build the application using Maven
RUN mvn clean package -DskipTests

# Use an official OpenJDK image as the base image
FROM amazoncorretto:17
# Set the working directory in the container
WORKDIR /app
# Copy the built JAR file from the previous stage to the container
COPY --from=build /app/target/circuitbreaker-resilience4j-0.0.1-SNAPSHOT.jar ./my-application.jar
# Set the command to run the application
CMD ["java", "-jar", "my-application.jar"]