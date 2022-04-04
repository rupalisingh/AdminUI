import './App.css';
import React from 'react';
import Main from './components/Main';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Main/>
    </AuthProvider>
  );
}

export default App;
