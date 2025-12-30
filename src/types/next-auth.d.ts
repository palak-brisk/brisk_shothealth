import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: "ADMIN" | "PROVIDER" | "PATIENT";
  }
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      image?: string;
       role: "ADMIN" | "PROVIDER" | "PATIENT";
    };
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role:  "ADMIN" | "PROVIDER" | "PATIENT";
  }
}
