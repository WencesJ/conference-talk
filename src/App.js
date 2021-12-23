import React from "react";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./App.css";
import DarkButton from "./components/darkMode/DarkButton";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import TalkPage from "./pages/talkPage";
import AuthCheckRoute from "./authRoutes";

function App() {
  const [cookies] = useCookies(['ct-auth']);
  return (
    <div
      className='transition duration-500  
                     bg-white dark:bg-dark-900 '
    >
      <div className='bg-gray-200 dark:bg-dark-900 w-full'>
        <DarkButton />
      </div>

      <Routes>
          <Route exact path='/' element={<AuthCheckRoute cookies={cookies} />}>
            <Route exact path='/' element={<TalkPage />}/>
          </Route>
          <Route
             path="/login" 
             element={<Login />}
          />
          <Route
             path="/signup" 
             element={<SignUp />}
          />
          
          {/* <Route path='/conference' element={<TalkPage />} /> */}
        </Routes>
    </div>
  );
}

export default App;
