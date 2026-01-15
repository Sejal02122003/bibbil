import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Gavel, ShoppingBag, TrendingUp, Shield, Zap, Users, DollarSign, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Landing Page
 * 
 * Main landing page for seller recruitment with hero, features, how it works, and testimonials.
 */

const Landing = () => {
    const features = [
        {
            icon: Video,
            title: 'Live Stream Selling',
            description: 'Go live and sell in real-time. Connect with buyers through interactive video streams.',
        },
        {
            icon: Gavel,
            title: 'Live Auctions',
            description: 'Create exciting auctions with real-time bidding, countdown timers, and instant winners.',
        },
        {
            icon: ShoppingBag,
            title: 'Buy-Now Marketplace',
            description: 'List products at fixed prices. Sell even when you\'re offline.',
        },
        {
            icon: DollarSign,
            title: 'Secure Payments',
            description: 'Get paid fast with automatic payouts and multiple payment methods.',
        },
        {
            icon: Package,
            title: 'Easy Shipping',
            description: 'Generate shipping labels, track orders, and manage deliveries effortlessly.',
        },
        {
            icon: TrendingUp,
            title: 'Marketing Tools',
            description: 'Get discovered through trending feeds, categories, and personalized recommendations.',
        },
    ];

    const steps = [
        {
            number: '01',
            title: 'Create Account',
            description: 'Sign up and verify your identity to start selling on Bibbil.',
        },
        {
            number: '02',
            title: 'Set Up Profile',
            description: 'Build your seller profile with photos, bio, and categories.',
        },
        {
            number: '03',
            title: 'Go Live & Sell',
            description: 'Start live streams, run auctions, and list products for sale.',
        },
        {
            number: '04',
            title: 'Get Paid & Ship',
            description: 'Receive payments automatically and ship orders with ease.',
        },
    ];

    const categories = [
        { name: 'Sneakers', emoji: '👟', color: 'bg-red-100 text-red-600' },
        { name: 'Trading Cards', emoji: '🃏', color: 'bg-blue-100 text-blue-600' },
        { name: 'Fashion', emoji: '👕', color: 'bg-purple-100 text-purple-600' },
        { name: 'Electronics', emoji: '📱', color: 'bg-green-100 text-green-600' },
        { name: 'Collectibles', emoji: '🎨', color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Vintage', emoji: '⌚', color: 'bg-orange-100 text-orange-600' },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Sneaker Seller',
            avatar: 'S',
            quote: 'Bibbil transformed my sneaker business. I\'m making 3x more through live selling!',
            stats: '$15K/month',
        },
        {
            name: 'Mike Chen',
            role: 'Card Collector',
            avatar: 'M',
            quote: 'The auction feature is incredible. My Pokemon cards sell for premium prices.',
            stats: '500+ followers',
        },
        {
            name: 'Emma Davis',
            role: 'Fashion Curator',
            avatar: 'E',
            quote: 'Love the community! My vintage fashion shows get thousands of viewers.',
            stats: '2K viewers',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-95" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmJmMjQiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                                Turn Your Passion Into{' '}
                                <span className="text-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
                                    Profit
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto">
                                Join thousands of sellers making money through live shopping and auctions on Bibbil.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <Link to="/signup">
                                    <Button variant="primary" size="xl" icon={ArrowRight} iconPosition="right">
                                        Start Selling Now
                                    </Button>
                                </Link>
                                <a href="#how-it-works">
                                    <Button variant="outline" size="xl" className="bg-white text-secondary-900 border-white hover:bg-neutral-100">
                                        Learn How It Works
                                    </Button>
                                </a>
                            </div>

                            <div className="flex flex-wrap justify-center gap-8 text-white">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">10K+</div>
                                    <div className="text-sm text-neutral-300">Active Sellers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">$2M+</div>
                                    <div className="text-sm text-neutral-300">Monthly Sales</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">500K+</div>
                                    <div className="text-sm text-neutral-300">Active Buyers</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Powerful tools and features designed to help you sell more and grow your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card hoverable className="h-full">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                                            <feature.icon size={32} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-neutral-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Get started in minutes and start making money today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-primary-200 mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600">
                                        {step.description}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-primary-300" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-20 bg-neutral-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            Sell What You Love
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            From sneakers to collectibles, sell in your favorite categories.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category) => (
                            <motion.div
                                key={category.name}
                                whileHover={{ scale: 1.05 }}
                                className={`${category.color} rounded-xl p-6 text-center cursor-pointer transition-all hover:shadow-lg`}
                            >
                                <div className="text-4xl mb-2">{category.emoji}</div>
                                <div className="font-semibold">{category.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="success-stories" className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                            Success Stories
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                            Real sellers, real results. Join our thriving community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.name} className="h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                                            <div className="text-sm text-neutral-500">{testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p className="text-neutral-700 mb-4 flex-1">"{testimonial.quote}"</p>
                                    <div className="text-primary-600 font-bold">{testimonial.stats}</div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-hero">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Selling?
                    </h2>
                    <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful sellers on Bibbil today.
                    </p>
                    <Link to="/signup">
                        <Button variant="primary" size="xl" icon={Zap} iconPosition="left">
                            Get Started for Free
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing;
