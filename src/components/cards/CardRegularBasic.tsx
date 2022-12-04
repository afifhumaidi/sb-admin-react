function CardRegularBasic(props: {header: string ,children: string | JSX.Element| JSX.Element[]}) {
  return(
    <div className="card shadow mb-4">
      <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">{props.header}</h6>
      </div>
      <div className="card-body">
        {props.children}
      </div>
  </div>
  )
}

export default CardRegularBasic