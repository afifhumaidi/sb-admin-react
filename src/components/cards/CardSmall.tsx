function CardSmall(props: {title: string, children: string | JSX.Element, color: string, icon: JSX.Element}) {
  return(
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>
                {props.title}</div>
                {typeof(props.children) === 'string'? 
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{props.children}</div>
                  : props.children }
            </div>
            <div className="col-auto">
              {props.icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSmall