import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <PageHeader />
      
      {/* Kontainer Utama */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        
        {/* Elemen Visual 404 */}
        <div className="relative">
          <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-600 text-white text-sm md:text-base font-semibold rounded shadow-lg -rotate-6">
            Halaman Tidak Ditemukan
          </div>
        </div>

        {/* Pesan Error */}
        <h2 className="mt-8 text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
          Oops! Anda sepertinya tersesat.
        </h2>
        
        <p className="mt-4 text-gray-500 text-base md:text-lg max-w-lg">
          Maaf, halaman yang Anda cari mungkin telah dihapus, dipindahkan, atau memang tidak pernah ada.
        </p>

        {/* Tombol Aksi */}
        <a 
          href="/" 
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Kembali ke Beranda
        </a>
        
      </main>
    </div>
  );
}