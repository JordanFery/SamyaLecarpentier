import { notFound } from "next/navigation";

/** Unknown URLs inside a locale render the localised 404. */
export default function CatchAll() {
  notFound();
}
