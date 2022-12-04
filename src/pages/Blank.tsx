import BodyPageTopLayout from "../layout/BodyPageTopLayout"
import Sidebar from "../components/Sidebar"
import ContentLayout from "../layout/ContentLayout"
import MainContentLayout from "../layout/MainContentLayout"
import Topbar from "../components/Topbar"

function Blank() {
  return(
    <BodyPageTopLayout>
      <Sidebar />
      <ContentLayout>
        <MainContentLayout>
          <Topbar />
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
          </div>
        </MainContentLayout>
      </ContentLayout>
    </BodyPageTopLayout>
  )
}

export default Blank