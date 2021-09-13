type PersonProps = {
    names : {
        fname: string;
        lname: string
    }[]
}

export const PersonList = (props: PersonProps) => {
    return (
        <div>
            {
                props.names.map(obj => {
                    return(
                        <div key={obj.fname}>
                            {obj.fname} {obj.lname}
                        </div>
                    )
                })
            }
        </div>
    )
}