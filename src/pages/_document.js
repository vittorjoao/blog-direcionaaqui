import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className="bg-slate-200 dark:bg-zinc-700 text-zinc-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
