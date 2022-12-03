function MainContentLayout(props: { children: JSX.Element[] }) {
  return(
    <div id="content">
      {props.children}
    </div>
  )
}

export default MainContentLayout