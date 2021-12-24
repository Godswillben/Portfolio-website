export interface Stack {
    stack: string
    level: string
}
const Stack = (prop: Stack) => {
    return (
        <div className='stack-con'>
            <p className="stack font1">{prop.stack}</p>
            <p className="level font4">--{prop.level}--</p>
        </div>
    )
}

export default Stack
