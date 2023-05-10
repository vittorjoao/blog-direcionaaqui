import Script from "next/script";
import Navbar from "@/components/ui/navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Direciona Aqui!",
  description: "Direciona Aqui!",
  keywords: "Direciona Aqui!",
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-200 dark:bg-zinc-700 text-zinc-900 dark:text-slate-50">
        <Script type="text/javascript" src="/static/theme.js" />
        <Navbar />
        <main className="container p-8">{children}</main>
      </body>
    </html>
  );
}
