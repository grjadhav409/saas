import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function layoutPrivate({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }
  return children;
}
