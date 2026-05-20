import React from 'react';
import reviewsData from '../data/reviews.json';

const TestimonialsGuest = () => {
  const limitedReviews = reviewsData.slice(0, 5);

  return (
    <section id="testimonials" style={styles.testimonialSection}>
      <div style={styles.container}>
        
        <div style={styles.sectionHeader}>
          <span style={styles.subtitle}>ULASAN PENGGUNA</span>
          <h2 style={styles.sectionTitle}>Apa Kata Mereka?</h2>
        </div>

        <div style={styles.testimonialGrid}>
          {limitedReviews.map((review, index) => (
            <div key={review.id || index} style={styles.testimonialCard}>
              {/* PERBAIKAN DISINI: Menggunakan UI Avatars agar pasti muncul */}
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=00A76F&color=fff&rounded=true&size=128`} 
                alt={review.name} 
                style={styles.avatar} 
              />
              <h4 style={styles.userName}>{review.name}</h4>
              <div style={styles.quoteIcon}>“”</div>
              <p style={styles.reviewText}>
                {review.review || review.comment || "Pelayanan sangat memuaskan dan makanan sangat lezat!"}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const styles = {
  testimonialSection: { 
    padding: '100px 0', 
    backgroundColor: '#151521',
    display: 'flex',
    justifyContent: 'center' 
  },
  container: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    fontFamily: "'Poppins', sans-serif"
  },
  sectionHeader: { textAlign: 'center', marginBottom: '60px' },
  subtitle: { 
    color: '#00A76F', 
    letterSpacing: '3px', 
    fontSize: '13px', 
    fontWeight: '700', 
    display: 'block', 
    marginBottom: '10px' 
  },
  sectionTitle: { fontSize: '36px', fontWeight: '800', color: '#fff' },
  testimonialGrid: { 
    display: 'flex', 
    gap: '25px', 
    flexWrap: 'wrap', 
    justifyContent: 'center' 
  },
  testimonialCard: { 
    width: '320px', 
    backgroundColor: '#242435', 
    padding: '40px 30px', 
    borderRadius: '24px', 
    textAlign: 'center', 
    border: '1px solid rgba(255,255,255,0.05)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease'
  },
  avatar: { 
    width: '90px', 
    height: '90px', 
    borderRadius: '50%', 
    border: '4px solid #00A76F', 
    marginBottom: '20px',
    objectFit: 'cover'
  },
  userName: { 
    margin: '0 0 10px', 
    color: '#fff', 
    fontSize: '20px', 
    fontWeight: '700' 
  },
  quoteIcon: {
    fontSize: '40px',
    color: '#00A76F',
    lineHeight: '1',
    marginBottom: '10px',
    opacity: '0.5'
  },
  reviewText: { 
    color: '#acacac', 
    fontSize: '15px', 
    fontStyle: 'italic',
    lineHeight: '1.6'
  }
};

export default TestimonialsGuest;