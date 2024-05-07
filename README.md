# Timestamp Microservice

Timestamp Microservice is a simple web application that allows users to convert between UNIX timestamps and UTC dates. This project is implemented using Node.js, Express, and styled with CSS.

## Features ✨

- Convert a YYYY-MM-DD date or a UNIX timestamp to its corresponding timestamp.
- Clean and straightforward user interface.
- Responsive design for optimal viewing experience on various devices.

## How to Use 🚀

1. Visit the application's homepage.
2. Provide a YYYY-MM-DD date or a UNIX timestamp by accessing the `/api` endpoint.
3. Upon accessing the endpoint with the date parameter, you'll receive a JSON object containing the corresponding UNIX timestamp and UTC date.

## Usage Examples 📝

- To convert a specific date:
  - [https://timestamp-project.vercel.app/api/2015-12-25](https://timestamp-project.vercel.app/api/2015-12-25)
- To convert a UNIX timestamp:
  - [https://timestamp-project.vercel.app/api/1451001600000](https://timestamp-project.vercel.app/api/1451001600000)

## Example Output 📄

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

## Installation and Setup 🛠️

1. Clone this repository:

git clone https://github.com/your-username/timestamp-microservice.git

2.Install dependencies:

npm install

3. Start the server:

npm start

4. Access the application at http://localhost:3000.

## Dependencies 📦
- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- CORS: Middleware for enabling Cross-Origin Resource Sharing in Express.js.

License 📄
This project is licensed under the MIT License.

Deploy 🙌
https://timestamp-project.vercel.app
