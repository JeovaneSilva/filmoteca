import "./globals.css";

export const metadata = {
  title: "Filmoteca",
  description: "Biblioteca de Filmes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
