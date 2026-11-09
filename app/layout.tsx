import "@fontsource-variable/nunito";
import "./globals.css";
import { Providers } from "@/shared/components/shared/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body>
        {" "}
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );
}
