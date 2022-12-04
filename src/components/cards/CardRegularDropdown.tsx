function CardRegularDropdown(props: {header: string, headerDropdown: string ,children: string | JSX.Element| JSX.Element[], menuDropdown: string[]}) {
  return(
    <div className="card shadow mb-4">
      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
        <h6 className="m-0 font-weight-bold text-primary">{props.header}</h6>
        <div className="dropdown no-arrow">
          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
            <div className="dropdown-header">{props.headerDropdown}:</div>
            {props.menuDropdown.map((data, index) => <a key={index} className="dropdown-item" href="#">{data}</a>)}
          </div>
        </div>
      </div>
      <div className="card-body">
        {props.children}
      </div>
  </div>
  )
}

export default CardRegularDropdown