import React from 'react';
import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
  return (
    <div>
      <>
        <AdminNavbar />
        <div className="min-h-full">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main className="mx-2 text-2xl font-bold my-4">Welcome admin!</main>
        </div>
      </>
    </div>
  );
};

export default AdminDashboard;
