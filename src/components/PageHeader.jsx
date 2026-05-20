import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
  // Memastikan breadcrumb bisa menerima string atau array
  const breadcrumbList = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4 mb-6 bg-white rounded-xl shadow-sm">
      <div id="pageheader-left" className="flex flex-col">
        <h1 id="page-title" className="text-3xl font-semibold text-gray-800">
          {title}
        </h1>
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-sm">
          {breadcrumbList.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-500">{item}</span>
              {index < breadcrumbList.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div id="action-button">
        {/* Slot untuk tombol Add Orders / Add Customer */}
        {children}
      </div>
    </div>
  );
}