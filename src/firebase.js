import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqtjRDrpJud1tXmsRP7l8S4xzDE81dVUc",
  authDomain: "job-application-tracker01.firebaseapp.com",
  projectId: "job-application-tracker01",
  appId: "1:577522935223:web:2920f34db7e6ea91d73432"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);