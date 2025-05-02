import { Client, SendEmailV3_1, LibraryResponse } from "node-mailjet";
import { getMailjetClient } from "@/lib/mailjet";

// Read sender details from environment variables
const SENDER_EMAIL = process.env.MAILJET_SENDER_EMAIL;
const SENDER_NAME = process.env.MAILJET_SENDER_NAME;

/**
 * Sends an email using the Mailjet client.
 *
 * @param toEmail - The recipient's email address.
 * @param subject - The subject line of the email.
 * @param htmlMessage - The HTML content of the email.
 * @returns A promise that resolves to true if the email was sent successfully, false otherwise.
 */
export const sendEmail = async (
  toEmail: string,
  subject: string,
  htmlMessage: string
): Promise<boolean> => {
  if (!SENDER_EMAIL || !SENDER_NAME) {
    console.error(
      "Mailjet sender email or name not configured in environment variables."
    );
    return false;
  }

  try {
    const mailjet: Client = getMailjetClient();
    const data: SendEmailV3_1.Body = {
      Messages: [
        {
          From: {
            Email: SENDER_EMAIL,
            Name: SENDER_NAME,
          },
          To: [
            {
              Email: toEmail,
            },
          ],
          Subject: subject,
          HTMLPart: htmlMessage,
        },
      ],
    };

    const result: LibraryResponse<SendEmailV3_1.Response> = await mailjet
      .post("send", { version: "v3.1" })
      .request(data);

    console.log("Mailjet send result:", result.body);

    const messageResult = result.body.Messages[0];
    return messageResult?.Status === "success";
  } catch (err) {
    console.error("Error sending email via Mailjet:", err);
    return false;
  }
};
