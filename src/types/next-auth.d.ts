
// Session型の拡張
declare module 'next-auth' {
  interface Session {
    user: {
      name: string;
      email: string;
      photoURL: string;
      uid: string;
    } 
  }
}

// JWT型の拡張
declare module 'next-auth/jwt' {
  interface JWT {
    name: string;
    email: string;
    photoURL: string;
    uid: string;
  }
}
