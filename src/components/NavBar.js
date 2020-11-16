import { Navbar, Icon, NavItem, Container } from "react-materialize";
import renderIf from "render-if";
import { firebaseApp } from "../firebase";

export const NavBar = ({ isLoggedin }) => {
  return (
    <div style={{ backgroundColor: "#1877f2" }}>
      <Container>
        <Navbar
          className="main-navbar"
          alignLinks="right"
          brand={
            <a className="brand-logo" href="#">
              Logo
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          {renderIf(isLoggedin)(
            <NavItem
              href=""
              onClick={() => {
                firebaseApp.auth().signOut();
              }}
            >
              Log Out
            </NavItem>
          )}
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
