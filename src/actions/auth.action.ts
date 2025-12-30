"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../auth";
import { AuthError } from "next-auth";

export const AdminLogin = async (provider: string) => {
  await signIn(provider, { redirectTo: "/admin/dashboard" });
  revalidatePath("/admin/dashboard");
};

export const ProviderLogin = async (provider: string) => {
  await signIn(provider, { redirectTo: "/dashboard" });
  revalidatePath("/provider/dashboard");
};

export const PatientLogin = async (provider: string) => {
  await signIn(provider, { redirectTo: "/dashboard" });
  revalidatePath("/patient/dashboard");
};

export const Logout = async () => {
  await signOut({ redirectTo: "/login" });
  revalidatePath("/login");
};

export const LoginWithCredential = async (formData: FormData) => {
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    role: formData.get("role") as string,
    redirectTo:
      formData.get("role") === "ADMIN"
        ? "/admin/dashboard"
        : formData.get("role") === "PATIENT"
        ? "/patient/dashboard"
        : "/provider/dashboard",
  };
  try {
    await signIn("credentials", rawFormData);
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error:
          error.type === "CredentialsSignin"
            ? "Invalid credentials!"
            : "Something went wrong!",
      };
    }
    throw error;
  }
};
