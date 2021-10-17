import { useContext } from "react";
import { UserContext } from "./UserContext";


export const User = () => {

    const user_context = useContext(UserContext)

    const handleLogin = () => {
        user_context.setUser({
            name: 'john',
            email: 'john@gmail.com'
        })
    }

    const handleLogout = () => {
        user_context.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User name is {user_context.user?.name}</div>
            <div>User email is {user_context.user?.email}</div>
        </div>
    )
}
