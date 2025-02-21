# 📰 Article Aggregation App  

This is a full-stack **Article Aggregation App** built with **Next.js** and **Express.js**.  
Users can select categories, and the backend fetches articles hourly from **Serper.dev** and **Google AI Studio API**.

## 🚀 Features
✅ User authentication (Signup/Login)  
✅ Fetches latest news articles every hour  
✅ Categories-based article filtering  
✅ Responsive UI  

## 📂 Project Structure
/article-aggregation-app
│── backend/ # Express.js backend
│── frontend/ # Next.js frontend
│── .gitignore
│── README.md
│── package.json
│── .env

markdown
Copy
Edit

## 🛠️ Tech Stack
- **Frontend:** Next.js, TailwindCSS  
- **Backend:** Express.js, MongoDB  
- **Database:** PostgreSQL (Neon.tech)  
- **APIs:** Serper.dev, Google AI Studio  
- **Auth:** JWT  

## 📦 Installation

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/Bikash-sharma-5/article-aggregation-app.git
cd article-aggregation-app
2️⃣ Install Dependencies
🔹 Backend
bash
Copy
Edit
cd backend
npm install
🔹 Frontend
bash
Copy
Edit
cd frontend
npm install
3️⃣ Set Up Environment Variables
Create a .env file inside the backend folder and add:

env
Copy
Edit
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SERPER_API_KEY=your_serper_api_key
GOOGLE_AI_API_KEY=your_google_ai_api_key
4️⃣ Run the Project
🟢 Start the Backend
bash
Copy
Edit
cd backend
npm start
🟢 Start the Frontend
bash
Copy
Edit
cd frontend
npm run dev
📌 API Endpoints
🔹 User Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user
🔹 Articles
Method	Endpoint	Description
GET	/api/articles/:userId	Get articles by category
🛠️ Deployment
Frontend: Vercel
Backend: Render.com
📜 License
This project is licensed under the MIT License.

🎯 Contributing
Feel free to contribute! Open an issue or submit a pull request. 🚀

Made with ❤️ by Bikash Sharma
