import React from 'react';
import { Link } from 'react-router-dom';

const GuestNavbar = ({ onSearchChange }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* SISI KIRI: Logo Sedap */}
        <div style={styles.logo}>
          <Link to="/guest" style={styles.logoText}>
            Sedap<span style={{ color: '#00A76F' }}>.</span>
          </Link>
        </div>

        {/* TENGAH: Navigasi Utama */}
        <ul style={styles.navLinks}>
          <li><Link to="/guest" style={styles.link}>Home</Link></li>
          <li><a href="#about" style={styles.link}>Tentang Kami</a></li>
          <li><a href="#products" style={styles.link}>Menu Spesial</a></li>
          <li><a href="#testimonials" style={styles.link}>Ulasan</a></li>
        </ul>

        {/* SISI KANAN: Search & Auth */}
        <div style={styles.rightSection}>
          {/* Kotak Pencarian */}
          <div style={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Cari menu favorit..." 
              style={styles.searchInput}
              onChange={(e) => onSearchChange(e.target.value)} 
            />
            <button style={styles.searchIconBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* Tombol Login/Register */}
          <div style={styles.authButtons}>
            <Link to="/login" style={styles.btnLogin}>Masuk</Link>
            <Link to="/register" style={styles.btnRegister}>Daftar</Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#151521',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    position: 'fixed',
    top: 0, 
    width: '100%', 
    zIndex: 1000,
    padding: '12px 0',
    fontFamily: "'Poppins', sans-serif",
    // Memastikan nav selalu membungkus container di tengah
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    // KUNCINYA: Lebar maksimal dan margin auto agar konten di tengah
    width: '100%',
    maxWidth: '1200px', 
    margin: '0 auto',
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '0 20px',
  },
  logoText: { 
    fontSize: '28px', 
    fontWeight: '800', 
    color: '#fff', 
    textDecoration: 'none', 
    letterSpacing: '-1px' 
  },
  navLinks: { 
    display: 'flex', 
    gap: '30px', 
    listStyle: 'none', 
    margin: 0, 
    padding: 0 
  },
  link: { 
    color: '#acacac', 
    fontSize: '14px', 
    fontWeight: '500', 
    textDecoration: 'none', 
    transition: '0.3s' 
  },
  rightSection: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px' 
  },
  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#242435',
    borderRadius: '10px',
    padding: '2px 12px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  searchInput: {
    background: 'none',
    border: 'none',
    color: '#fff',
    padding: '8px 5px',
    fontSize: '13px',
    outline: 'none',
    width: '160px',
  },
  searchIconBtn: {
    background: 'none',
    border: 'none',
    color: '#00A76F', // Ikon cari pakai warna hijau branding
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  authButtons: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '15px' 
  },
  btnLogin: { 
    color: '#fff', 
    fontSize: '14px', 
    fontWeight: '600', 
    textDecoration: 'none' 
  },
  btnRegister: {
    backgroundColor: '#00A76F', 
    color: '#fff',
    padding: '10px 24px', 
    borderRadius: '10px', 
    fontSize: '14px', 
    fontWeight: '700', 
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(0, 167, 111, 0.2)',
    transition: '0.3s ease'
  }
};

export default GuestNavbar;