import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import url from '../url'

interface LoginFormData {
  email: string;
  password: string;
}

function Login({ onAuthChange }: { onAuthChange: () => void }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(url.signIn, formData)
  //     console.log(response.data?.result?.tokens?.accessToken);
  //     if (response) {
  //       localStorage.setItem('token', response.data?.result?.tokens?.accessToken);
  //       onAuthChange();
  //       console.log('Login Form Data:', formData);
  //       navigate('/chooseTheme');
  //       setLoading(true);
  //     }

  //   } catch (error) {
  //     setLoading(false);

  //   }

  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post(url.signIn, formData);
      const token = response.data?.result?.tokens?.accessToken;

      if (token) {
        localStorage.setItem('token', token);
        onAuthChange();
        console.log('Login Form Data:', formData);
        navigate('/chooseTheme');
      }

    } catch (error: any) {
      const message =
        error?.response?.data?.msg ||
        error?.msg ||
        'Login failed. Please try again.';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">

          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            {errorMessage && (
              <div style={{ color: 'red', marginBottom: '1rem' }}>
                {errorMessage}
              </div>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >{loading ? 'Loading...' : 'Sign In'}
            </button>
          </form>
          <div className="text-blue-600  flex mt-2 justify-center cursor-pointer" 
          onClick={()=>navigate('/forgot-password')}
          >
                Forgot Password
              </div>
          <div className="text-center mt-2">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;