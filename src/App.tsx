import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface SignUpFormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string
}

function App() {

  const [formData, setFormData] = useState<SignUpFormState>({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.error(error);
    }
  }

  console.log(formData);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
