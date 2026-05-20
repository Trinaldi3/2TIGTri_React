import React from 'react';

const GuestFooter = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerGrid}>
          
          {/* Kolom 1: Branding & Newsletter */}
          <div style={styles.columnMain}>
            <div style={styles.logo}>
              Sedap<span style={{ color: '#00A76F' }}>.</span>
            </div>
            <p style={styles.description}>
              Dibuat dengan cinta oleh tim profesional kuliner terbaik untuk menghadirkan cita rasa autentik ke meja Anda setiap hari.
            </p>
            <div style={styles.newsletterBox}>
              <h4 style={styles.newsletterTitle}>Dapatkan Promo Terbaru</h4>
              <div style={styles.inputGroup}>
                <input type="email" placeholder="Email Anda" style={styles.input} />
                <button style={styles.btnSubscribe}>Langganan</button>
              </div>
              <p style={styles.note}>Kami menjaga privasi data Anda dengan aman.</p>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Sedap</h4>
            <ul style={styles.list}>
              <li><a href="#about" style={styles.link}>Tentang Kami</a></li>
              <li><a href="#products" style={styles.link}>Menu Spesial</a></li>
              <li><a href="#testimonials" style={styles.link}>Ulasan</a></li>
              <li><a href="#" style={styles.link}>Layanan Katering</a></li>
              <li><a href="#" style={styles.link}>Kontak</a></li>
            </ul>
          </div>

          {/* Kolom 3: Informasi */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Informasi</h4>
            <ul style={styles.list}>
              <li><a href="#" style={styles.link}>Syarat & Ketentuan</a></li>
              <li><a href="#" style={styles.link}>Kebijakan Privasi</a></li>
              <li><a href="#" style={styles.link}>Cara Memesan</a></li>
              <li><a href="#" style={styles.link}>Area Pengiriman</a></li>
              <li><a href="#" style={styles.link}>Bantuan & FAQ</a></li>
            </ul>
          </div>

          {/* Kolom 4: Menu Terlaris (Sesuai gaya visual grid) */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Menu Terlaris</h4>
            <div style={styles.recentItem}>
              <div style={styles.miniImage}>🍱</div>
              <div>
                <div style={styles.itemName}>Paket Bento Premium</div>
                <div style={styles.itemPrice}>Rp 45.000</div>
              </div>
            </div>
            <div style={styles.recentItem}>
              <div style={styles.miniImage}>🥤</div>
              <div>
                <div style={styles.itemName}>Es Kopi Susu Sedap</div>
                <div style={styles.itemPrice}>Rp 18.000</div>
              </div>
            </div>
            <div style={styles.recentItem}>
              <div style={styles.miniImage}>🍰</div>
              <div>
                <div style={styles.itemName}>Cheesecake Lumer</div>
                <div style={styles.itemPrice}>Rp 25.000</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <div style={styles.bottomLeft}>
            © 2026 <span style={{color: '#fff', fontWeight: 'bold'}}>Sedap Restaurant</span>. All rights reserved.
          </div>
          <div style={styles.bottomRight}>
            <span style={styles.bottomLink}>Terms</span>
            <span style={styles.bottomLink}>Privacy Policy</span>
            <div style={styles.socialIcons}>
              <div style={styles.iconCircle}>f</div>
              <div style={styles.iconCircle}>t</div>
              <div style={styles.iconCircle}>i</div>
              <div style={styles.iconCircle}>in</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#13131d',
    paddingTop: '80px',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    color: '#acacac',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '60px'
  },
  columnMain: { paddingRight: '20px' },
  logo: { fontSize: '32px', fontWeight: '800', color: '#fff', marginBottom: '20px' },
  description: { fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' },
  newsletterTitle: { color: '#fff', fontSize: '16px', marginBottom: '15px', fontWeight: '600' },
  inputGroup: { display: 'flex', gap: '8px', marginBottom: '10px' },
  input: {
    backgroundColor: '#1d1d29',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '12px 15px',
    borderRadius: '10px',
    color: '#fff',
    flex: 1,
    fontSize: '14px',
    outline: 'none'
  },
  btnSubscribe: {
    backgroundColor: '#00A76F',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '10px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: '0.3s',
    boxShadow: '0 4px 15px rgba(0, 167, 111, 0.2)'
  },
  note: { fontSize: '12px', color: '#555' },
  columnTitle: { color: '#fff', fontSize: '20px', fontWeight: '700', marginBottom: '30px' },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  link: { 
    display: 'block', 
    color: '#acacac', 
    textDecoration: 'none', 
    marginBottom: '15px', 
    fontSize: '14px',
    transition: '0.3s'
  },
  recentItem: { display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'center' },
  miniImage: { 
    width: '50px', height: '50px', backgroundColor: '#242435', 
    borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px',
    border: '1px solid rgba(255,255,255,0.05)'
  },
  itemName: { color: '#fff', fontSize: '14px', fontWeight: '600', marginBottom: '4px' },
  itemPrice: { color: '#00A76F', fontSize: '13px', fontWeight: '800' },
  footerBottom: {
    borderTop: '1px solid rgba(255,255,255,0.05)',
    padding: '35px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px'
  },
  bottomLeft: { fontSize: '14px' },
  bottomRight: { display: 'flex', alignItems: 'center', gap: '25px' },
  bottomLink: { cursor: 'pointer', transition: '0.3s', fontSize: '14px' },
  socialIcons: { display: 'flex', gap: '12px' },
  iconCircle: {
    width: '36px', height: '36px', borderRadius: '50%', 
    backgroundColor: '#242435', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', fontSize: '13px', color: '#fff',
    transition: '0.3s',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.05)'
  }
};

export default GuestFooter;