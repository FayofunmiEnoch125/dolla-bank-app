import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <br></br>
            <div>
              <SidebarLink to="about" onClick={toggle}>
                About
              </SidebarLink>
            </div>
            <div>
              <SidebarLink to="discover" onClick={toggle}>
                Discover
              </SidebarLink>
            </div>
            <div>
              <SidebarLink to="services" onClick={toggle}>
                Services
              </SidebarLink>
            </div>
            <div>
              <SidebarLink to="signup" onClick={toggle}>
                Sign Up
              </SidebarLink>
            </div>
          </SidebarMenu>

          <div>
            <SideBtnWrap>
              <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
          </div>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
