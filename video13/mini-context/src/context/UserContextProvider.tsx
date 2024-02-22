"use client"

import React, { ReactNode } from "react";
import UserContext from './UserContext'

interface UserContextProviderProps {
    children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = React.useState()
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider