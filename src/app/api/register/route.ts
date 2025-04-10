import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { saltAndHashPassword } from "@/lib/password";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    console.log("Registering user...");
    const { username, email, password } = await request.json();

    console.log("Received data:", { username, email, password });

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    const userByUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (userByUsername) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    if (email) {
      const userByEmail = await prisma.user.findUnique({
        where: { email },
      });
      if (userByEmail) {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 400 }
        );
      }
    }

    const hashedPassword = await saltAndHashPassword(password);

    const user = await prisma.user.create({
      data: {
        username,
        email: email || null,
        password: hashedPassword,
      },
    });
    if (!user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
