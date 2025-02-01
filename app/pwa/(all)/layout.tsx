
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/my-pwa/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#b8e986" />
      </head>
      <body>
        <div>
          これはログインレイアウト
        </div>
        {children}
      </body>
    </html>
  );
}
