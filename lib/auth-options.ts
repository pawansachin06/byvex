import axios, { AxiosError } from 'axios';
import type { ISODateString, NextAuthOptions, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export interface CustomSession {
    user?: CustomUser;
    expires: ISODateString;
}

export interface CustomUser {
    id?: string | number | null;
    name?:  string | null;
    email?: string | null;
    image?: string | null;
    token?: string | null;
    accessToken?: string | null;
    role?: string | null;
    username?: string | null;
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token, user }: {
            session: CustomSession,
            token: JWT, user: User
        }) {
            session.user = token.user as CustomUser;
            return session;
        }
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username:',
                    type: 'text',
                    autoComplete: 'username',
                    placeholder: 'your-cool-name',
                },
                password: {
                    label: 'Password:',
                    type: 'password',
                    autoComplete: 'current-password'
                },
            },
            async authorize(credentials, req) {
                console.log(credentials?.username, credentials?.password);
                try {
                    const res = await axios.post('https://api.byvex.com/api/v1/register', {
                        name: 'Alvin',
                        email: 'asf' + Date.now() + 'aaf@byvez.com',
                        username: Date.now() + 'asdf' + credentials?.username,
                        password: credentials?.password,
                    });
                    console.log(res.data);
                    if (res.data.user) {
                        return res.data.user;
                    } else {
                        return null;
                    }
                } catch (err) {
                    const error = err as Error | AxiosError;
                    if (axios.isAxiosError(error)) {
                        console.log('Axios error', error.response?.data);
                    } else {
                        console.log('native error', error.message);
                    }
                    return null;
                }
            }
        }),
    ],
}
