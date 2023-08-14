"use client";

import React from "react";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextUser {
  user_id: number;
  level: number;
  name: string;
  profile_picture: string;
}

interface ContextProps {
  user: ContextUser[];
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);

function getInitialState() {

  let user = null;

  if (typeof window !== 'undefined') {
    user = localStorage.getItem("user");
  }

  return user ? JSON.parse(user) : [];
}

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
