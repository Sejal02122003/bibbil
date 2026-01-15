import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';

const Verification = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        idDocument: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, idDocument: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/onboarding/profile-setup');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Zap className="text-blue-900" size={28} />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Identity</h1>
                    <p className="text-gray-600">We need to verify your identity to keep Bibbil safe and secure</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <CheckCircle size={20} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Account</span>
                    </div>
                    <div className="w-12 h-0.5 bg-yellow-500"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                            2
                        </div>
                        <span className="text-sm font-medium text-gray-900">Verification</span>
                    </div>
                    <div className="w-12 h-0.5 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                            3
                        </div>
                        <span className="text-sm font-medium text-gray-500">Profile</span>
                    </div>
                </div>

                {/* Form */}
                <Card padding="lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                label="Full Legal Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                            <Input
                                label="Phone Number"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>

                        <Input
                            label="Street Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            placeholder="123 Main Street"
                        />

                        <div className="grid md:grid-cols-3 gap-6">
                            <Input
                                label="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                placeholder="New York"
                            />
                            <Input
                                label="State"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                                placeholder="NY"
                            />
                            <Input
                                label="ZIP Code"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                                placeholder="10001"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Government-Issued ID
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-500 transition-colors">
                                <input
                                    type="file"
                                    id="idDocument"
                                    onChange={handleFileChange}
                                    accept="image/*,.pdf"
                                    className="hidden"
                                />
                                <label htmlFor="idDocument" className="cursor-pointer">
                                    <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                                    <p className="text-gray-700 font-medium mb-1">
                                        {formData.idDocument ? formData.idDocument.name : 'Click to upload'}
                                    </p>
                                    <p className="text-sm text-gray-500">Driver's License, Passport, or State ID</p>
                                </label>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Why we need this:</strong> Identity verification helps us maintain a trusted marketplace
                                and comply with regulations. Your information is encrypted and secure.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Button type="button" variant="ghost" onClick={() => navigate('/signup')} className="flex-1">
                                Back
                            </Button>
                            <Button type="submit" variant="primary" className="flex-1">
                                Continue
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Verification;
