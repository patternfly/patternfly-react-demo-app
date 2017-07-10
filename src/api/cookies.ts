export const KEY_LOGIN_COOKIE = 'LOGIN_COOKIE';

export const cookieApi = {
  setCookie(
    cookieKey: string,
    cookieValue: string,
    minutesToExpiration: number
  ) {
    const d = new Date();
    d.setTime(d.getTime() + minutesToExpiration * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cookieKey}=${JSON.stringify(
      cookieValue
    )};${expires};path=/`;
  },
  getCookie(cookieKey: string) {
    const name = `${cookieKey}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return '';
  }
};
