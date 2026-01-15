import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Video, Gavel, ShoppingBag, ArrowRight, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card, { CardContent } from '../../components/ui/Card';

const Welcome = () => {
    const quickTips = [
        {
            icon: Video,
            title: 'Schedule Your First Live Show',
            description: 'Go to Live Stream and schedule your first show to start selling',
        },
        {
            icon: ShoppingBag,
            title: 'Add Products to Marketplace',
            description: 'List products with fixed prices for buyers to purchase anytime',
        },
        {
            icon: Gavel,
            title: 'Create Your First Auction',
            description: 'Set up exciting auctions with countdown timers and bidding',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-black flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                <Card padding="none" className="overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-12 text-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                            <CheckCircle className="text-green-500" size={48} />
                        </div>
                        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to Bibbil! 🎉</h1>
                        <p className="text-xl text-blue-900/80">Your seller account is ready to go</p>
                    </div>

                    <CardContent className="p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">You're All Set!</h2>
                            <p className="text-gray-600 text-lg">
                                Your account has been verified and your profile is complete.
                                Here's what you can do next:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {quickTips.map((tip, index) => {
                                const Icon = tip.icon;
                                return (
                                    <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                            <Icon className="text-blue-900" size={28} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                                        <p className="text-sm text-gray-600">{tip.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                            <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                <Zap size={20} />
                                Pro Tips for Success
                            </h3>
                            <ul className="space-y-2 text-sm text-blue-900">
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                                    <span>Go live regularly to build your audience and increase sales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                                    <span>Engage with your followers and respond to comments during streams</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                                    <span>Use high-quality photos and detailed descriptions for your products</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-500" />
                                    <span>Ship orders promptly to maintain high seller ratings</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <Link to="/dashboard">
                                <Button variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                                    Go to Seller Dashboard
                                </Button>
                            </Link>
                            <p className="mt-4 text-sm text-gray-500">
                                Need help? Check out our{' '}
                                <Link to="/help" className="text-yellow-600 hover:underline">
                                    Help Center
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Welcome;
