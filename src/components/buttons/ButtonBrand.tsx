function ButtonBrand(props: {brand:'facebook'|'google', children: string}) {
  return(
    <a href="#" className={`btn btn-${props.brand} btn-block`}><i className={`fab fa-${props.brand + (props.brand === "facebook" ? "-f" : "")} fa-fw`}></i>{props.children}</a>
  )
}

export default ButtonBrand