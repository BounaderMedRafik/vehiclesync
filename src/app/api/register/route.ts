import { NextResponse } from "next/server";
import { saltAndHashPassword } from "@/lib/password";
import UserRepository from "@/repositories/UserRepository";
import { sendEmail } from "@/services/EmailService";

export async function POST(request: Request) {
  const userRepository = new UserRepository();
  try {
    const { username, email, password } = await request.json();

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
      username,
      email: email || null,
      password: hashedPassword,
    });

    if (!user) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }

    // Send welcome email using the template
    if (user.email) {
      const subject = "Welcome to Our Service!";
      const templateName = "welcome";
      const context = { username: user.username };

      try {
        const emailSent = await sendEmail(
          user.email,
          subject,
          templateName,
          context
        );
        if (!emailSent) {
          console.error(`Failed to send welcome email to ${user.email}`);
        } else {
          console.log(`Welcome email sent successfully to ${user.email}`);
        }
      } catch (emailError) {
        // Correctly define emailError here
        console.error(
          `Error sending welcome email to ${user.email}:`,
          emailError
        );
      }
    }

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    // This is the main catch block for the POST function
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
