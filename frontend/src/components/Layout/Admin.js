import AdminNav from "../Header/AdminNav";


export default function AdminLayout({children}) {
  return (
    <>
      <div className="min-h-full">
        <AdminNav/>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
