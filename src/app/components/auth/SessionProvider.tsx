"use client"

import { SessionProvider as Provider } from "next-auth/react"
import { ReactNode } from "react"

const SessionProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider>{children}</Provider>
    )
}

export default SessionProvider