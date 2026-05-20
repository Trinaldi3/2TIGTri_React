import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import GuestNavbar from '../components/GuestNavbar';
import GuestFooter from '../components/GuestFooter';

const GuestLayout = () => {
  // State pencarian dipindah ke sini agar bisa diakses semua halaman guest
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="guest-layout" style={styles.layoutWrapper}>
      {/* Navbar menerima fungsi untuk mengubah state */}
      <GuestNavbar onSearchChange={setSearchQuery} />
      
      <main style={styles.mainContent}>
        {/* context={{searchQuery}} membagikan data ke LandingPage */}
        <Outlet context={{ searchQuery }} />
      </main>

      <GuestFooter />
    </div>
  );
};

const styles = {
  layoutWrapper: {
    backgroundColor: '#13131d',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  mainContent: {
    flex: 1,
    paddingTop: '80px' // Agar konten tidak tertutup Navbar fixed
  }
};

export default GuestLayout;