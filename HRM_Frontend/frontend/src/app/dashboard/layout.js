import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Universal persistent UI shells */}
      <Sidebar />
      <Topbar />

      {/* Main workspace layout shifted past the fixed sidebar and topbar sizes */}
      <div className="pl-64 pt-16">
        <main className="p-6 max-w-[1600px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}