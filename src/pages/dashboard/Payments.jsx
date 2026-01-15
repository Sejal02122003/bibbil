import React, { useState } from 'react';
import { DollarSign, TrendingUp, Download, Calendar } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { mockTransactions, mockStats } from '../../data/mockData';
import { formatCurrency, formatDate } from '../../utils/helpers';

const Payments = () => {
    const [payoutSchedule, setPayoutSchedule] = useState('weekly');

    return (
        <DashboardNav>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments</h1>
                    <p className="text-gray-600">Manage your earnings and payouts</p>
                </div>

                {/* Balance Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card padding="lg" className="bg-gradient-to-br from-green-400 to-green-600 text-white">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <p className="text-green-100 mb-1">Available Balance</p>
                                <p className="text-4xl font-bold">{formatCurrency(2450.75)}</p>
                            </div>
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                <DollarSign size={24} />
                            </div>
                        </div>
                        <Button variant="secondary" size="sm" className="w-full bg-white text-green-600 hover:bg-green-50">
                            Request Payout
                        </Button>
                    </Card>

                    <Card padding="lg">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-gray-600 mb-1">Pending Balance</p>
                                <p className="text-3xl font-bold text-gray-900">{formatCurrency(1250.50)}</p>
                                <p className="text-sm text-gray-500 mt-2">Available in 2 days</p>
                            </div>
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Calendar className="text-yellow-600" size={24} />
                            </div>
                        </div>
                    </Card>

                    <Card padding="lg">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-gray-600 mb-1">Total Earnings</p>
                                <p className="text-3xl font-bold text-gray-900">{formatCurrency(mockStats.totalSales)}</p>
                                <p className="text-sm text-green-600 font-medium mt-2 flex items-center gap-1">
                                    <TrendingUp size={16} />
                                    +12.5% this month
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <TrendingUp className="text-blue-600" size={24} />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Payout Settings */}
                <Card padding="lg">
                    <CardHeader>
                        <CardTitle>Payout Settings</CardTitle>
                        <CardDescription>Configure how and when you receive payments</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Payout Schedule
                                </label>
                                <select
                                    value={payoutSchedule}
                                    onChange={(e) => setPayoutSchedule(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none"
                                >
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly (Every Monday)</option>
                                    <option value="biweekly">Bi-weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Minimum Payout Amount
                                </label>
                                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none">
                                    <option value="25">$25</option>
                                    <option value="50">$50</option>
                                    <option value="100">$100</option>
                                    <option value="250">$250</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-blue-900">
                                <strong>Bank Account:</strong> •••• •••• •••• 4242 (Default)
                                <Button variant="ghost" size="sm" className="ml-4">Change</Button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Fee Breakdown */}
                <Card padding="lg">
                    <CardHeader>
                        <CardTitle>Fee Structure</CardTitle>
                        <CardDescription>Understanding your fees</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">Platform Fee</p>
                                    <p className="text-sm text-gray-600">Per transaction</p>
                                </div>
                                <p className="text-2xl font-bold text-gray-900">5%</p>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">Payment Processing</p>
                                    <p className="text-sm text-gray-600">Credit card transactions</p>
                                </div>
                                <p className="text-2xl font-bold text-gray-900">2.9% + $0.30</p>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                                <div>
                                    <p className="font-medium text-green-900">You Keep</p>
                                    <p className="text-sm text-green-700">Average per $100 sale</p>
                                </div>
                                <p className="text-2xl font-bold text-green-900">$92.10</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Transaction History */}
                <Card padding="lg">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Transaction History</CardTitle>
                                <CardDescription>View all your transactions</CardDescription>
                            </div>
                            <Button variant="outline" size="sm" icon={<Download size={16} />}>
                                Export CSV
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="all">
                            <TabsList>
                                <TabsTrigger value="all">All Transactions</TabsTrigger>
                                <TabsTrigger value="sales">Sales</TabsTrigger>
                                <TabsTrigger value="payouts">Payouts</TabsTrigger>
                            </TabsList>

                            <TabsContent value="all">
                                <div className="space-y-3">
                                    {mockTransactions.map(txn => (
                                        <div key={txn.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <p className="font-medium text-gray-900">{txn.description}</p>
                                                    <Badge variant={txn.type === 'sale' ? 'success' : 'info'}>
                                                        {txn.type}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-gray-600">{txn.id} • {formatDate(txn.date)}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className={`text-lg font-bold ${txn.amount > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                                                    {txn.amount > 0 ? '+' : ''}{formatCurrency(txn.amount)}
                                                </p>
                                                {txn.fee !== 0 && (
                                                    <p className="text-sm text-gray-500">Fee: {formatCurrency(Math.abs(txn.fee))}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="sales">
                                <div className="space-y-3">
                                    {mockTransactions.filter(t => t.type === 'sale').map(txn => (
                                        <div key={txn.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="font-medium text-gray-900">{txn.description}</p>
                                                <p className="text-sm text-gray-600">{formatDate(txn.date)}</p>
                                            </div>
                                            <p className="text-lg font-bold text-green-600">+{formatCurrency(txn.amount)}</p>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="payouts">
                                <div className="space-y-3">
                                    {mockTransactions.filter(t => t.type === 'payout').map(txn => (
                                        <div key={txn.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div>
                                                <p className="font-medium text-gray-900">{txn.description}</p>
                                                <p className="text-sm text-gray-600">{formatDate(txn.date)}</p>
                                            </div>
                                            <p className="text-lg font-bold text-gray-900">{formatCurrency(Math.abs(txn.amount))}</p>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardNav>
    );
};

export default Payments;
