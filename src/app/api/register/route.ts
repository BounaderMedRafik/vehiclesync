import { NextResponse } from "next/server";
import { saltAndHashPassword } from "@/lib/password";
import UserRepository from "@/repositories/UserRepository";
import { randomUUID } from "crypto";
export async function POST(request: Request) {
  const userRepository = new UserRepository();
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

    const userByUsername = await userRepository.getByUserName(username);

    if (userByUsername) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 400 }
      );
    }

    if (email) {
      const userByEmail = await userRepository.getByEmail(email);
      if (userByEmail) {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 400 }
        );
      }
    }

    const hashedPassword = await saltAndHashPassword(password);

    const user = await userRepository.create({
      id: randomUUID(),
      username,
      email: email || null,
      password: hashedPassword,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
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
  }
}
