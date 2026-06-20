import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StarfieldBackground } from "@/components/starfield-background";

const firaCode = Fira_Code({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "LATech",
  description: "Desenvolvimento de sistemas e Tecnologia da informação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" style={{ colorScheme: "dark" }}>
      {/* bg-background fica só como fallback (ex: antes do canvas montar / JS desabilitado);
          o fundo visível real é pintado pelo StarfieldBackground, fixo atrás de todo o conteúdo. */}
      <body className={`${firaCode.className} bg-background text-foreground selection:bg-lime-300/30 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StarfieldBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
