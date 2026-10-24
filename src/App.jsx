import React from 'react';
import Newsletter from './components/Newsletter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <h2>DEV@Deakin</h2>
      </header>

      <main style={{ padding: '20px', minHeight: '60vh' }}>
        <Newsletter />
      </main>

      <ToastContainer position="bottom-right" autoClose={4000} />
    </div>
  );
}

export default App;