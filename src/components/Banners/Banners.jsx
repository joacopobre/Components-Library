import Banner from "./Banner";

export default function Banners(){
    return (
        <div className='banners'>
            <Banner type='success'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Banner type='warning'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, 
                ipsum similique veniam quo totam eius aperiam dolorum.
            </Banner>
            <Banner type='error'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </Banner>
            <Banner type='neutral'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
            </Banner>
        </div>
    )
}