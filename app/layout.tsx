import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased text-gray-800 dark:bg-gray-800 dark:text-slate-500`}>{children}</body>
    </html>
  );
}