type GreetProps = {
    name: string;
    age: number;
    isLoggedIn: boolean
}


/*

interface GreetProps {
    name: string;
}
*/

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name} your age is ${props.age}`: `Welcome Guest`
                }
            </h2>
        </div>
    )
}