export abstract class LocalStorage {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public getItem() {
    return localStorage.getItem(this.key);
  }

  public setItem(value: string) {
    localStorage.setItem(this.key, value);
  }

  public removeItem() {
    localStorage.removeItem(this.key);
  }
}
