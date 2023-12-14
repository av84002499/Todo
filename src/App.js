import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <div>
      <Routes>
        <Route key="Login" path="/" element={<Login />} />
        <Route key="register" path="/register" element={<Registration />} />
        <Route key="Todo" path="/Todo" element={<Todo />} />
        <Route key="Login" path="/Login" element={<Login />} />


        </Routes>
    </div>
  );
};

export default App;
