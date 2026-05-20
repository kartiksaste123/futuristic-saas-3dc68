import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Futuristic SaaS</title>
        <meta name="description" content="A futuristic and luxurious SaaS website." />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
}