import { Inter } from "next/font/google";
// import PlausibleProvider from "next-plausible";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = {
  ...getSEOTags(),
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          {/* <PlausibleProvider domain={config.domainName} /> */}
          {/* D'autres éléments de <head> peuvent être ajoutés ici */}
          <title>ergonomie.re</title> {/* Titre ajouté - considérez si cela doit être ici ou géré différemment */}
        </head>
      )}
      <body>
        {/* ClientLayout contient tous les wrappers clients (support chat Crisp, messages toast, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
        <SpeedInsights /> {/* Composant SpeedInsights ajouté */}
        <Analytics /> {/* Composant Analytics ajouté */}
      </body>
    </html>
  );
}
