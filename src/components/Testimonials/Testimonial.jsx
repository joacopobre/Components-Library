import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTowerObservation } from '@fortawesome/free-solid-svg-icons'


export default function Testimonial({icon=null,name,job,children}){
    const className = icon ? "testimonial with-icon" : "testimonial no-icon"
    return(
        <section className={className}>
            {icon && (
                <img 
                    src={icon}
                    alt="Profile picture"
                    className="profile"
                />
            )}
            <div className="content">
                {icon ? (<span className="quote-mark">"</span>):
                (<h1>
                    <FontAwesomeIcon icon={faTowerObservation} className="logo"/>
                    Work<span className="cation">cation</span>
                    </h1>)}
                <p>"{children}"</p>
            </div>
            <div className="footer">
                <p className="name">{name}</p>
                <p className="role">{job}</p>
            </div>

        </section>
    )
    
}