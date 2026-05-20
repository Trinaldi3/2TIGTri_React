import React from 'react';
import { useOutletContext } from 'react-router-dom'; // Tambahkan ini
import HeroGuest from '../components/HeroGuest';
import AboutGuest from '../components/AboutGuest';
import ProductsGuest from '../components/ProductsGuest';
import TestimonialsGuest from '../components/TestimonialsGuest';

const LandingPage = () => {
  // Mengambil data searchQuery dari GuestLayout
  const { searchQuery } = useOutletContext();

  return (
    <div>
      <HeroGuest />
      <AboutGuest />
      {/* Products menerima state search untuk filter */}
      <ProductsGuest searchTerm={searchQuery} />
      <TestimonialsGuest />
    </div>
  );
};

export default LandingPage;