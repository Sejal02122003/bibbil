import React, { useState } from 'react';
import { DollarSign, TrendingUp, Download, Calendar } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Tabs from '../../components/ui/Tabs';
import { mockStats, mockTransactions } from '../../data/mockData';
import { formatCurrency, formatDate } from '../../utils/helpers';

const Payments = () => {
    const tabs = [
        {
            label: 'Overview',
            content: (
                <div className="space-y-6">
                    {/* Balance Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card>
                            <div className="text-center">
                                <p className="text-sm text-neutral-600 mb-2">Available Balance</p>
                                <p className="text-4xl font-bold text-green-600">{formatCurrency(2450.50)}</p>
                                <Button variant="primary" size="sm" className="mt-4">Withdraw</Button>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-center">
                                <p className="text-sm text-neutral-600 mb-2">Pending Balance</p>
                                <p className="text-4xl font-bold text-yellow-600">{formatCurrency(850.00)}</p>
                                <p className="text-xs text-neutral-500 mt-2">Available in 2-3 days</p>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-center">
                                <p className="text-sm text-neutral-600 mb-2">Total Earnings</p>
                                <p className="text-4xl font-bold text-primary-600">{formatCurrency(mockStats.totalSales)}</p>
                                <div className="flex items-center justify-center mt-2 text-green-600">
                                    <TrendingUp size={16} className="mr-1" />
                                    <span className="text-sm">+12.5% this month</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Fee Breakdown */}
                    <Card header={<h3 className="font-semibold text-lg">Fee Breakdown</h3>}>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-700">Platform Fee (5%)</span>
                                <span className="font-semibold">{formatCurrency(125.50)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-700">Payment Processing (2.9% + $0.30)</span>
                                <span className="font-semibold">{formatCurrency(75.20)}</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between items-center">
                                <span className="font-semibold text-neutral-900">Total Fees This Month</span>
                                <span className="font-bold text-lg">{formatCurrency(200.70)}</span>
                            </div>
                        </div>
                    </Card>
                </div>
            ),
        },
        {
            label: 'Transactions',
            content: (
                <Card>
                    <div className="space-y-4">
                        {mockTransactions.map((txn) => (
                            <div key={txn.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-medium text-neutral-900">{txn.description}</h4>
                                    <p className="text-sm text-neutral-600">{formatDate(txn.date)}</p>
                                </div>
                                <div className="text-right">
                                    <p className={`font-bold ${txn.type === 'sale' ? 'text-green-600' : 'text-neutral-900'}`}>
                                        {txn.type === 'sale' ? '+' : ''}{formatCurrency(txn.amount)}
                                    </p>
                                    <Badge variant={txn.status === 'completed' ? 'success' : 'warning'} size="sm">
                                        {txn.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            ),
        },
        {
            label: 'Payout Settings',
            content: (
                <div className="space-y-6">
                    <Card header={<h3 className="font-semibold text-lg">Bank Account</h3>}>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-neutral-900">Bank of America</p>
                                    <p className="text-sm text-neutral-600">••••  ••••  ••••  4242</p>
                                </div>
                                <Badge variant="success">Default</Badge>
                            </div>
                            <Button variant="outline">Add New Account</Button>
                        </div>
                    </Card>

                    <Card header={<h3 className="font-semibold text-lg">Payout Schedule</h3>}>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Calendar size={20} className="text-neutral-600" />
                                <span className="text-neutral-700">Weekly payouts every Friday</span>
                            </div>
                            <Button variant="outline">Change Schedule</Button>
                        </div>
                    </Card>
                </div>
            ),
        },
    ];

    return (
        <DashboardNav>
            <Tabs tabs={tabs} />
        </DashboardNav>
    );
};

export default Payments;
