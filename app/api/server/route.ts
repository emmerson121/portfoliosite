import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // const formData = await req.body;
    // console.log(formData);
    const { name, email, phone, message } = await req.json();
    console.log(name, email, phone, message);

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: "emmerson@resend.dev", // Replace with your verified sender
      to: "emmanuelebiefie7@gmail.com", // Your receiving email
      subject: "Email from My Portfolio",
      html: `
      <form>
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        </form>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!", data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
