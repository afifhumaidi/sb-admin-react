function CardRegularDefault(props: {header: string ,children: string | JSX.Element| JSX.Element[]}) {
  return(
    <div className="card mb-4">
      <div className="card-header">
        {props.header}
      </div>
      <div className="card-body">
        {props.children}
      </div>
  </div>
  )
}

export default CardRegularDefault