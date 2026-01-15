import React, { useState } from 'react';
import { Package, Truck, CheckCircle, AlertCircle, Printer } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Tabs from '../../components/ui/Tabs';
import { mockOrders } from '../../data/mockData';
import { formatCurrency, formatDate, getStatusColor } from '../../utils/helpers';

const Orders = () => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'pending': return AlertCircle;
            case 'shipped': return Truck;
            case 'delivered': return CheckCircle;
            default: return Package;
        }
    };

    const renderOrders = (filterStatus) => {
        const filtered = filterStatus === 'all'
            ? mockOrders
            : mockOrders.filter(order => order.status === filterStatus);

        return (
            <div className="space-y-4">
                {filtered.map((order) => {
                    const StatusIcon = getStatusIcon(order.status);
                    return (
                        <Card key={order.id} hoverable>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <StatusIcon size={20} className="text-neutral-600" />
                                        <h4 className="font-semibold text-neutral-900">{order.productName}</h4>
                                    </div>
                                    <div className="space-y-1 text-sm text-neutral-600">
                                        <p>Order ID: {order.id}</p>
                                        <p>Buyer: {order.buyer}</p>
                                        <p>Date: {formatDate(order.date)}</p>
                                        <p>Address: {order.shippingAddress}</p>
                                        {order.trackingNumber && (
                                            <p className="font-medium text-primary-600">Tracking: {order.trackingNumber}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col items-end space-y-2">
                                    <p className="text-2xl font-bold text-neutral-900">{formatCurrency(order.amount)}</p>
                                    <Badge variant={order.status === 'pending' ? 'warning' : order.status === 'shipped' ? 'info' : 'success'}>
                                        {order.status}
                                    </Badge>

                                    <div className="flex gap-2 mt-2">
                                        {order.status === 'pending' && (
                                            <>
                                                <Button variant="primary" size="sm" icon={Printer}>
                                                    Print Label
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    Mark Shipped
                                                </Button>
                                            </>
                                        )}
                                        {order.status === 'shipped' && (
                                            <Button variant="outline" size="sm">
                                                Track Package
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        );
    };

    const tabs = [
        { label: 'All Orders', content: renderOrders('all') },
        { label: 'Pending', content: renderOrders('pending') },
        { label: 'Shipped', content: renderOrders('shipped') },
        { label: 'Delivered', content: renderOrders('delivered') },
    ];

    return (
        <DashboardNav>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Orders</h2>
                <p className="text-neutral-600">Manage your orders and shipping</p>
            </div>
            <Tabs tabs={tabs} />
        </DashboardNav>
    );
};

export default Orders;
