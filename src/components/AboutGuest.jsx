import React from 'react';

const AboutGuest = () => {
  const stats = [
    { id: 1, title: 'Why We Do This', desc: 'Sedap adalah jembatan antara koki berbakat dan pecinta kuliner yang mencari keaslian rasa di era digital.', count: '500+', label: 'Bahan Fresh' },
    { id: 2, title: 'Helping You', desc: 'Kami membantu Anda menemukan hidangan terbaik dengan standar kualitas bintang lima setiap harinya.', count: '100+', label: 'Koki Ahli' },
    { id: 3, title: 'Our Mission', desc: 'Menjamin setiap pesanan sampai dalam keadaan hangat dan segar dengan pengiriman kilat.', count: '30mnt', label: 'Cepat & Hangat' },
    { id: 4, title: 'Premium Service', desc: 'Layanan dukungan pelanggan 24/7 untuk memastikan pengalaman kuliner Anda selalu sempurna.', count: '24/7', label: 'Layanan Premium' },
  ];

  return (
    <section id="about" style={styles.aboutSection}>
      {/* CONTAINER UTAMA - DIBUAT RATATENGAH */}
      <div style={styles.container}>
        
        {/* HEADER ATAS */}
        <div style={styles.topHeader}>
          <h2 style={styles.mainHeading}>Direct Teams. <br /> For Your Dedicated Dreams</h2>
        </div>

        {/* ELEMEN VISUAL HIJAU (Ganti dari Biru agar sesuai branding) */}
        <div style={styles.greenBanner}>
          <div style={styles.gradientOverlay}></div>
        </div>

        {/* CONTENT WRAPPER */}
        <div style={styles.contentWrapper}>
          <div style={styles.asymmetricGrid}>
            
            {/* Kolom Kiri */}
            <div style={styles.column}>
              <div style={styles.statCard}>
                <h3 style={styles.cardTitle}>{stats[0].title}</h3>
                <p style={styles.cardDesc}>{stats[0].desc}</p>
                <button style={styles.btnSmall}>Lihat Menu</button>
                <div style={styles.statFooter}>
                    <span style={styles.countText}>{stats[0].count}</span>
                    <span style={styles.labelText}>{stats[0].label}</span>
                </div>
              </div>
              
              <div style={styles.bottomTextContainer}>
                <h3 style={styles.bottomHeading}>Create, Order & Enjoy your Wonderful Meals at Sedap Very Fast</h3>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div style={styles.columnRight}>
              <div style={styles.statCard}>
                <h3 style={styles.cardTitle}>{stats[1].title}</h3>
                <p style={styles.cardDesc}>{stats[1].desc}</p>
                <div style={styles.statFooter}>
                    <span style={styles.countText}>{stats[1].count}</span>
                    <span style={styles.labelText}>{stats[1].label}</span>
                </div>
              </div>

              <div style={styles.statCard}>
                <h3 style={styles.cardTitle}>{stats[3].title}</h3>
                <p style={styles.cardDesc}>{stats[3].desc}</p>
                <div style={styles.statFooter}>
                    <span style={styles.countText}>{stats[3].count}</span>
                    <span style={styles.labelText}>{stats[3].label}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER LABEL */}
        <div style={styles.nuronStatsHeader}>
            <p style={styles.nuronLabel}>Sedap Statistics</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  aboutSection: { 
    padding: '80px 0', 
    backgroundColor: '#151521', 
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center' // Menjaga section tetap fleksibel
  },
  container: {
    width: '100%',
    maxWidth: '1200px', // Membatasi lebar agar tidak ke kiri terus
    margin: '0 auto',   // MEMAKSA KONTEN KE TENGAH
    padding: '0 20px',
    fontFamily: "'Poppins', sans-serif"
  },
  topHeader: { marginBottom: '40px' },
  mainHeading: { fontSize: '42px', fontWeight: '800', color: '#fff', lineHeight: '1.2' },
  
  greenBanner: {
    width: '100%',
    height: '450px',
    // Gradasi disesuaikan ke Hijau Sedap
    background: 'linear-gradient(90deg, #004d33 0%, #00A76F 50%, #00ffa3 100%)',
    borderRadius: '20px',
    position: 'relative',
    marginBottom: '-350px' 
  },
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 60%)',
  },
  
  contentWrapper: { 
    position: 'relative', 
    zIndex: 10,
  },
  asymmetricGrid: { 
    display: 'flex', 
    gap: '30px', 
    alignItems: 'stretch' 
  },
  
  column: { 
    flex: '1', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    gap: '40px' 
  },
  
  columnRight: { 
    flex: '1', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '30px',
    marginTop: '180px' 
  },

  statCard: { 
    backgroundColor: '#242435', 
    padding: '40px', 
    borderRadius: '16px', 
    border: '1px solid rgba(255,255,255,0.05)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
    textAlign: 'left'
  },
  
  cardTitle: { color: '#fff', fontSize: '24px', fontWeight: '700', marginBottom: '15px' },
  cardDesc: { color: '#acacac', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' },
  
  btnSmall: { 
    padding: '12px 24px', 
    backgroundColor: '#00A76F', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '8px', 
    fontSize: '14px', 
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(0, 167, 111, 0.3)'
  },

  statFooter: { borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' },
  countText: { color: '#00A76F', fontSize: '28px', fontWeight: '800', display: 'block' },
  labelText: { color: '#acacac', fontSize: '13px', fontWeight: '500' },
  
  bottomTextContainer: {
    padding: '0 10px',
    marginBottom: '20px' 
  },
  bottomHeading: { 
    color: '#fff', 
    fontSize: '28px', 
    fontWeight: '700', 
    lineHeight: '1.4',
    margin: 0
  },
  
  nuronStatsHeader: { textAlign: 'center', marginTop: '120px' },
  nuronLabel: { color: '#666', fontSize: '14px', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase' }
};

export default AboutGuest;