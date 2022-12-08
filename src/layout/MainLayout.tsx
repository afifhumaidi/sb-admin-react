import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Blank from "../pages/Blank"
import ButtonsPage from "../pages/components/ButtonsPage"
import CardsPage from "../pages/components/CardsPage"
import NotFound from "../pages/NotFound"

function MainLayout() {
  useEffect(() => {
    document.body.setAttribute("id", "page-top")

    return(() => {
      document.body.removeAttribute("id")
    })
  }, [])

  return(
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Routes>
            <Route index element={<Blank />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="blank" element={<Blank />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainLayout