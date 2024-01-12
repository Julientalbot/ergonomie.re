import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

export default async function LayoutBlog({ children }) {
  return (
    <div className="bg-base-300">
      <HeaderBlog />

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

      <Analytics />

      <Footer />
    </div>
  ); 
}
