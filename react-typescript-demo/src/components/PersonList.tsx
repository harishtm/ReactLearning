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
                        <div>
                            {obj.fname} {obj.lname}
                        </div>
                    )
                })
            }
        </div>
    )
}