"use server";
import { decryptPassword } from "@/lib/aes";
import prisma from "@/lib/db";

export const loginCheckUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return { message: "Username or password wrong.", success: false };
    if (!user.isActive) return { message: "Please verify your email before logging in.", success: false };
    const decryptPass = await decryptPassword(user?.password as string);
    if (decryptPass !== password) return { message: "Username or password wrong.", success: false };
    return { message: "Successfully logged in.", success: true, user };
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Something went wrong.", success: false };
  }
};