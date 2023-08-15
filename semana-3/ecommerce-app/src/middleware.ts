import { NextRequest, NextResponse } from 'next/server';

export function middleware(req:NextRequest, res: NextResponse) {
  // Cada vez que se quiere acceder a una ruta, se ejecuta este middleware

  // Validar que exista una cookie de sesión = access
  const cookie = req.cookies.get("access");
  // console.log("cookie", cookie);
  const url = req.nextUrl.pathname;
  // console.log("url", url);

  if(url.includes("/admin") && !cookie) {
    // Si no existe la cookie, redireccionar a la página de login
    return NextResponse.redirect("http://localhost:3000/login");
  }

  return NextResponse.next();
}