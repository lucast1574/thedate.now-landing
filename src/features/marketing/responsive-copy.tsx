import type { ReactNode } from "react";
import { useTranslator } from "@/lib/i18n/react";
export default function ResponsiveCopy({
  children,
  mobile,
}: {
  children: ReactNode;
  mobile: string;
}) {
  const i18n = useTranslator();
  return (
    <>
      <span className="copy-desktop">{children}</span>
      <span className="copy-mobile">{i18n(mobile)}</span>
    </>
  );
}
