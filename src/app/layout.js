import Menu from "@/components/Menu";
import "./globals.css";

const RootLayout = ({ children }) => (
  <html>
    <body>
      <Menu />
      {children}
    </body>
  </html>
);

export default RootLayout;
