import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * Sign Up Page
 * 
 * Seller account creation page.
 */

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock signup - redirect to verification
        navigate('/onboarding/verification');
    };

    return (
        <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">⚡</span>
                        </div>
                        <span className="text-3xl font-bold text-white">Bibbil</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white mb-2">Start Selling Today</h1>
                    <p className="text-neutral-200">Create your seller account</p>
                </div>

                {/* Sign Up Form */}
                <div className="bg-white rounded-xl shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            label="Email Address"
                            placeholder="you@example.com"
                            icon={Mail}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            fullWidth
                        />

                        <Input
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            placeholder="••••••••"
                            icon={Lock}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            fullWidth
                        />

                        <Input
                            type={showPassword ? 'text' : 'password'}
                            label="Confirm Password"
                            placeholder="••••••••"
                            icon={Lock}
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                            fullWidth
                        />

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={formData.agreeToTerms}
                                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-neutral-700">
                                I agree to the <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link>
                            </label>
                        </div>

                        <Button type="submit" variant="primary" size="lg" fullWidth>
                            Create Account
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-neutral-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-neutral-500">Or continue with</span>
                            </div>
                        </div>

                        <Button variant="outline" size="lg" fullWidth>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-neutral-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-primary-600 hover:underline font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
