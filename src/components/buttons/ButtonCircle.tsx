function ButtonCircle(props: {color:string, size?: 'btn-sm'|'btn-lg', children: JSX.Element}) {
  return(
    <a href="#" className={`btn btn-${props.color} btn-circle ${props.size}`}>
      {props.children}
    </a>
  )
}

export default ButtonCircle