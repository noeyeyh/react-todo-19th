import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoList from './pages/ToDoList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}
