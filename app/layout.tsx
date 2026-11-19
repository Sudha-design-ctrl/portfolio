import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sudha Gowda | Software Developer & Full-Stack Engineer',
  description:
    'Personal portfolio of Sudha Gowda — Software Developer, Full-Stack Web Developer, and Data Analytics Enthusiast.',
  keywords: [
    'Sudha Gowda',
    'Software Developer',
    'Full-Stack Developer',
    'Data Analytics',
    'Next.js',
    'TypeScript',
    'React',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] antialiased selection:bg-indigo-600/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
