import Badge from './Badge'

export default function Badges() {
  return (
    <div className="badges">
      <Badge>Gray</Badge>
      <Badge color="red">Red</Badge>
      <Badge variant="pill" color="yellow">Yellow</Badge>
      <Badge color="green">Green</Badge>
      <Badge variant="pill" color="blue">Blue</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge variant="pill" color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge variant="pill">Pill</Badge>
    </div>
  )
}
