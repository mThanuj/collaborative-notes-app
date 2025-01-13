import { NextResponse } from "next/server";
import jwksClient from "jwks-rsa";
import jwt, { type Jwt, type JwtPayload } from "jsonwebtoken";

const client = jwksClient({
  jwksUri: `${process.env.KINDE_ISSUER_URL}/.well-known/jwks.json`,
});

export async function POST(req: Request) {
  try {
    const token = await req.text();

    const { header } = jwt.decode(token, { complete: true }) as Jwt;
    const { kid } = header;

    const key = await client.getSigningKey(kid);
    const signingKey = key.getPublicKey();
    const event = jwt.verify(token, signingKey) as JwtPayload;

    switch (event?.type) {
      case "user.updated":
        console.log(event.data);
        break;
      case "user.created":
        console.log(event.data);
        break;
      case "user.deleted":
        console.log(event.data);
        break;
      case "user.authentication_failed":
        console.log(event.data);
        break;
      case "user.authenticated":
        console.log(event.data);
        break;
      default:
        break;
    }
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 },
    );
  }
  return NextResponse.json({ status: 200, statusText: "success" });
}
