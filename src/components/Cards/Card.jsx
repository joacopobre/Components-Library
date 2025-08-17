import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getCardMeta from "../../hooks/getCardMeta"

export default function Card({type,children }){
    const {icon,message} = getCardMeta(type)
    const iconClass =`icon ${type}`
    return(
        <>
        <div className="card-wrap">
            <div className={iconClass}>
                {icon && <FontAwesomeIcon icon={icon} size="lg" />}
            </div>

            <div className="card">
                <h1>{message}</h1>
                <p>{children}</p>
            </div>
        </div>

        </>
        
    )
}