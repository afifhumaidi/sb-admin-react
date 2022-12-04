function CardRegularCollapsable(props: {header: string ,children: string | JSX.Element| JSX.Element[]}) {
  return(
    <div className="card shadow mb-4">
      <a href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
        <h6 className="m-0 font-weight-bold text-primary">{props.header}</h6>
      </a>
      <div className="collapse show" id="collapseCardExample">
        <div className="card-body">
          {props.children}
        </div>
      </div>
  </div>
  )
}

export default CardRegularCollapsable