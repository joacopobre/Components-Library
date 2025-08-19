import Testimonial from "./Testimonial";
import icon from "../../sources/profile.jpg"


export default function Testimonials(){
    return(
        <>  
            <Testimonial name="May Andersons" job="Workcation, CTO" icon={icon}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed urna nulla vitae laoreet augue.
                 Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </Testimonial>
            <Testimonial name="May Andersons" job="Workcation, CTO"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Sed urna nulla vitae laoreet augue.
                 Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
            </Testimonial>

        </>
    )
}