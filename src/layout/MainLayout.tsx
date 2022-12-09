import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Blank from "../pages/Blank"
import Charts from "../pages/Charts"
import Tables from "../pages/Tables"
import ButtonsPage from "../pages/components/ButtonsPage"
import CardsPage from "../pages/components/CardsPage"
import NotFound from "../pages/NotFound"
import Dashboard from "../pages/Dashboard"
import Colors from "../pages/utilities/Colors"
import Borders from "../pages/utilities/Borders"
import Animations from "../pages/utilities/Animations"
import Other from "../pages/utilities/Other"

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
            <Route index element={<Dashboard />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="utilities-color" element={<Colors />} />
            <Route path="utilities-border" element={<Borders />} />
            <Route path="utilities-animation" element={<Animations />} />
            <Route path="utilities-other" element={<Other />} />
            <Route path="blank" element={<Blank />} />
            <Route path="charts" element={<Charts />} />
            <Route path="tables" element={<Tables />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout