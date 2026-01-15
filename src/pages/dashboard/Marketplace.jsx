import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Package } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import Input from '../../components/ui/Input';
import { mockProducts } from '../../data/mockData';
import { formatCurrency, formatNumber } from '../../utils/helpers';

const Marketplace = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        category: '',
        stock: '',
        description: '',
    });

    return (
        <DashboardNav>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Marketplace</h2>
                        <p className="text-neutral-600">Manage your product listings</p>
                    </div>
                    <Button variant="primary" icon={Plus} onClick={() => setIsAddModalOpen(true)}>
                        Add Product
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <div className="text-center">
                            <p className="text-sm text-neutral-600 mb-1">Total Products</p>
                            <p className="text-3xl font-bold text-neutral-900">{mockProducts.length}</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="text-center">
                            <p className="text-sm text-neutral-600 mb-1">Active Listings</p>
                            <p className="text-3xl font-bold text-green-600">
                                {mockProducts.filter(p => p.status === 'active').length}
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="text-center">
                            <p className="text-sm text-neutral-600 mb-1">Total Views</p>
                            <p className="text-3xl font-bold text-blue-600">
                                {formatNumber(mockProducts.reduce((sum, p) => sum + p.views, 0))}
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div className="text-center">
                            <p className="text-sm text-neutral-600 mb-1">Total Likes</p>
                            <p className="text-3xl font-bold text-red-600">
                                {formatNumber(mockProducts.reduce((sum, p) => sum + p.likes, 0))}
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockProducts.map((product) => (
                        <Card key={product.id} hoverable>
                            <div className="space-y-4">
                                <div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-semibold text-neutral-900 flex-1">{product.name}</h3>
                                        <Badge variant={product.status === 'active' ? 'success' : 'default'}>
                                            {product.status}
                                        </Badge>
                                    </div>

                                    <p className="text-2xl font-bold text-primary-600 mb-2">
                                        {formatCurrency(product.price)}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                                        <span className="flex items-center">
                                            <Package size={16} className="mr-1" />
                                            Stock: {product.stock}
                                        </span>
                                        <span className="flex items-center">
                                            <Eye size={16} className="mr-1" />
                                            {formatNumber(product.views)} views
                                        </span>
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" icon={Edit} fullWidth>
                                            Edit
                                        </Button>
                                        <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:bg-red-50">
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Add Product Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add New Product"
                footer={
                    <div className="flex gap-2 justify-end">
                        <Button variant="ghost" onClick={() => setIsAddModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary">
                            Add Product
                        </Button>
                    </div>
                }
            >
                <div className="space-y-4">
                    <Input
                        label="Product Name"
                        placeholder="Enter product name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        fullWidth
                    />
                    <Input
                        label="Price"
                        type="number"
                        placeholder="0.00"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        fullWidth
                    />
                    <Input
                        label="Category"
                        placeholder="e.g., Sneakers, Cards, Fashion"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        fullWidth
                    />
                    <Input
                        label="Stock Quantity"
                        type="number"
                        placeholder="0"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                        fullWidth
                    />
                </div>
            </Modal>
        </DashboardNav>
    );
};

export default Marketplace;
