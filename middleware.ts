import { NextRequest, NextResponse } from 'next/server';

// Lista de flags válidas (não mais codes)
const validFlags = ['br', 'us', 'za', 'ae', 'cr', 'nz', 'hk', 'in', 'sg', 'es', 'fr', 'de', 'it', 'pt', 'ca', 'au', 'gb', 'mx', 'ar', 'cl', 'co', 'pe', 've', 'uy', 'py', 'bo', 'ec', 'nl', 'be', 'ch', 'at', 'dk', 'fi', 'pl', 'cz', 'hu', 'ro', 'bg', 'gr', 'tr', 'ru', 'cn', 'jp', 'kr', 'id', 'th', 'my'];
const defaultFlag = 'br';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Verifica se o pathname já tem uma flag válida
  const pathnameHasFlag = validFlags.some(
    (flag) => pathname.startsWith(`/${flag}/`) || pathname === `/${flag}`
  );

  // Se já tem flag válida, permite a requisição
  if (pathnameHasFlag) return;

  // Se é a raiz, redireciona para a flag padrão
  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(`/${defaultFlag}`, request.url)
    );
  }

  // Para qualquer outra URL (incluindo 404s), redireciona para a flag padrão
  // Se a URL começa com /, remove o / inicial para evitar dupla barra
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Cria a nova URL com a flag padrão
  const newUrl = new URL(`/${defaultFlag}${cleanPath}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
