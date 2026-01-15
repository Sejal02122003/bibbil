import React from 'react';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import { mockAnalytics } from '../../data/mockData';
import { formatCurrency, formatNumber } from '../../utils/helpers';

const Analytics = () => {
    const COLORS = ['#fbbf24', '#3b82f6', '#ef4444', '#10b981'];

    return (
        <DashboardNav>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">Analytics</h2>
                    <p className="text-neutral-600">Track your performance and insights</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Conversion Rate</p>
                                <p className="text-3xl font-bold text-neutral-900">12.5%</p>
                                <p className="text-sm text-green-600 mt-1">+2.3% vs last month</p>
                            </div>
                            <TrendingUp size={32} className="text-green-600" />
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Avg Order Value</p>
                                <p className="text-3xl font-bold text-neutral-900">{formatCurrency(85.50)}</p>
                                <p className="text-sm text-green-600 mt-1">+5.2% vs last month</p>
                            </div>
                            <BarChart3 size={32} className="text-blue-600" />
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Total Views</p>
                                <p className="text-3xl font-bold text-neutral-900">{formatNumber(45230)}</p>
                                <p className="text-sm text-green-600 mt-1">+18.7% vs last month</p>
                            </div>
                            <Eye size={32} className="text-purple-600" />
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Follower Growth</p>
                                <p className="text-3xl font-bold text-neutral-900">+247</p>
                                <p className="text-sm text-green-600 mt-1">This month</p>
                            </div>
                            <Users size={32} className="text-orange-600" />
                        </div>
                    </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card header={<h3 className="font-semibold text-lg">Sales Trend</h3>}>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={mockAnalytics.salesOverTime}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="sales" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Card>

                    <Card header={<h3 className="font-semibold text-lg">Viewer Engagement</h3>}>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockAnalytics.viewerEngagement}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="viewers" stroke="#3b82f6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>

                    <Card header={<h3 className="font-semibold text-lg">Category Performance</h3>}>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={mockAnalytics.topCategories}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="sales" fill="#fbbf24" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>

                    <Card header={<h3 className="font-semibold text-lg">Sales Distribution</h3>}>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={mockAnalytics.topCategories}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ category, percentage }) => `${category} ${percentage}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="sales"
                                >
                                    {mockAnalytics.topCategories.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </div>

                {/* Top Products */}
                <Card header={<h3 className="font-semibold text-lg">Top Performing Products</h3>}>
                    <div className="space-y-4">
                        {['Nike Air Jordan 1', 'Pokemon Charizard Card', 'Supreme Box Logo'].map((product, index) => (
                            <div key={product} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl font-bold text-neutral-400">#{index + 1}</span>
                                    <div>
                                        <p className="font-medium text-neutral-900">{product}</p>
                                        <p className="text-sm text-neutral-600">{formatNumber((3 - index) * 450)} views</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-green-600">{formatCurrency((3 - index) * 220)}</p>
                                    <p className="text-sm text-neutral-600">{(3 - index) * 12} sales</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </DashboardNav>
    );
};

export default Analytics;
