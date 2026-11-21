import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      bride_groom_name,
      email,
      engagement_date,
      mehendi_date,
      sangeet_date,
      haldi_date,
      wedding_date,
      reception_date,
      venue,
      theme,
      custom_message,
    } = body;

    // Basic validation
    if (!bride_groom_name || !email || !wedding_date || !venue) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Access key securely fetched from server-side environment variables
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not defined in server environment variables.");
      return NextResponse.json(
        {
          success: false,
          message:
            "Enquiry service is temporarily unavailable. Please contact us directly.",
        },
        { status: 500 }
      );
    }

    // Format submission payload for existing backend processor
    const payload = {
      access_key: accessKey,
      subject: `New Wedding Invitation Enquiry from ${bride_groom_name}`,
      from_name: "Wedgram Designs Enquiry Portal",
      bride_groom_name,
      email,
      engagement_date: engagement_date || "N/A",
      mehendi_date: mehendi_date || "N/A",
      sangeet_date: sangeet_date || "N/A",
      haldi_date: haldi_date || "N/A",
      wedding_date,
      reception_date: reception_date || "N/A",
      venue,
      theme: theme || "traditional",
      custom_message: custom_message || "None",
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received successfully.",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            result.message ||
            "Unable to process your request at this time. Please try again.",
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Submission processing error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
