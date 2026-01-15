import React, { useState } from 'react';
import { Package, Search, Filter, Truck, CheckCircle, AlertCircle } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Modal from '../../components/ui/Modal';
import { mockOrders } from '../../data/mockData';
import { formatCurrency, formatDate, getStatusColor } from '../../utils/helpers';

const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'delivered':
                return <CheckCircle size={20} className="text-green-500" />;
            case 'shipped':
                return <Truck size={20} className="text-blue-500" />;
            case 'pending':
                return <AlertCircle size={20} className="text-yellow-500" />;
            default:
                return <Package size={20} className="text-gray-500" />;
        }
    };

    const filteredOrders = mockOrders.filter(order =>
        order.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <DashboardNav>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Orders</h1>
                        <p className="text-gray-600">Manage and track all your orders</p>
                    </div>
                    <div className="flex gap-3">
                        <Input
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            icon={<Search size={20} />}
                            className="w-full md:w-64"
                        />
                        <Button variant="outline" icon={<Filter size={20} />}>
                            Filter
                        </Button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card padding="md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <AlertCircle className="text-yellow-600" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Pending</p>
                                <p className="text-2xl font-bold text-gray-900">8</p>
                            </div>
                        </div>
                    </Card>
                    <Card padding="md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Truck className="text-blue-600" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Shipped</p>
                                <p className="text-2xl font-bold text-gray-900">12</p>
                            </div>
                        </div>
                    </Card>
                    <Card padding="md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="text-green-600" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Delivered</p>
                                <p className="text-2xl font-bold text-gray-900">136</p>
                            </div>
                        </div>
                    </Card>
                    <Card padding="md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <Package className="text-gray-600" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Total</p>
                                <p className="text-2xl font-bold text-gray-900">156</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Orders Table */}
                <Card padding="lg">
                    <Tabs defaultValue="all">
                        <TabsList>
                            <TabsTrigger value="all">All Orders</TabsTrigger>
                            <TabsTrigger value="pending">Pending</TabsTrigger>
                            <TabsTrigger value="shipped">Shipped</TabsTrigger>
                            <TabsTrigger value="delivered">Delivered</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all">
                            <div className="space-y-3">
                                {filteredOrders.map(order => (
                                    <div
                                        key={order.id}
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                                        onClick={() => handleViewOrder(order)}
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            {getStatusIcon(order.status)}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-bold text-gray-900">{order.id}</h4>
                                                    <Badge variant={getStatusColor(order.status)}>{order.status}</Badge>
                                                </div>
                                                <p className="text-sm text-gray-600">{order.buyer} • {order.product}</p>
                                                <p className="text-xs text-gray-500 mt-1">{formatDate(order.date)}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-900 mb-1">{formatCurrency(order.amount)}</p>
                                            <Button variant="outline" size="sm">View Details</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="pending">
                            <div className="space-y-3">
                                {filteredOrders.filter(o => o.status === 'pending').map(order => (
                                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-4 flex-1">
                                            {getStatusIcon(order.status)}
                                            <div>
                                                <h4 className="font-bold text-gray-900">{order.id}</h4>
                                                <p className="text-sm text-gray-600">{order.buyer} • {order.product}</p>
                                            </div>
                                        </div>
                                        <Button variant="primary" size="sm">Generate Label</Button>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="shipped">
                            <div className="space-y-3">
                                {filteredOrders.filter(o => o.status === 'shipped').map(order => (
                                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-4 flex-1">
                                            {getStatusIcon(order.status)}
                                            <div>
                                                <h4 className="font-bold text-gray-900">{order.id}</h4>
                                                <p className="text-sm text-gray-600">{order.buyer} • {order.product}</p>
                                                <p className="text-xs text-gray-500 mt-1">Tracking: {order.trackingNumber}</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm">Track Package</Button>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="delivered">
                            <div className="space-y-3">
                                {filteredOrders.filter(o => o.status === 'delivered').map(order => (
                                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex items-center gap-4 flex-1">
                                            {getStatusIcon(order.status)}
                                            <div>
                                                <h4 className="font-bold text-gray-900">{order.id}</h4>
                                                <p className="text-sm text-gray-600">{order.buyer} • {order.product}</p>
                                            </div>
                                        </div>
                                        <Badge variant="success">Completed</Badge>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </Card>

                {/* Order Details Modal */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Order Details"
                    size="lg"
                >
                    {selectedOrder && (
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-3">Order Information</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Order ID:</span>
                                            <span className="font-medium">{selectedOrder.id}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Date:</span>
                                            <span className="font-medium">{formatDate(selectedOrder.date)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <Badge variant={getStatusColor(selectedOrder.status)}>{selectedOrder.status}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Amount:</span>
                                            <span className="font-bold">{formatCurrency(selectedOrder.amount)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-3">Buyer Information</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Name:</span>
                                            <span className="font-medium">{selectedOrder.buyer}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Address:</span>
                                            <span className="font-medium text-right">{selectedOrder.shippingAddress}</span>
                                        </div>
                                        {selectedOrder.trackingNumber && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Tracking:</span>
                                                <span className="font-medium">{selectedOrder.trackingNumber}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">Product</h3>
                                <p className="text-gray-700">{selectedOrder.product}</p>
                            </div>
                            <div className="flex gap-3">
                                {selectedOrder.status === 'pending' && (
                                    <Button variant="primary" className="flex-1">Generate Shipping Label</Button>
                                )}
                                {selectedOrder.status === 'shipped' && (
                                    <Button variant="secondary" className="flex-1">Track Package</Button>
                                )}
                                <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>Close</Button>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
        </DashboardNav>
    );
};

export default Orders;
