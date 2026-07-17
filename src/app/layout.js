import { manrope } from "@/styles/fonts";
import "../styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";

export const metadata = {
  title: "Nirvag Pro - Reinvent Workflow",
  description: "Top 1% business experts in your niche with proven ROI results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <AOSProvider>
        <body>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </body>
      </AOSProvider>
    </html>
  );
}
