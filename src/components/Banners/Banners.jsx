import Banner from './Banner'

export default function Banners() {
  return (
    <>
      <Banner type="success">Everything worked! You can proceed.</Banner>
      <Banner type="warning">Heads up! Please check your input.</Banner>
      <Banner type="error">There was a problem with your request.</Banner>
      <Banner type="neutral">Update available. Click to learn more.</Banner>
    </>
  )
}
