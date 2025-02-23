export default function Dashboard() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid gap-4">
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Selamat Datang!</h2>
            <p>Ini adalah halaman dashboard kamu.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Status</h3>
            <p>Semua sistem berjalan normal</p>
          </div>
        </div>
      </div>
    )
  }