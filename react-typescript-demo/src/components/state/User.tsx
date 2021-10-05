import { useState } from "react"


type AuthUser = {
    name: string,
    email: string
}

export const User = () => {
    
    const [user, setUser] = useState<AuthUser | null>(null)

    // Type assertion

    // const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'John Smith',
            email: 'smith@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>Logout</button>
            {/* Before type assertion */}
                <div> Username: {user?.name}</div>
                <div> Email: {user?.email}</div>
            
            {/* After type assertion  "?" is not needed as empty object is defined initially 
                <div> Username: {user.name}</div>
                <div> Email: {user.email}</div>
            */}
        </div>
    )
}