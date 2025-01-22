# Backend  

## Overview  

This project serves as the backend for a web application. It is built using **Node.js** and **Express**, with **MongoDB** as the database.includes essential features like environment variable management and CORS support.  

---

## Table of Contents  

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
  - [Clone the Repository](#clone-the-repository)  
  - [Install Dependencies](#install-dependencies)  
  - [Set Up Environment Variables](#set-up-environment-variables)  
  - [Start the Server](#start-the-server)  
- [Dependencies](#dependencies)  
- [Configuration](#configuration)  
- [License](#license)  

---

## Features  

- **Express server setup** for handling HTTP requests.  
- **MongoDB integration** using Mongoose for schema and database operations.  
- **Cross-Origin Resource Sharing (CORS)** enabled for secure API access.  
- **Environment variable management** via dotenv.  

---

## Prerequisites  

Ensure you have the following installed on your system:  

- **Node.js** (v14 or higher)  
- **npm** (v6 or higher)  
- **MongoDB**  

---

## Installation  

Follow the steps below to set up and run the project locally:  

### 1. Clone the Repository  

Clone the repository to your local machine and navigate to the project directory:  

```bash  
git clone <repository-url>  
cd backend  
```  

### 2. Install Dependencies  

Install the required dependencies using npm:  

```bash  
npm install  
```  

### 3. Set Up Environment Variables  

Create a `.env` file in the root of the project and add the following configuration:  

```env  
PORT=5000  
MONGO_URI=<Your MongoDB connection string>  
```  

### 4. Start the Server  

Run the application in development mode:  

```bash  
npm start  
```  

The server will be accessible at `http://localhost:5000` by default.  

---

## Dependencies  

The project utilizes the following main dependencies:  

- **express**: Web server framework.  
- **mongoose**: MongoDB ODM for database operations.   
- **dotenv**: For managing environment variables.  
- **cors**: Enables Cross-Origin Resource Sharing.  

---

## Configuration  

- **Port**: Configurable via the `PORT` environment variable in the `.env` file.  
- **Database**: Set the `MONGO_URI` environment variable to your MongoDB connection string.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  
