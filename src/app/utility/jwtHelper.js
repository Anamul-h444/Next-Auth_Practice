import { SignJWT, jwtVerify } from "jose";

//Create Token
export async function CreateToken(email) {
  //Encode secret key
  const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

  //Create Token
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION)
    .sign(secretKey);
  return token;
}

//Set cookie in browser with token
export async function CreateCookie(email) {
  let token = await CreateToken(email);
  return {
    "Set-Cookie": `token= ${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
}

export async function VerifyToken(token) {
  //Encode secret key
  const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

  //Decode token
  let decoded = await jwtVerify(token, secretKey);

  return decoded["payload"];
}
