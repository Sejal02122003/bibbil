import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import SignUp from './pages/onboarding/SignUp';
import Overview from './pages/dashboard/Overview';
import Payments from './pages/dashboard/Payments';
import Orders from './pages/dashboard/Orders';
import Marketplace from './pages/dashboard/Marketplace';
import Auctions from './pages/dashboard/Auctions';
import LiveStream from './pages/dashboard/LiveStream';
import Analytics from './pages/dashboard/Analytics';

// Styles
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignUp />} /> {/* Reusing SignUp for now */}

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/livestream" element={<LiveStream />} />
        <Route path="/dashboard/auctions" element={<Auctions />} />
        <Route path="/dashboard/marketplace" element={<Marketplace />} />
        <Route path="/dashboard/payments" element={<Payments />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/community" element={<Overview />} /> {/* TODO */}
        <Route path="/dashboard/settings" element={<Overview />} /> {/* TODO */}

        {/* Onboarding Routes */}
        <Route path="/onboarding/verification" element={<Overview />} /> {/* Placeholder */}
        <Route path="/onboarding/profile" element={<Overview />} /> {/* Placeholder */}
        <Route path="/onboarding/welcome" element={<Overview />} /> {/* Placeholder */}

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
