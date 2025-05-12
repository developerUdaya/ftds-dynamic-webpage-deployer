import React, { useEffect, useRef, useState } from 'react';
import { User, Lock, Mail, Phone, Loader2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../url'
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  mobile: string;
}

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    mobile: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const [otpErrorMessage, setOtpErrorMessage] = useState('');
  const [optLoader, setOtpLoader] = useState(false);
  const inputsRef = useRef<HTMLInputElement[]>([]);


  useEffect(() => {
    if (showModal && timer > 0) {
      const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [showModal, timer]);

  const handleOtpChange = (val: string, idx: number) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 5) inputsRef.current[idx + 1]?.focus();
  };


  const handleBackspace = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.post(url.signUp, formData);
      if (response) {
        setShowModal(true);
        setTimer(60);
        setOtp(Array(6).fill(''));
        setTimeout(() => inputsRef.current[0]?.focus(), 100);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.msg ||
        error?.msg ||
        'Something went wrong. Please try again.';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setOtpLoader(true);
    setOtpErrorMessage('');
    const finalOtp = otp.join('');
    if (finalOtp.length === 6) {
      try {
        const sendOtp = await axios.post(url.signupOtpVerify, { ...formData, otp: finalOtp });
        if (sendOtp?.data) {
          localStorage.setItem('token', sendOtp?.data?.result?.tokens?.accessToken);
          navigate('/chooseTheme');
          setOtpLoader(false);
          setShowModal(false);
        }
      } catch (error: any) {
        console.log(error)
        const errMsg =
          error?.response?.data?.msg || 'Failed to verify OTP. Please try again.';
        setOtpErrorMessage(errMsg);
        setOtpLoader(false);
      }
    } else {
      setOtpLoader(false);
      setOtpErrorMessage('Please enter a valid 6-digit OTP.');
    }
  };

  const sendOtpToEmail = async () => {
    setErrorMessage('');
    try {
      const resendOtp = await axios.post(url.signUp, formData)
      if (resendOtp?.data) {
        setTimer(60);
        setOtp(Array(6).fill(''));
      } else {
        setErrorMessage("You're not a registered user. Please create an account.");
      }
    } catch (error: any) {
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  console.log(otp)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">

            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Create Account</h2>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={20} />
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
                    <Phone size={20} />
                  </div>
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="mobile"
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
              >
                {loading ? 'Loading...' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* OTP Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <h2 className="text-lg font-bold text-center mb-2">Enter OTP</h2>
            <p className="text-sm text-gray-600 text-center mb-4">
              We sent a 6-digit OTP to <strong>{formData?.email}</strong>
            </p>

            <div className="flex justify-center gap-2 mb-4">
              {otp.map((val, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  value={val}
                  ref={(el) => {
                    if (el) inputsRef.current[idx] = el;
                  }}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  onKeyDown={(e) => handleBackspace(e, idx)}
                  className="w-10 h-12 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <div className="text-center text-sm text-gray-500 mb-4">
              {timer === 0 ? (
                <>
                  <span className="cursor-pointer text-blue-400 font-bold" onClick={sendOtpToEmail}>Resend</span>
                </>
              ) : (
                <>
                  Resend: <span className="font-semibold"
                  // onClick={handleEmailSubmit}
                  >{timer} s</span>
                </>
              )}
            </div>
            {otpErrorMessage && (
              <p className="text-sm text-red-600 text-center mb-4">{otpErrorMessage}</p>
            )}

            <div className="flex justify-between">
              <button
                onClick={handleOtpSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={optLoader || otp.length !== 6 || !otp.every(d => d.trim() !== '')}
              >
                <div className="flex gap-2 justify-center items-center">
                  Verify OTP
                  {optLoader && <Loader2 className="animate-spin" />}
                </div>
              </button>

            </div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;