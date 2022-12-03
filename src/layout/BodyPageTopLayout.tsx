import { useEffect } from "react"

function BodyPageTop(props: { children: JSX.Element[] }) {
  useEffect(() => {
    document.body.setAttribute("id", "page-top")

    return(() => {
      document.body.removeAttribute("id")
    })
  }, [])

  function sidebarToggle() {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  }
  
  return(
    <div id="wrapper">
      {props.children}
    </div>
  )
}

export default BodyPageTop
