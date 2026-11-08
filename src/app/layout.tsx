import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/montserrat";
import "@fontsource/ibm-plex-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quonceptory Health",
  description: "Salud basada en evidencia para la red Quonceptory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
