import { Inter, Lusitana, Poppins } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});
