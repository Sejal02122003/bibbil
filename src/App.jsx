import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Landing from './pages/Landing';

// Onboarding Pages
import SignUp from './pages/onboarding/SignUp';
import SignIn from './pages/onboarding/SignIn';
import Verification from './pages/onboarding/Verification';
import ProfileSetup from './pages/onboarding/ProfileSetup';
import Welcome from './pages/onboarding/Welcome';

// Dashboard Pages
import Overview from './pages/dashboard/Overview';
import Analytics from './pages/dashboard/Analytics';
import Orders from './pages/dashboard/Orders';
import Payments from './pages/dashboard/Payments';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />

        {/* Onboarding Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/onboarding/verification" element={<Verification />} />
        <Route path="/onboarding/profile-setup" element={<ProfileSetup />} />
        <Route path="/onboarding/welcome" element={<Welcome />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route path="/dashboard/payments" element={<Payments />} />

        {/* Placeholder routes for other dashboard pages */}
        <Route path="/dashboard/live-stream" element={<Overview />} />
        <Route path="/dashboard/auctions" element={<Overview />} />
        <Route path="/dashboard/marketplace" element={<Overview />} />
        <Route path="/dashboard/community" element={<Overview />} />
        <Route path="/dashboard/settings" element={<Overview />} />

        {/* Catch all - redirect to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
