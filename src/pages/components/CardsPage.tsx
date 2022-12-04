import BodyPageTopLayout from "../../layout/BodyPageTopLayout"
import Sidebar from "../../components/Sidebar"
import ContentLayout from "../../layout/ContentLayout"
import MainContentLayout from "../../layout/MainContentLayout"
import Topbar from "../../components/Topbar"
import CardSmall from "../../components/cards/CardSmall"
import CardRegularDefault from "../../components/cards/CardRegularDefault"
import CardRegularBasic from "../../components/cards/CardRegularBasic"
import CardRegularDropdown from "../../components/cards/CardRegularDropdown"
import CardRegularCollapsable from "../../components/cards/CardRegularCollapsable"

function CardsPage() {
  return(
    <BodyPageTopLayout>
      <Sidebar />
      <ContentLayout>
        <MainContentLayout>
          <Topbar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Cards</h1>
            </div>
            <div className="row">
              <CardSmall title="Earnings (Monthly)" color="primary" icon={<i className="fas fa-calendar fa-2x text-gray-300"></i>}>$40,000</CardSmall>
              <CardSmall title="Earnings (Annual)" color="success" icon={<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}>$215,000</CardSmall>
              <CardSmall title="Tasks" color="info" icon={<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>}>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div className="progress-bar bg-info" role="progressbar"
                        style={{width: "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </div>
              </CardSmall>
              <CardSmall title="Pending Requests" color="warning" icon={<i className="fas fa-comments fa-2x text-gray-300"></i>}>18</CardSmall>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <CardRegularDefault header="Default Card Example">
                  This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                </CardRegularDefault>
                <CardRegularBasic header="Basic Card Example">
                  This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                </CardRegularBasic>
              </div>
              <div className="col-lg-6">
                <CardRegularDropdown header="Dropdown Card Example" headerDropdown="Dropdown Header" menuDropdown={["action", "some action"]}>
                  This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                </CardRegularDropdown>
                <CardRegularCollapsable header="Collapsable Card Example">
                  This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                </CardRegularCollapsable>
              </div>
            </div>
          </div>
        </MainContentLayout>
      </ContentLayout>
    </BodyPageTopLayout>
  )
}

export default CardsPage