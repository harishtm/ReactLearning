import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export const Rectangle = () => {

    const theme = useContext(ThemeContext)

    return (
        <div style={{backgroundColor: theme.secondary.main}}>
            Rectangle Theme Context
        </div>
    )
}