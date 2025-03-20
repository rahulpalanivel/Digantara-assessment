# Digantara-assessment

## Summary
- Designed and Developed API's to perform Binary Search, Quick Sort and Breath First Search.
- Added logging functions which stores the previous called API's in a MongoDB database.
- Added functions to retrieve all logs or specific logs by algorithm name.
- Implemented Error Handling techniques inorder to manage exceptions or invalid inputs. 
- Method of inputs are via HTTP requests and outputs are of clear structured HTTP response.
- Added Tests to ensure the server provides the desired outputs.
- Deployed the server on Render which can be accessed via: [Server Link](https://digantara-assessment.onrender.com/).


## Tech Stack

**Language:** JavaScript

**Framework:** Express, Node

**Database:** MongoDB

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)

## Getting Started

1. **Clone the repository:**

   ```bash
   https://github.com/rahulpalanivel/Digantara-assessment.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Digantara_Assessment
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up Database:**
   - (You can ignore this step if you want to use existing database which is hard-coded within the project)
   - Create a MongoDB database.
   - Add a MongoDB connection string in the dbconnection file.

5. **Start Backend:**

   ```bash
   npm start
   ```

## Accessing the API's
- You can use Postman or thunder client (VS code extentions) or any other API testing tool of your choice to call the API.

## Input Format



1. **Binary Search:**

   - Endpoint: (POST)
     
   ```bash
   /api/algorithm/binarySearch
   ```

   - Input Format:

   ```bash
   {
     "array":[1, 2, 3, 4, 5],
     "number": 1
   }
   ```
   
      
2. **Quick Sort:**

   - Endpoint: (POST)
     
   ```bash
   /api/algorithm/quickSort
   ```

   - Input Format:

   ```bash
   {
     "array":[5, 4, 3, 2, 1]
   }
   ```
   
3. **Breath First Search:**

   - Endpoint: (POST)
     
   ```bash
   /api/algorithm/breadthFirstSearch
   ```

   - Input Format:

   ```bash
   {
     "array":{"1":[2, 3], "2":[1], "3":[1]},
     "number": 3
   }
   ```

4. **All Logs**

   - Endpoint: (GET)
  
   ```bash
   /api/algorithm/logs
   ```

5. **Algorithm Specific Log**

   - Endpoint: (GET)
  
   ```bash
   /api/algorithm/logs?algorithmName={Name of the algorithm(Binary Search, Quick Sort, Breath First Search)}
   ```

Note: please ensure the correct names are used for the inputs i.e (array, number, Binary Search).

## Deployment
The backend server has also been deployed on Render.com, you can make use of the above endpoints to call the API.

   ```bash
   https://digantara-assessment.onrender.com
   ```
Note: Since the server is deployed on a free instance, it will spin-down incase of prolonged inactivity, and if a request is made after that it would take a few minutes to bring the instance back up.
