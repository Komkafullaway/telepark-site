import "./globals.css";

export const metadata = {
  title: "Телепарк — авто под выкуп",
  description: "Аренда автомобилей под выкуп",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}