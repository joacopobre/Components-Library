

export default function Badge({variant="",color="gray",children}){
    const className = `badge ${variant} ${color}`
    return(
        <span className={className}>{children}</span>
    )
}