import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.warn('Please enter an email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Connect to Express backend on port 3000
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Subscribed successfully!');
        setEmail('');
      } else {
        toast.error(data.error || 'Subscription failed.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      toast.error('Unable to connect to the backend server. Is it running on port 3000?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <span style={styles.title}>SIGN UP FOR OUR DAILY INSIDER</span>
      <form onSubmit={handleSubscribe} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          style={styles.input}
        />
        <button type="submit" disabled={isLoading} style={styles.button}>
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#eaeded',
    padding: '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    margin: '30px 0',
    borderRadius: '4px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '15px',
    letterSpacing: '0.5px',
    color: '#111',
  },
  form: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minWidth: '260px',
    fontSize: '14px',
  },
  button: {
    padding: '8px 18px',
    backgroundColor: '#131921',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default Newsletter;