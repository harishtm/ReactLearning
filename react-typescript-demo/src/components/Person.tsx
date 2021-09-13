type PersonProps = {
    name : {
        fname: string;
        lname: string;
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div>
            {props.name.fname} {props.name.lname}
        </div>
    )
}