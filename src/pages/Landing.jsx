import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, DollarSign, Users, TrendingUp, Shield, Truck, BarChart3, Check } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const Landing = () => {
    const features = [
        {
            icon: Play,
            title: 'Live Streaming',
            description: 'Broadcast live to thousands of engaged buyers worldwide.',
        },
        {
            icon: DollarSign,
            title: 'Real-Time Auctions',
            description: 'Run exciting auctions with instant bidding and countdown timers.',
        },
        {
            icon: TrendingUp,
            title: 'Grow Your Audience',
            description: 'Get discovered through personalized feeds and recommendations.',
        },
        {
            icon: Shield,
            title: 'Secure Payments',
            description: 'Fast, protected transactions with guaranteed payouts.',
        },
        {
            icon: Truck,
            title: 'Easy Shipping',
            description: 'Generate labels and track shipments in one place.',
        },
        {
            icon: BarChart3,
            title: 'Analytics Dashboard',
            description: 'Track your sales, viewers, and growth in real-time.',
        },
    ];

    const stats = [
        { value: '$2M+', label: 'Seller Earnings' },
        { value: '50K+', label: 'Live Shows' },
        { value: '10K+', label: 'Active Sellers' },
        { value: '98%', label: 'Satisfaction' },
    ];

    const steps = [
        { step: '01', title: 'Create Account', description: 'Sign up and verify your identity in minutes' },
        { step: '02', title: 'Set Up Store', description: 'Add your profile photo, bio, and store details' },
        { step: '03', title: 'Go Live', description: 'Start streaming and selling to buyers worldwide' },
        { step: '04', title: 'Get Paid', description: 'Receive automatic payouts to your bank account' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section - Clean Yellow/White */}
            <section className="bg-gradient-to-b from-amber-50 to-white pt-16 pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                            <span>Join 10,000+ successful sellers</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Turn your passion into a <span className="text-amber-500">thriving business</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Sell collectibles, sneakers, cards, and more through live streaming.
                            Build your community and grow your sales on Bibbil.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                            <Link to="/signup">
                                <Button variant="primary" size="lg">
                                    Start Selling Free
                                    <ArrowRight size={20} className="ml-2" />
                                </Button>
                            </Link>
                            <Link to="/how-it-works">
                                <Button variant="outline" size="lg">
                                    See How It Works
                                </Button>
                            </Link>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Everything you need to succeed
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Professional tools designed to help you sell more and grow your business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                                        <Icon className="text-amber-600" size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Start selling in 4 easy steps
                        </h2>
                        <p className="text-lg text-gray-600">
                            Get your store up and running in minutes, not days
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="text-6xl font-bold text-amber-100 mb-4">{item.step}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Why sellers choose Bibbil
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Join thousands of successful sellers who have built thriving businesses on our platform.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'No monthly fees - only pay when you sell',
                                    'Instant payouts to your bank account',
                                    'Built-in audience of engaged buyers',
                                    'Easy-to-use streaming tools',
                                    'Professional seller dashboard',
                                    '24/7 seller support',
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="text-green-600" size={14} />
                                        </div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/signup">
                                    <Button variant="primary" size="lg">
                                        Get Started
                                        <ArrowRight size={20} className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-12 text-center">
                            <div className="text-6xl font-bold text-amber-600 mb-4">$15,420</div>
                            <p className="text-gray-700 mb-2">Average monthly earnings</p>
                            <p className="text-sm text-gray-500">for top 10% of sellers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-amber-400">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Ready to start your selling journey?
                    </h2>
                    <p className="text-xl text-gray-800 mb-10">
                        Join thousands of sellers earning money doing what they love
                    </p>
                    <Link to="/signup">
                        <Button variant="secondary" size="lg">
                            Create Your Free Account
                            <ArrowRight size={20} className="ml-2" />
                        </Button>
                    </Link>
                    <p className="mt-6 text-gray-700 text-sm">
                        No credit card required • Free to join • Cancel anytime
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing;
