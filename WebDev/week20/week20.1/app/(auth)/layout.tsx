import { ReactNode } from "react";

export default function Layout({ children }:Readonly<{children : ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <div className="text-4xl text-blue-400 mt-10 font-bold flex justify-center">
          Auth page
        </div>
        {children}
      </body>
    </html>
  );
}
