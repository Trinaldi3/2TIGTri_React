import React from 'react';

const HeroGuest = () => {
  return (
    <section style={styles.heroSection}>
      {/* Background shape hijau lembut */}
      <div style={styles.bgShapeLeft}></div>
      
      <div style={styles.container}>
        <div style={styles.heroContent}>
          <span style={styles.subtitle}>WELCOME TO SEDAP RESTAURANT</span>
          <h1 style={styles.mainTitle}>
            Nikmati Kelezatan <span style={styles.greenText}>Autentik</span> <br /> di Setiap Gigitan
          </h1>
          <p style={styles.description}>
            Modern platform kuliner untuk menikmati hidangan terbaik dengan pelayanan profesional dan rasa yang tak terlupakan.
          </p>
          <div style={styles.btnGroup}>
            {/* Tombol Mulai Jelajah mengarah ke Menu Spesial */}
            <a href="#products" style={styles.btnExplore}>Mulai Jelajah</a>
            
            {/* Tombol Tentang Kami mengarah ke About Section */}
            <a href="#about" style={styles.btnOutline}>Tentang Kami</a>
          </div>
        </div>
        <div style={styles.heroImageContainer}>
           <img 
             src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" 
             alt="Hero" 
             style={styles.heroImg} 
           />
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: { 
    position: 'relative', 
    minHeight: '85vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', // Pastikan section utama memusatkan container
    overflow: 'hidden', 
    padding: '100px 0',
    backgroundColor: '#151521', // Sesuaikan dengan tema gelap
    fontFamily: "'Poppins', sans-serif"
  },
  container: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '50px', 
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  heroContent: { flex: 1, textAlign: 'left' },
  subtitle: { 
    color: '#00A76F', 
    letterSpacing: '3px', 
    fontSize: '13px', 
    fontWeight: '700', 
    marginBottom: '20px', 
    display: 'block' 
  },
  mainTitle: { fontSize: '56px', fontWeight: '800', lineHeight: '1.2', color: '#fff' },
  greenText: { color: '#00A76F' },
  description: { fontSize: '17px', color: '#acacac', margin: '25px 0 40px', maxWidth: '500px', lineHeight: '1.7' },
  btnGroup: { display: 'flex', gap: '20px' },
  
  // Mengubah button menjadi gaya anchor (a)
  btnExplore: { 
    backgroundColor: '#00A76F', 
    color: '#fff', 
    padding: '16px 35px', 
    borderRadius: '12px', 
    fontWeight: '700', 
    textDecoration: 'none', // Hilangkan garis bawah link
    display: 'inline-block',
    cursor: 'pointer',
    boxShadow: '0 8px 20px rgba(0, 167, 111, 0.2)',
    transition: '0.3s'
  },
  btnOutline: { 
    background: 'none', 
    color: '#fff', 
    padding: '16px 35px', 
    borderRadius: '12px', 
    border: '2px solid rgba(255,255,255,0.1)', 
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight: '600',
    transition: '0.3s'
  },
  
  heroImageContainer: { 
    flex: 1, 
    display: 'flex', 
    justifyContent: 'center' 
  },
  heroImg: { 
    width: '100%', 
    maxWidth: '550px',
    borderRadius: '30px', 
    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  bgShapeLeft: { 
    position: 'absolute', 
    top: '-10%', 
    left: '-10%', 
    width: '600px', 
    height: '600px', 
    background: 'radial-gradient(circle, rgba(0, 167, 111, 0.1) 0%, transparent 70%)', 
    zIndex: 1 
  }
};

export default HeroGuest;