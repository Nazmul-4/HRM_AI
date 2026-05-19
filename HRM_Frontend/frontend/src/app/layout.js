import './globals.css';

export const metadata = {
  title: 'WorkDo HRM SaaS',
  description: 'Production level HRM System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}