import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { CreateCookie } from "@/app/utility/jwtHelper";

//Login controller
export const POST = async (req, res) => {
  const JSON = await req.json();
  const email = JSON["email"];
  const password = JSON["password"];

  //Check database
  if (email === "a@gmail.com" && password === "1234") {
    const cookie = await CreateCookie(email);

    return NextResponse.json(
      { status: true, message: "Login Success!" },
      { status: 201, headers: cookie }
    );
  } else {
    return NextResponse.json({ status: false, message: "Login Fail!" });
  }
};

//Log out controller

export const GET = async (req, res) => {
  cookies().delete("token");
  return NextResponse.json({ status: true, message: "Log out success!" });
};
