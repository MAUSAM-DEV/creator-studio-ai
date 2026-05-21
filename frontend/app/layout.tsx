import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Creator Studio AI",
  description:
    "Professional AI Creator Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <AppShell>
          {children}
        </AppShell>

      </body>
    </html>
  );
}