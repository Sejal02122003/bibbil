// Utility helper functions

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);
};

export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
};

export const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
};

export const formatPercentage = (value) => {
    return `${value.toFixed(1)}%`;
};

export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

export const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
};

export const calculatePercentageChange = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
};

export const getStatusColor = (status) => {
    const colors = {
        active: 'text-green-600 bg-green-100',
        pending: 'text-yellow-600 bg-yellow-100',
        shipped: 'text-blue-600 bg-blue-100',
        delivered: 'text-green-600 bg-green-100',
        cancelled: 'text-red-600 bg-red-100',
        live: 'text-red-600 bg-red-100',
        scheduled: 'text-blue-600 bg-blue-100',
        ended: 'text-neutral-600 bg-neutral-100',
    };
    return colors[status] || 'text-neutral-600 bg-neutral-100';
};

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 8;
};

export const generateId = (prefix = 'id') => {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
