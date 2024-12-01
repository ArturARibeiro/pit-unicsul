export function getCookie(name: string, defaultValue: string | null = null): string | null {
  // Obtém todos os cookies e divide-os em pares nome=valor
  const cookies = document.cookie.split(';');

  // Itera sobre os cookies para encontrar aquele que corresponde ao nome
  for (const cookie of cookies) {
    // Remove espaços em branco ao redor e divide em nome=valor
    const [cookieName, cookieValue] = cookie.trim().split('=');

    // Retorna o valor do cookie, se o nome coincidir
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  // Se o cookie não for encontrado, retorna o valor padrão
  return defaultValue;
}
