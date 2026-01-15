import React, { useState } from 'react';

export const Tabs = ({ children, defaultValue, className = '' }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <div className={className}>
            {React.Children.map(children, child => {
                if (child.type === TabsList) {
                    return React.cloneElement(child, { activeTab, setActiveTab });
                }
                if (child.type === TabsContent) {
                    return React.cloneElement(child, { activeTab });
                }
                return child;
            })}
        </div>
    );
};

export const TabsList = ({ children, activeTab, setActiveTab, className = '' }) => {
    return (
        <div className={`flex gap-1 border-b border-gray-200 mb-6 ${className}`}>
            {React.Children.map(children, child =>
                React.cloneElement(child, { activeTab, setActiveTab })
            )}
        </div>
    );
};

export const TabsTrigger = ({ value, children, activeTab, setActiveTab, className = '' }) => {
    const isActive = activeTab === value;

    return (
        <button
            onClick={() => setActiveTab(value)}
            className={`
        px-4 py-2.5 font-medium text-sm transition-all duration-200 border-b-2
        ${isActive
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }
        ${className}
      `}
        >
            {children}
        </button>
    );
};

export const TabsContent = ({ value, children, activeTab, className = '' }) => {
    if (activeTab !== value) return null;

    return (
        <div className={`animate-fade-in ${className}`}>
            {children}
        </div>
    );
};

export default Tabs;
