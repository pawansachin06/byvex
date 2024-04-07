import { JWT, Session, DefaultSession, User } from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            id: string | number;
            accessToken: string | null | undefined;
            username: string | null | undefined;
            role: string | null | undefined;
        } & DefaultSession['user']
    }
    interface User {
        id: string | number;
        accessToken: string | null | undefined;
        username: string | null | undefined;
        role: string | null | undefined;
    }
    // interface JWT {
    //     accessToken: string | null;
    // }
}
