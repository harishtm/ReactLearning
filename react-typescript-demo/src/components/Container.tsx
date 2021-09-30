type ContainerProps = {
    style: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.style}>
            Sample Text
        </div>
    )
}