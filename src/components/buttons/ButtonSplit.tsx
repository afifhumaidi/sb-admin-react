function ButtonSplit(props: {color:string, size?: 'btn-sm'|'btn-lg', icon: JSX.Element, children: string}) {
  return(
    <a href="#" className={`btn btn-${props.color} btn-icon-split ${props.size}`}>
      <span className="icon text-white-50">
        {props.icon}
      </span>
      <span className="text">{props.children}</span>
    </a>
  )
}

export default ButtonSplit