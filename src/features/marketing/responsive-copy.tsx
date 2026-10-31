import type { ReactNode } from "react";
export default function ResponsiveCopy({
  children,
  mobile,
}: {
  children: ReactNode;
  mobile: string;
}) {
  return (
    <>
      <span className="copy-desktop">{children}</span>
      <span className="copy-mobile">{mobile}</span>
    </>
  );
}
