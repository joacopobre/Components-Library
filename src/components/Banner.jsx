import createMessage from "../hooks/createMessage"

export default function Banner({type,children}){
    
    const className = `banner ${type}`
    return(
        <div className={className}>
            <h1>{createMessage({type})}</h1>
            {children?<p>{children}</p>:null}
        </div>
    )
}