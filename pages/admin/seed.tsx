import { useState } from 'react';
import type { NextPage } from 'next';

const AdminSeedPage: NextPage = () => {
  const [seedKey, setSeedKey] = useState('default-seed-key-2024');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleSeed = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError('');

    try {
      const response = await fetch('/api/seed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seedKey: seedKey
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setResult(data);
      } else {
        setError(`Error: ${data.message || 'Seeding failed'}`);
      }
    } catch (err) {
      setError(`Network Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
    
    setIsLoading(false);
  };

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      background: '#f8f9fa'
    }}>
      <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          color: '#f43f5e',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          🌱 Seed Production Database
        </h1>
        
        <div style={{
          background: '#e7f3ff',
          color: '#0c5460',
          border: '1px solid #b8daff',
          marginBottom: '20px',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <strong>Instructions:</strong>
          <ol>
            <li>Make sure your Vercel environment variables are set</li>
            <li>Enter your seed key</li>
            <li>Click "Seed Database"</li>
            <li>Wait for the success message</li>
          </ol>
        </div>

        <form onSubmit={handleSeed}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '5px', 
              fontWeight: '500' 
            }}>
              Seed Key:
            </label>
            <input
              type="text"
              value={seedKey}
              onChange={(e) => setSeedKey(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: isLoading ? '#ccc' : '#f43f5e',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              width: '100%',
              marginTop: '10px'
            }}
          >
            {isLoading ? 'Seeding...' : 'Seed Database'}
          </button>
        </form>

        {result && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            borderRadius: '5px',
            background: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb'
          }}>
            <strong>✅ Success!</strong> Database seeded successfully!<br/>
            <pre style={{
              background: '#f8f9fa',
              padding: '10px',
              borderRadius: '5px',
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              fontSize: '14px',
              marginTop: '10px'
            }}>
              {JSON.stringify(result, null, 2)}
            </pre>
            <p><strong>You can now log in to the admin panel:</strong></p>
            <p>URL: <a href="/admin" target="_blank">/admin</a></p>
            <p>Email: <code>{result.admin?.email || 'admin@balloond.com'}</code></p>
            <p>Password: <code>Use your ADMIN_PASSWORD env var or "admin123"</code></p>
          </div>
        )}

        {error && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            borderRadius: '5px',
            background: '#f8d7da',
            color: '#721c24',
            border: '1px solid #f5c6cb'
          }}>
            <strong>❌ {error}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSeedPage;
