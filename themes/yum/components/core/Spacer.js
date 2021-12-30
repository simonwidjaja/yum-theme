export default function Spacer(props) {
  return (
    <div className="Spacer" style={{height: (props.height ? props.height : 40)+'px'}}></div>
  )
}
