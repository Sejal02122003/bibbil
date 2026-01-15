// Mock Data for Bibbil Seller Platform

export const mockSeller = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'JD',
    bio: 'Passionate collector and seller of rare sneakers and trading cards. Selling since 2023.',
    followers: 2847,
    totalSales: 15420,
    rating: 4.8,
    verified: true,
    categories: ['Sneakers', 'Trading Cards'],
    joinedDate: '2023-06-15',
};

export const mockStats = {
    totalSales: 15420,
    monthlyRevenue: 3250,
    activeViewers: 142,
    totalFollowers: 2847,
    pendingOrders: 8,
    completedOrders: 156,
    averageOrderValue: 98.85,
    conversionRate: 3.2,
};

export const mockProducts = [
    {
        id: 1,
        name: 'Nike Air Jordan 1 Retro High OG',
        price: 250,
        image: '/products/jordan1.jpg',
        category: 'Sneakers',
        status: 'active',
        inventory: 3,
        sold: 12,
    },
    {
        id: 2,
        name: 'Pokemon Charizard 1st Edition',
        price: 1200,
        image: '/products/charizard.jpg',
        category: 'Trading Cards',
        status: 'active',
        inventory: 1,
        sold: 2,
    },
    {
        id: 3,
        name: 'Adidas Yeezy Boost 350 V2',
        price: 300,
        image: '/products/yeezy.jpg',
        category: 'Sneakers',
        status: 'sold',
        inventory: 0,
        sold: 8,
    },
];

export const mockOrders = [
    {
        id: 'ORD-001',
        buyer: 'Sarah Johnson',
        product: 'Nike Air Jordan 1 Retro High OG',
        amount: 250,
        status: 'pending',
        date: '2026-01-15',
        shippingAddress: '123 Main St, New York, NY 10001',
    },
    {
        id: 'ORD-002',
        buyer: 'Mike Chen',
        product: 'Pokemon Charizard 1st Edition',
        amount: 1200,
        status: 'shipped',
        date: '2026-01-14',
        trackingNumber: '1Z999AA10123456784',
        shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    },
    {
        id: 'ORD-003',
        buyer: 'Emma Wilson',
        product: 'Adidas Yeezy Boost 350 V2',
        amount: 300,
        status: 'delivered',
        date: '2026-01-10',
        trackingNumber: '1Z999AA10123456785',
        shippingAddress: '789 Pine Rd, Chicago, IL 60601',
    },
];

export const mockTransactions = [
    {
        id: 'TXN-001',
        type: 'sale',
        description: 'Nike Air Jordan 1 Retro High OG',
        amount: 250,
        fee: -12.5,
        net: 237.5,
        date: '2026-01-15',
    },
    {
        id: 'TXN-002',
        type: 'payout',
        description: 'Weekly Payout',
        amount: -1500,
        fee: 0,
        net: -1500,
        date: '2026-01-13',
    },
    {
        id: 'TXN-003',
        type: 'sale',
        description: 'Pokemon Charizard 1st Edition',
        amount: 1200,
        fee: -60,
        net: 1140,
        date: '2026-01-14',
    },
];

export const mockLiveShows = [
    {
        id: 1,
        title: 'Rare Sneaker Drop',
        scheduledDate: '2026-01-16T19:00:00',
        status: 'scheduled',
        category: 'Sneakers',
        thumbnail: '/shows/sneaker-drop.jpg',
    },
    {
        id: 2,
        title: 'Pokemon Card Auction',
        scheduledDate: '2026-01-15T18:00:00',
        status: 'live',
        category: 'Trading Cards',
        viewers: 142,
        thumbnail: '/shows/pokemon-auction.jpg',
    },
    {
        id: 3,
        title: 'Vintage Collectibles',
        scheduledDate: '2026-01-14T20:00:00',
        status: 'ended',
        category: 'Collectibles',
        peakViewers: 256,
        sales: 8,
        revenue: 2400,
        thumbnail: '/shows/vintage.jpg',
    },
];

export const mockAuctions = [
    {
        id: 1,
        product: 'Nike Air Jordan 1 Chicago',
        currentBid: 450,
        bidders: 12,
        timeRemaining: 3600, // seconds
        startingBid: 300,
        buyNowPrice: 600,
        status: 'active',
    },
    {
        id: 2,
        product: 'Pokemon Base Set Booster Box',
        currentBid: 2200,
        bidders: 8,
        timeRemaining: 7200,
        startingBid: 1800,
        buyNowPrice: 2800,
        status: 'active',
    },
];

export const mockAnalytics = {
    salesData: [
        { date: '2026-01-08', sales: 450 },
        { date: '2026-01-09', sales: 680 },
        { date: '2026-01-10', sales: 520 },
        { date: '2026-01-11', sales: 890 },
        { date: '2026-01-12', sales: 750 },
        { date: '2026-01-13', sales: 920 },
        { date: '2026-01-14', sales: 1100 },
        { date: '2026-01-15', sales: 890 },
    ],
    viewersData: [
        { date: '2026-01-08', viewers: 85 },
        { date: '2026-01-09', viewers: 120 },
        { date: '2026-01-10', viewers: 95 },
        { date: '2026-01-11', viewers: 160 },
        { date: '2026-01-12', viewers: 140 },
        { date: '2026-01-13', viewers: 180 },
        { date: '2026-01-14', viewers: 220 },
        { date: '2026-01-15', viewers: 142 },
    ],
    categoryBreakdown: [
        { category: 'Sneakers', value: 45 },
        { category: 'Trading Cards', value: 35 },
        { category: 'Collectibles', value: 15 },
        { category: 'Fashion', value: 5 },
    ],
};

export const mockFollowers = [
    { id: 1, name: 'Sarah Johnson', avatar: 'SJ', followedDate: '2025-12-01', engaged: true },
    { id: 2, name: 'Mike Chen', avatar: 'MC', followedDate: '2025-11-15', engaged: true },
    { id: 3, name: 'Emma Wilson', avatar: 'EW', followedDate: '2025-10-20', engaged: false },
    { id: 4, name: 'Alex Rodriguez', avatar: 'AR', followedDate: '2025-09-10', engaged: true },
];
