import React from 'react';
import './App.css';
//Import react router dom
import { Route, Routes } from 'react-router-dom';
//Import component
import HomePage from './pages/homePage/HomPage';
import MemberPage from './pages/memberPage/MemberPage';
//Import interface
import { MemberProps } from './utils/interface';

const App: React.FC = () => {
  const loginPageInfo: MemberProps = {
    title: "Login",
    text: "Already have an account?",
  };

  const signUpInfo: MemberProps = {
    title: "Sign Up",
    text: "Click here to login",
  };

  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<MemberPage title={loginPageInfo.title} text={loginPageInfo.text} />}></Route>
          <Route path="/signUp" element={<MemberPage title={signUpInfo.title} text={signUpInfo.text} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
