import type { Metadata } from "next";
import { styles } from './styles'

export const metadata: Metadata = {
  title: "AterPublicació",
  description: "ASTER, Agrupació Astronòmica de Barcelona",
  
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ASTER - Agrupació Astronòmica de Barcelona - Newsletter</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" sizes="16x16"></link>
        <style>
          {styles}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
