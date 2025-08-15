import createMessage from "../hooks/createMessage"

export default function Banner({variant,type,children}){
    
    const className = `banner ${type}`
    return(
        <div className={className}>
            <h1>{createMessage({type})}</h1>
            {variant?<p>{children}</p>:null}
        </div>
    )
}