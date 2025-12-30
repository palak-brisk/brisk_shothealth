import SignInForm from "@/app/auth/signin/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BriskMD | Signin",
  description: "BriskMD | Signin",
};

export default function SignIn() {
  return <SignInForm />;
}
