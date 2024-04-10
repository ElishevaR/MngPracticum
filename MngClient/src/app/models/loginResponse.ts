export class LoginResponse {
    token!: string;
    userName!: string;
    expiresIn!: number; // מספר שניות עד שהטוקן יפוג
  }