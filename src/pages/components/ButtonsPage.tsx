import BodyPageTopLayout from "../../layout/BodyPageTopLayout"
import Sidebar from "../../components/Sidebar"
import ContentLayout from "../../layout/ContentLayout"
import MainContentLayout from "../../layout/MainContentLayout"
import Topbar from "../../components/Topbar"
import CardRegularBasic from "../../components/cards/CardRegularBasic"
import ButtonCircle from "../../components/buttons/ButtonCircle"
import ButtonBrand from "../../components/buttons/ButtonBrand"
import ButtonSplit from "../../components/buttons/ButtonSplit"

function ButtonsPage() {
  return(
    <BodyPageTopLayout>
      <Sidebar />
      <ContentLayout>
        <MainContentLayout>
          <Topbar />
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Buttons</h1>
            <div className="row">
              <div className="col-lg-6">
                <CardRegularBasic header="Circle Buttons">
                  <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>
                  <div className="mb-2">
                    <code>.btn-circle</code>
                  </div>
                  <ButtonCircle color="primary">
                    <i className="fab fa-facebook-f"></i>
                  </ButtonCircle>
                  <ButtonCircle color="success">
                  <i className="fas fa-check"></i>
                  </ButtonCircle>
                  <ButtonCircle color="info">
                  <i className="fas fa-info-circle"></i>
                  </ButtonCircle>
                  <ButtonCircle color="warning">
                  <i className="fas fa-exclamation-triangle"></i>
                  </ButtonCircle>
                  <ButtonCircle color="danger">
                  <i className="fas fa-trash"></i>
                  </ButtonCircle>

                  <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-sm</code>
                  </div>
                  <ButtonCircle color="primary" size="btn-sm">
                    <i className="fab fa-facebook-f"></i>
                  </ButtonCircle>
                  <ButtonCircle color="success" size="btn-sm">
                  <i className="fas fa-check"></i>
                  </ButtonCircle>
                  <ButtonCircle color="info" size="btn-sm">
                  <i className="fas fa-info-circle"></i>
                  </ButtonCircle>
                  <ButtonCircle color="warning" size="btn-sm">
                  <i className="fas fa-exclamation-triangle"></i>
                  </ButtonCircle>
                  <ButtonCircle color="danger" size="btn-sm">
                  <i className="fas fa-trash"></i>
                  </ButtonCircle>
                  
                  <div className="mt-4 mb-2">
                    <code>.btn-circle .btn-lg</code>
                  </div>
                  <ButtonCircle color="primary" size="btn-lg">
                    <i className="fab fa-facebook-f"></i>
                  </ButtonCircle>
                  <ButtonCircle color="success" size="btn-lg">
                  <i className="fas fa-check"></i>
                  </ButtonCircle>
                  <ButtonCircle color="info" size="btn-lg">
                  <i className="fas fa-info-circle"></i>
                  </ButtonCircle>
                  <ButtonCircle color="warning" size="btn-lg">
                  <i className="fas fa-exclamation-triangle"></i>
                  </ButtonCircle>
                  <ButtonCircle color="danger" size="btn-lg">
                  <i className="fas fa-trash"></i>
                  </ButtonCircle>
                </CardRegularBasic>
                <CardRegularBasic header="Brand Buttons">
                  <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.</p>
                  <p>You can create more custom buttons by adding a new color variable in the <code>_variables.scss</code> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <code>_buttons.scss</code> file.</p>
                  <ButtonBrand brand="google">.btn-google</ButtonBrand>
                  <ButtonBrand brand="facebook">.btn-facebook</ButtonBrand>
                </CardRegularBasic>
              </div>
              <div className="col-lg-6">
                <CardRegularBasic header="Split Buttons with Icon">
                  <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and the markup in the examples below. The examples below also use the <code>.text-white-50</code> helper class on the icons for additional styling, but it is not required.</p>
                  
                  <ButtonSplit color="primary" icon={<i className="fas fa-flag"></i>}>
                    Split Button Primary
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="success" icon={<i className="fas fa-check"></i>}>
                    Split Button Success
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="info" icon={<i className="fas fa-info-circle"></i>}>
                    Split Button Info
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="warning" icon={<i className="fas fa-exclamation-triangle"></i>}>
                    Split Button Warning
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="danger" icon={<i className="fas fa-trash"></i>}>
                    Split Button Danger
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="secondary" icon={<i className="fas fa-arrow-right"></i>}>
                    Split Button Secondary
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="light" icon={<i className="fas fa-arrow-right"></i>}>
                    Split Button Light
                  </ButtonSplit>
                  <div className="mb-4"></div>
                  <p>Also works with small and large button classes!</p>
                  <ButtonSplit color="primary" size="btn-sm" icon={<i className="fas fa-flag"></i>}>
                    Split Button Primary
                  </ButtonSplit>
                  <div className="my-2"></div>
                  <ButtonSplit color="primary" size="btn-lg" icon={<i className="fas fa-flag"></i>}>
                    Split Button Primary
                  </ButtonSplit>
                </CardRegularBasic>
              </div>
            </div>
          </div>
        </MainContentLayout>
      </ContentLayout>
    </BodyPageTopLayout>
  )
}

export default ButtonsPage