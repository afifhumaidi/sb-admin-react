function ContentLayout(props: { children: JSX.Element }) {
  return(
    <div id="content-wrapper" className="d-flex flex-column">
      {props.children}
    </div>
  )
}

export default ContentLayout