// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";
import emailjs from "@emailjs/browser";
/*


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FORM_EMAIL;

emailjs
  .sendForm(
    "service_lmi5wd4",
    "template_h0cd50b",
    form.current,
    "J-nJnPiDE3gPrDh8G"
  )
  .then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      setSuccess(true);
      setFailure(false);
    },
    (err) => {
      console.log("FAILED...", err);
      alert("Your file is being uploaded!");
      setFailure(true);
    }
  );

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["singhabijesh7@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
*/