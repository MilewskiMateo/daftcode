import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarMenu,
  SideBarBtn,
  SidebarWraper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>

          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>

          <SidebarLink to="courses" onClick={toggle}>
            Courses
          </SidebarLink>

          <SidebarLink to="news" onClick={toggle}>
            News
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarBtn to="/login">Log in</SideBarBtn>
        </SideBtnWrap>
      </SidebarWraper>
    </SidebarContainer>
  );
};

export default Sidebar;
