import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Eye, Calendar } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import { mockAnalytics, mockStats } from '../../data/mockData';
import { formatCurrency, formatNumber } from '../../utils/helpers';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
    const [timeRange, setTimeRange] = useState('week');

    const COLORS = ['#fbbf24', '#3b82f6', '#10b981', '#ef4444'];

    const performanceMetrics = [
        { label: 'Conversion Rate', value: `${mockStats.conversionRate}%`, icon: TrendingUp, color: 'from-green-400 to-green-600' },
        { label: 'Avg Order Value', value: formatCurrency(mockStats.averageOrderValue), icon: DollarSign, color: 'from-blue-400 to-blue-600' },
        { label: 'Total Orders', value: mockStats.completedOrders, icon: Calendar, color: 'from-purple-400 to-purple-600' },
        { label: 'Follower Growth', value: '+15.3%', icon: Users, color: 'from-yellow-400 to-yellow-600' },
    ];

    return (
        <DashboardNav>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
                        <p className="text-gray-600">Track your performance and grow your business</p>
                    </div>
                    <select
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                        <option value="year">Last Year</option>
                    </select>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {performanceMetrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <Card key={index} padding="md">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                                    </div>
                                    <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center`}>
                                        <Icon className="text-white" size={20} />
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Charts */}
                <Tabs defaultValue="sales">
                    <TabsList>
                        <TabsTrigger value="sales">Sales Trends</TabsTrigger>
                        <TabsTrigger value="viewers">Viewer Analytics</TabsTrigger>
                        <TabsTrigger value="categories">Category Breakdown</TabsTrigger>
                    </TabsList>

                    <TabsContent value="sales">
                        <Card padding="lg">
                            <CardHeader>
                                <CardTitle>Sales Over Time</CardTitle>
                                <CardDescription>Track your daily sales performance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={mockAnalytics.salesData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="date" stroke="#6b7280" />
                                        <YAxis stroke="#6b7280" />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="sales" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', r: 6 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="viewers">
                        <Card padding="lg">
                            <CardHeader>
                                <CardTitle>Viewer Engagement</CardTitle>
                                <CardDescription>Monitor your live stream audience growth</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={mockAnalytics.viewersData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                        <XAxis dataKey="date" stroke="#6b7280" />
                                        <YAxis stroke="#6b7280" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="viewers" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="categories">
                        <Card padding="lg">
                            <CardHeader>
                                <CardTitle>Sales by Category</CardTitle>
                                <CardDescription>See which categories perform best</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={mockAnalytics.categoryBreakdown}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={({ category, value }) => `${category}: ${value}%`}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {mockAnalytics.categoryBreakdown.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="space-y-4">
                                        {mockAnalytics.categoryBreakdown.map((cat, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                                    <span className="font-medium text-gray-900">{cat.category}</span>
                                                </div>
                                                <span className="text-gray-600 font-bold">{cat.value}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Insights */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card padding="lg">
                        <CardHeader>
                            <CardTitle>Top Performing Products</CardTitle>
                            <CardDescription>Your best sellers this month</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {[
                                { name: 'Nike Air Jordan 1', sales: 12, revenue: 3000 },
                                { name: 'Pokemon Charizard Card', sales: 2, revenue: 2400 },
                                { name: 'Adidas Yeezy 350', sales: 8, revenue: 2400 },
                            ].map((product, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium text-gray-900">{product.name}</p>
                                        <p className="text-sm text-gray-600">{product.sales} sold</p>
                                    </div>
                                    <p className="font-bold text-gray-900">{formatCurrency(product.revenue)}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card padding="lg">
                        <CardHeader>
                            <CardTitle>Audience Insights</CardTitle>
                            <CardDescription>When your audience is most active</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-600">Peak Viewing Time</span>
                                    <span className="font-bold text-gray-900">7:00 PM - 9:00 PM</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-600">Best Day to Stream</span>
                                    <span className="font-bold text-gray-900">Saturday</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-600">Avg Watch Time</span>
                                    <span className="font-bold text-gray-900">24 minutes</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardNav>
    );
};

export default Analytics;
