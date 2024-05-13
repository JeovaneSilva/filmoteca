import "./globals.css";

export const metadata = {
  title: "Filmoteca",
  description: "Biblioteca de Filmes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
