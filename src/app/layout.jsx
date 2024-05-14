import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Filmoteca",
  description: "Biblioteca de Filmes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
