import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input, { Textarea } from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const ProfileSetup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        displayName: '',
        storeName: '',
        bio: '',
        category: '',
        profilePhoto: null,
    });

    const categories = ['Sneakers', 'Trading Cards', 'Fashion', 'Collectibles', 'Electronics', 'Art', 'Other'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, profilePhoto: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/onboarding/welcome');
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Set Up Your Profile</h1>
                    <p className="text-gray-600">Tell buyers about yourself and what you sell</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <CheckCircle size={20} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Account</span>
                    </div>
                    <div className="w-12 h-0.5 bg-green-500"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <CheckCircle size={20} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Verification</span>
                    </div>
                    <div className="w-12 h-0.5 bg-yellow-500"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                            3
                        </div>
                        <span className="text-sm font-medium text-gray-900">Profile</span>
                    </div>
                </div>

                {/* Form */}
                <Card padding="lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Profile Photo */}
                        <div className="text-center">
                            <label className="block text-sm font-medium text-gray-700 mb-4">Profile Photo</label>
                            <div className="inline-block relative">
                                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-4xl font-bold text-blue-900 mb-4">
                                    {formData.profilePhoto ? (
                                        <img src={URL.createObjectURL(formData.profilePhoto)} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        'JD'
                                    )}
                                </div>
                                <input
                                    type="file"
                                    id="profilePhoto"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="profilePhoto"
                                    className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-600 shadow-lg"
                                >
                                    <Upload size={20} className="text-white" />
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Input
                                label="Display Name"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                helperText="This is how buyers will see you"
                            />
                            <Input
                                label="Store Name"
                                name="storeName"
                                value={formData.storeName}
                                onChange={handleChange}
                                required
                                placeholder="John's Sneaker Shop"
                                helperText="Your store's unique name"
                            />
                        </div>

                        <Textarea
                            label="Bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell buyers about yourself, your expertise, and what makes your store special..."
                            helperText="Share your story and build trust with buyers"
                        />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Primary Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none"
                            >
                                <option value="">Select a category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-4">
                            <Button type="button" variant="ghost" onClick={() => navigate('/onboarding/verification')} className="flex-1">
                                Back
                            </Button>
                            <Button type="submit" variant="primary" className="flex-1">
                                Complete Setup
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default ProfileSetup;
