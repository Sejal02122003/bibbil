// Mock data for the Bibbil seller platform

export const mockSeller = {
    id: 'seller-001',
    name: 'John Seller',
    email: 'john@example.com',
    avatar: 'J',
    bio: 'Passionate sneaker collector and seller. Specializing in rare Jordan releases.',
    followers: 1247,
    totalSales: 15420,
    rating: 4.8,
    verified: true,
    joinedDate: '2025-06-15',
};

export const mockStats = {
    totalSales: 15420,
    monthlyRevenue: 3250,
    activeViewers: 127,
    totalFollowers: 1247,
    pendingOrders: 8,
    completedOrders: 342,
    averageOrderValue: 85.50,
    conversionRate: 12.5,
};

export const mockProducts = [
    {
        id: 'prod-001',
        name: 'Nike Air Jordan 1 Retro High OG',
        price: 220,
        image: 'https://via.placeholder.com/300x300/fbbf24/ffffff?text=Jordan+1',
        category: 'Sneakers',
        stock: 3,
        status: 'active',
        views: 1240,
        likes: 89,
    },
    {
        id: 'prod-002',
        name: 'Pokemon Charizard 1st Edition',
        price: 450,
        image: 'https://via.placeholder.com/300x300/3b82f6/ffffff?text=Charizard',
        category: 'Cards',
        stock: 1,
        status: 'active',
        views: 2100,
        likes: 156,
    },
    {
        id: 'prod-003',
        name: 'Supreme Box Logo Hoodie',
        price: 380,
        image: 'https://via.placeholder.com/300x300/ef4444/ffffff?text=Supreme',
        category: 'Fashion',
        stock: 0,
        status: 'sold',
        views: 890,
        likes: 67,
    },
];

export const mockOrders = [
    {
        id: 'order-001',
        productName: 'Nike Air Jordan 1',
        buyer: 'Mike Johnson',
        amount: 220,
        status: 'pending',
        date: '2026-01-15',
        shippingAddress: '123 Main St, New York, NY 10001',
    },
    {
        id: 'order-002',
        productName: 'Pokemon Card Bundle',
        buyer: 'Sarah Chen',
        amount: 150,
        status: 'shipped',
        date: '2026-01-14',
        trackingNumber: 'USPS1234567890',
        shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    },
    {
        id: 'order-003',
        productName: 'Vintage Rolex Watch',
        buyer: 'David Kim',
        amount: 1200,
        status: 'delivered',
        date: '2026-01-10',
        trackingNumber: 'USPS0987654321',
        shippingAddress: '789 Pine Rd, Chicago, IL 60601',
    },
];

export const mockTransactions = [
    {
        id: 'txn-001',
        type: 'sale',
        description: 'Nike Air Jordan 1 Retro High OG',
        amount: 220,
        fee: -11,
        net: 209,
        date: '2026-01-15',
        status: 'completed',
    },
    {
        id: 'txn-002',
        type: 'payout',
        description: 'Weekly payout to bank account',
        amount: -850,
        fee: 0,
        net: -850,
        date: '2026-01-12',
        status: 'completed',
    },
    {
        id: 'txn-003',
        type: 'sale',
        description: 'Pokemon Charizard Card',
        amount: 450,
        fee: -22.50,
        net: 427.50,
        date: '2026-01-11',
        status: 'completed',
    },
];

export const mockLiveShows = [
    {
        id: 'show-001',
        title: 'Sneaker Drop - Jordan Collection',
        scheduledDate: '2026-01-16',
        scheduledTime: '19:00',
        status: 'scheduled',
        category: 'Sneakers',
        thumbnail: 'https://via.placeholder.com/400x225/fbbf24/ffffff?text=Sneaker+Drop',
    },
    {
        id: 'show-002',
        title: 'Pokemon Card Opening & Auction',
        scheduledDate: '2026-01-15',
        scheduledTime: '20:00',
        status: 'live',
        category: 'Cards',
        viewers: 127,
        thumbnail: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Pokemon+Live',
    },
    {
        id: 'show-003',
        title: 'Vintage Fashion Showcase',
        scheduledDate: '2026-01-14',
        scheduledTime: '18:00',
        status: 'ended',
        category: 'Fashion',
        peakViewers: 234,
        totalSales: 1240,
        thumbnail: 'https://via.placeholder.com/400x225/a855f7/ffffff?text=Fashion+Show',
    },
];

export const mockAuctions = [
    {
        id: 'auction-001',
        productName: 'Rare Pokemon Booster Box',
        currentBid: 850,
        startingBid: 500,
        bidCount: 23,
        timeRemaining: '2h 15m',
        status: 'active',
        image: 'https://via.placeholder.com/200x200/3b82f6/ffffff?text=Pokemon',
    },
    {
        id: 'auction-002',
        productName: 'Signed Jordan Jersey',
        currentBid: 1200,
        startingBid: 800,
        bidCount: 45,
        timeRemaining: '45m',
        status: 'active',
        image: 'https://via.placeholder.com/200x200/ef4444/ffffff?text=Jersey',
    },
    {
        id: 'auction-003',
        productName: 'Vintage Supreme Tee',
        finalBid: 380,
        startingBid: 200,
        bidCount: 18,
        winner: 'Alex Thompson',
        status: 'ended',
        image: 'https://via.placeholder.com/200x200/ef4444/ffffff?text=Supreme',
    },
];

export const mockAnalytics = {
    salesOverTime: [
        { date: 'Jan 1', sales: 450 },
        { date: 'Jan 5', sales: 680 },
        { date: 'Jan 10', sales: 920 },
        { date: 'Jan 15', sales: 1200 },
    ],
    topCategories: [
        { category: 'Sneakers', sales: 4500, percentage: 45 },
        { category: 'Cards', sales: 3200, percentage: 32 },
        { category: 'Fashion', sales: 2300, percentage: 23 },
    ],
    viewerEngagement: [
        { date: 'Jan 1', viewers: 80 },
        { date: 'Jan 5', viewers: 120 },
        { date: 'Jan 10', viewers: 150 },
        { date: 'Jan 15', viewers: 200 },
    ],
};

export const mockFollowers = [
    { id: 'user-001', name: 'Sarah Miller', avatar: 'S', followedDate: '2025-12-01', online: true },
    { id: 'user-002', name: 'Mike Johnson', avatar: 'M', followedDate: '2025-11-15', online: false },
    { id: 'user-003', name: 'Alex Chen', avatar: 'A', followedDate: '2025-10-20', online: true },
    { id: 'user-004', name: 'Emma Davis', avatar: 'E', followedDate: '2025-09-10', online: false },
];

export const mockNotifications = [
    {
        id: 'notif-001',
        type: 'sale',
        message: 'New sale: Nike Air Jordan 1 for $220',
        time: '5 minutes ago',
        read: false,
    },
    {
        id: 'notif-002',
        type: 'follower',
        message: 'Sarah Miller started following you',
        time: '1 hour ago',
        read: false,
    },
    {
        id: 'notif-003',
        type: 'bid',
        message: 'New bid on Pokemon Booster Box: $850',
        time: '2 hours ago',
        read: true,
    },
];
