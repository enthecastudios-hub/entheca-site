import { redirect } from "next/navigation";

// MeltABite has its own page at /meltabite.
export default function MeltABiteWorkPage() {
  redirect("/meltabite");
}
