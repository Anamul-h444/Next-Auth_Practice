import { VerifyToken } from "../utility/jwtHelper";
import { NextResponse } from "next/server";

export async function CheckCookieAuth(req) {
  try {
    // Attempt to retrieve the token from cookies
    const token = req.cookies.get("token");
    console.log("token", token); //Pring object{name:token, value:....}

    if (!token) {
      // Handle the case when the token is not found in cookies
      // throw new Error("Token not found in cookies");
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Verify the token and get the payload
    const payload = await VerifyToken(token.value);
    console.log("payload", payload);

    // Modify headers based on token payload
    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);

    // Continue the request with modified headers
    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (error) {
    // Handle errors, e.g., redirect to login page
    console.error("Authentication error:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
