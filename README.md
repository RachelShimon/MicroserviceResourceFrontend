# Microservice and Resource Dependency Graph
This project visualizes dependencies between microservices and resources using React.js and React Flow. The microservices and resources are displayed as nodes in a graph, with different icons representing the language of the microservices and the access type and type of the resources. The data for the microservices and resources are fetched from a backend REST API.

# Project Description
This project includes:

1. A backend REST API developed using Java Spring Boot that exposes endpoints to retrieve lists of microservices and resources.
2. A frontend application developed using React.js to visualize the microservices and resources in a graph format using React Flow.
3. Each microservice is represented by a circle with an icon indicating its programming language (Java, Python, C#).
4. Each resource is represented by a rectangle with icons indicating its type (e.g., AWS S3) and access level (public, private).
# Technologies Used
## Backend
- Java Spring Boot
- Spring Web

## Frontend
- React.js
- React Flow (for rendering the graph)
- Axios (for API requests)
##Icons
- Custom icons for programming languages (Java, Python, C#)
- Custom icons for resource types and access levels
# Project Structure
## Backend
The backend exposes two endpoints:

GET /microservices: Returns a list of microservices.
GET /resources: Returns a list of resources.
## Frontend
The frontend visualizes the data in a graph format:

- Nodes represent microservices and resources.
- Edges represent the dependencies between microservices and resources.
# Installation and Setup
### Backend

1. **Clone the repository:**
  ```sh
   git clone https://github.com/RachelShimon/MicroserviceResourceBackend.git
   cd microservice-resource-graph/backend
   ```
   
2. **Build the project:**

 ```sh
./gradlew clean build
```
3. **Run the application :**


 ```sh
./gradlew bootRun
```
The backend server will start on http://localhost:8080.

### Frontend
1. Navigate to the frontend directory:

```sh
cd ../MicroserviceResourceFrontend

```
2. Install the dependencies:

```sh
npm install
```
3. Start the frontend application:

 ```sh
 npm start
 ```
The frontend application will start on http://localhost:3000.


 ## Project Structure

```sh

├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── MicroserviceNode.jsx
│   │   │   ├── ResourceNode.jsx
│   │   │   └── App.jsx
│   │   ├── icons/
│   │   └── App.css
│   ├── package.json
│   └── README.md
└── README.md
```

