import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Users, DollarSign, Package, Eye } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { mockStats, mockLiveShows, mockOrders, mockAnalytics } from '../../data/mockData';
import { formatCurrency, formatNumber } from '../../utils/helpers';

/**
 * Dashboard Overview Page
 * 
 * Main seller dashboard with stats, charts, and quick actions.
 */

const Overview = () => {
    const stats = [
        {
            label: 'Monthly Revenue',
            value: formatCurrency(mockStats.monthlyRevenue),
            change: +12.5,
            icon: DollarSign,
            color: 'text-green-600 bg-green-100',
        },
        {
            label: 'Active Viewers',
            value: formatNumber(mockStats.activeViewers),
            change: +8.2,
            icon: Eye,
            color: 'text-blue-600 bg-blue-100',
        },
        {
            label: 'Total Followers',
            value: formatNumber(mockStats.totalFollowers),
            change: +15.3,
            icon: Users,
            color: 'text-purple-600 bg-purple-100',
        },
        {
            label: 'Pending Orders',
            value: mockStats.pendingOrders,
            change: -5.1,
            icon: Package,
            color: 'text-orange-600 bg-orange-100',
        },
    ];

    return (
        <DashboardNav>
            <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <Card key={stat.label}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-neutral-600 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
                                    <div className="flex items-center mt-2">
                                        {stat.change > 0 ? (
                                            <TrendingUp size={16} className="text-green-600 mr-1" />
                                        ) : (
                                            <TrendingDown size={16} className="text-red-600 mr-1" />
                                        )}
                                        <span className={`text-sm ${stat.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {Math.abs(stat.change)}%
                                        </span>
                                    </div>
                                </div>
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Sales Chart */}
                    <Card header={<h3 className="font-semibold text-lg">Sales Over Time</h3>}>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={mockAnalytics.salesOverTime}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="sales" stroke="#fbbf24" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>

                    {/* Category Performance */}
                    <Card header={<h3 className="font-semibold text-lg">Top Categories</h3>}>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={mockAnalytics.topCategories}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="sales" fill="#fbbf24" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </div>

                {/* Upcoming Shows & Recent Orders */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Upcoming Shows */}
                    <Card header={
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">Upcoming Shows</h3>
                            <Link to="/dashboard/livestream">
                                <Button variant="ghost" size="sm">View All</Button>
                            </Link>
                        </div>
                    }>
                        <div className="space-y-4">
                            {mockLiveShows.filter(show => show.status === 'scheduled').map((show) => (
                                <div key={show.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-neutral-900">{show.title}</h4>
                                        <p className="text-sm text-neutral-600">{show.scheduledDate} at {show.scheduledTime}</p>
                                    </div>
                                    <Badge variant="info">{show.category}</Badge>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Recent Orders */}
                    <Card header={
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">Recent Orders</h3>
                            <Link to="/dashboard/orders">
                                <Button variant="ghost" size="sm">View All</Button>
                            </Link>
                        </div>
                    }>
                        <div className="space-y-4">
                            {mockOrders.slice(0, 3).map((order) => (
                                <div key={order.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-neutral-900">{order.productName}</h4>
                                        <p className="text-sm text-neutral-600">{order.buyer}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-neutral-900">{formatCurrency(order.amount)}</p>
                                        <Badge variant={order.status === 'pending' ? 'warning' : 'success'} size="sm">
                                            {order.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Quick Actions */}
                <Card header={<h3 className="font-semibold text-lg">Quick Actions</h3>}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link to="/dashboard/livestream">
                            <Button variant="primary" fullWidth>Schedule Show</Button>
                        </Link>
                        <Link to="/dashboard/marketplace">
                            <Button variant="outline" fullWidth>Add Product</Button>
                        </Link>
                        <Link to="/dashboard/auctions">
                            <Button variant="outline" fullWidth>Create Auction</Button>
                        </Link>
                        <Link to="/dashboard/analytics">
                            <Button variant="outline" fullWidth>View Analytics</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </DashboardNav>
    );
};

export default Overview;
