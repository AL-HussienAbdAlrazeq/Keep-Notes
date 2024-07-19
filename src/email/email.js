import nodemailer from "nodemailer";
import { emailHtml } from "./emailHtml.js";
import jwt from "jsonwebtoken"

export const sendMail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hessenabdalrazek1@gmail.com",
      pass: "pgcohcbctapoinic",
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  jwt.sign({email} , 's7slala' , async(err , token)=>{

    const info = await transporter.sendMail({
      from: '"Node js Cycle_42" <hessenabdalrazek1@gmail.com>',
      to: email,
      subject: "Hello ✔",
      html: emailHtml(token),
    });
    
  console.log("Message sent: %s", info.messageId);
  })



};
