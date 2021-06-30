export class GetService {
  _apiBase = 'http://localhost:3000/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }
}