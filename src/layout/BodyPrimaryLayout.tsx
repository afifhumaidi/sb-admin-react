import { useEffect } from "react"

function BodyPrimaryLayout(props: { children: JSX.Element }) {
  useEffect(() => {
    document.body.classList.add("bg-gradient-primary")
    console.log(typeof(props.children))

    return(() => {
      document.body.classList.remove("bg-gradient-primary")
    })
  }, [])
  
  return(
    props.children
  )
}

export default BodyPrimaryLayout
