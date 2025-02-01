import Head from "@/components/Head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body>
        <div>
          これはログインレイアウト
        </div>
        {children}
      </body>
    </html>
  );
}
