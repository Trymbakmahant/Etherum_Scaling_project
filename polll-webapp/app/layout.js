import "./globals.css";

export const metadata = {
  title: "PolIl dApp",
  description: "Its a Opinion based Social media dApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
