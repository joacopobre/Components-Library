import Testimonial from './Testimonial'
import profile from '../../sources/profile.jpg'

export default function Testimonials() {
  return (
    <>
      <Testimonial name="Leslie Alexander" job="CEO">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit…”
      </Testimonial>

      <Testimonial imageSrc={profile} name="Jacob Jones" job="Product Lead">
        “Sed urna nulla vitae laoreet augue. Amet feugiat est integer…”
      </Testimonial>
    </>
  )
}
