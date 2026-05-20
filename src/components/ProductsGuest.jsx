import React from 'react';
import productsData from '../data/products.json';

const ProductsGuest = ({ searchTerm }) => {
  
  // Filter produk berdasarkan nama yang mengandung isi dari searchTerm
  const filteredProducts = productsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="products" style={styles.sectionPadding}>
      <div style={styles.container}>
        
        {/* Header Seksyen */}
        <div style={styles.sectionHeader}>
          <span style={styles.subtitle}>MENU SPESIAL</span>
          <h2 style={styles.sectionTitle}>
            {searchTerm ? `Hasil Pencarian: "${searchTerm}"` : 'Produk Unggulan Kami'}
          </h2>
        </div>

        {/* Grid Produk */}
        <div style={styles.productGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} style={styles.productCard}>
                <div style={styles.productImageWrapper}>
                  <img src={item.image} alt={item.name} style={styles.productImg} />
                </div>
                <div style={styles.productInfo}>
                  <div style={styles.priceTag}>Rp {item.price.toLocaleString()}</div>
                  <h3 style={styles.productName}>{item.name}</h3>
                  <button style={styles.btnCart}>Tambah ke Keranjang</button>
                </div>
              </div>
            ))
          ) : (
            <div style={styles.notFound}>
              <p>Maaf, menu "{searchTerm}" tidak ditemukan.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

const styles = {
  sectionPadding: { 
    padding: '100px 0',
    backgroundColor: '#13131d', // Warna background sedikit lebih gelap dari About
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    width: '100%',
    maxWidth: '1200px', // Memastikan grid tetap di tengah
    margin: '0 auto',
    padding: '0 20px',
    fontFamily: "'Poppins', sans-serif"
  },
  sectionHeader: { 
    textAlign: 'center', 
    marginBottom: '60px' 
  },
  subtitle: { 
    color: '#00A76F', // Warna Hijau Sedap
    letterSpacing: '3px', 
    fontSize: '13px', 
    fontWeight: '700', 
    display: 'block', 
    marginBottom: '10px' 
  },
  sectionTitle: { 
    fontSize: '36px', 
    fontWeight: '800', 
    color: '#fff' 
  },
  productGrid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '30px',
    width: '100%'
  },
  productCard: { 
    backgroundColor: '#242435', 
    borderRadius: '24px', 
    padding: '20px', 
    border: '1px solid rgba(255,255,255,0.05)',
    transition: 'transform 0.3s ease',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  productImageWrapper: { 
    width: '100%', 
    height: '220px', 
    borderRadius: '18px', 
    overflow: 'hidden', 
    marginBottom: '20px' 
  },
  productImg: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' 
  },
  priceTag: { 
    color: '#00A76F', // Warna Hijau Sedap
    fontWeight: '800', 
    fontSize: '16px', 
    marginBottom: '8px' 
  },
  productName: { 
    fontSize: '20px', 
    fontWeight: '700', 
    color: '#fff',
    marginBottom: '15px'
  },
  btnCart: { 
    width: '100%', 
    padding: '14px', 
    backgroundColor: 'transparent', 
    border: '2px solid #00A76F', // Outline Hijau
    color: '#fff', 
    borderRadius: '12px', 
    cursor: 'pointer',
    fontWeight: '600',
    transition: '0.3s',
    ":hover": {
        backgroundColor: '#00A76F'
    }
  },
  notFound: { 
    color: '#acacac', 
    textAlign: 'center', 
    gridColumn: '1 / -1', 
    padding: '60px',
    fontSize: '18px'
  }
};

export default ProductsGuest;