import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    const token = await getToken({
        req,
        secret: process.env.NEXT_AUTH_SECRET,
        secureCookie: process.env.NODE_ENV === "production" ? true : false,
    })

    if (token) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL('/authentication/login', req.url))
    }

}

export const config = {
    matcher: [
        "/course/:path*",
        "/booked-courses"
    ],
}