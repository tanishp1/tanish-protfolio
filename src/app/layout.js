import "./globals.css";

export const metadata = {
  title: "Tanish Pawar | Web Developer Portfolio",
  description: "Portfolio of Tanish Pawar, a full-stack web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
