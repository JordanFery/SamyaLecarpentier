import { ViewTransition } from "react";

/** Short fade between pages. Lives in each page, not the layout, so enter/exit fire. */
export default function PageTransition({ children }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
