import React, { useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement authentication logic here
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <FaLock size={50} className="text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">Sign in</h2>
        </div>
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
            required
          />
          <input
            type="password"
            placeholder="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-600"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition duration-200"
          >
            Sign in
          </button>
        </form>
        <div className="flex justify-between text-sm text-indigo-600 mt-4">
          <a href="#" className="hover:underline">Forgot password?</a>
          <a href="#" className="hover:underline">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
