import { fontVariable } from "@/assets/font/fonts";
import { Mount } from "@/components";
import { StyleHelper } from "@/helpers";
import { RootProvider } from "@/providers/RootProvider";
import { ColorSchemeScript } from "@mantine/core";
import { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.scss";

export const metadata: Metadata = {
  description:
    "ШАблон приложения на next.js при создании приложения стоит в первую очередь изменить мета теги",
  title: "Шаблон",
};

const htmlClasses = StyleHelper.merge(...fontVariable);

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={htmlClasses} lang="ru">
      <head>
        <Mount>
          <ColorSchemeScript />
        </Mount>
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
