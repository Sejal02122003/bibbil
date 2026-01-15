import React from 'react';
import { Gavel, Clock, Trophy, Plus } from 'lucide-react';
import DashboardNav from '../../components/layout/DashboardNav';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import Tabs from '../../components/ui/Tabs';
import { mockAuctions } from '../../data/mockData';
import { formatCurrency, formatNumber } from '../../utils/helpers';

const Auctions = () => {
    const renderAuctionCard = (auction) => (
        <Card key={auction.id} hoverable>
            <div className="flex gap-4">
                <div className="w-24 h-24 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={auction.image} alt={auction.productName} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-2">{auction.productName}</h3>

                    {auction.status === 'active' ? (
                        <>
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className="text-sm text-neutral-600">Current Bid</p>
                                    <p className="text-2xl font-bold text-primary-600">{formatCurrency(auction.currentBid)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-neutral-600">Time Left</p>
                                    <p className="font-semibold text-neutral-900 flex items-center">
                                        <Clock size={16} className="mr-1" />
                                        {auction.timeRemaining}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600">{auction.bidCount} bids</span>
                                <Badge variant="live">Live</Badge>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className="text-sm text-neutral-600">Final Bid</p>
                                    <p className="text-2xl font-bold text-green-600">{formatCurrency(auction.finalBid)}</p>
                                </div>
                                <Trophy size={32} className="text-yellow-500" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-600">Winner: {auction.winner}</span>
                                <Badge variant="success">Sold</Badge>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Card>
    );

    const tabs = [
        {
            label: 'Active Auctions',
            content: (
                <div className="space-y-4">
                    {mockAuctions.filter(a => a.status === 'active').map(renderAuctionCard)}
                </div>
            ),
        },
        {
            label: 'Ended Auctions',
            content: (
                <div className="space-y-4">
                    {mockAuctions.filter(a => a.status === 'ended').map(renderAuctionCard)}
                </div>
            ),
        },
    ];

    return (
        <DashboardNav>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Auctions</h2>
                        <p className="text-neutral-600">Manage your live auctions</p>
                    </div>
                    <Button variant="primary" icon={Plus}>
                        Create Auction
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Active Auctions</p>
                                <p className="text-3xl font-bold text-neutral-900">
                                    {mockAuctions.filter(a => a.status === 'active').length}
                                </p>
                            </div>
                            <Gavel size={32} className="text-primary-600" />
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Total Bids</p>
                                <p className="text-3xl font-bold text-blue-600">
                                    {mockAuctions.reduce((sum, a) => sum + (a.bidCount || 0), 0)}
                                </p>
                            </div>
                            <Trophy size={32} className="text-blue-600" />
                        </div>
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-neutral-600 mb-1">Auction Revenue</p>
                                <p className="text-3xl font-bold text-green-600">
                                    {formatCurrency(2430)}
                                </p>
                            </div>
                            <DollarSign size={32} className="text-green-600" />
                        </div>
                    </Card>
                </div>

                <Tabs tabs={tabs} />
            </div>
        </DashboardNav>
    );
};

export default Auctions;
