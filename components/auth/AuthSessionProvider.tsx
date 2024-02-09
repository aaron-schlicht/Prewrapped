"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";

interface AuthSessionProviderProps {
  children: React.ReactNode;
  session: Session | null | undefined;
}

const AuthSessionProvider: FC<AuthSessionProviderProps> = ({
  session,
  children,
}) => <SessionProvider session={session}>{children}</SessionProvider>;

export default AuthSessionProvider;
