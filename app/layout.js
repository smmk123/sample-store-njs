import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navBar'
import NoSsr from '@mui/base/NoSsr';
import { AuthProvider } from './context/AuthProvider'
import { CartProvider } from './context/CartProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sample-Store',
  description: 'Frontend',
}

export default function RootLayout({ children }) {
  return (
    <>
<html lang="en">
      
      <body className={inter.className}>
      <NoSsr>
      <AuthProvider>
      <CartProvider>
      <Navbar/>
      {children}
      </CartProvider>
      </AuthProvider>
      </NoSsr>
      </body>
      
      </html>
    </>
  )
}
