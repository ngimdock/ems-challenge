import { redirect } from "react-router";

import { SectionCards } from "~/components/section-cards";

export async function loader() {
  // This redirects to the employees page.
  // If you want to create a home page with navigation buttons
  // to the employees page, you can remove the redirection.
  // return redirect("/employees");
}

export default function RootPage() {
  return <SectionCards />;
}
