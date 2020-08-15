import React from "react";
import classNames from "classnames"; 
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import TopBs from "./TopBs";
import CardComp from "./CardComp";
import CardIndo from "./CardIndo"; 
import { connect } from "react-redux";

const ContentBs = ({ sidebarIsOpen, toggleSidebar }) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <TopBs toggleSidebar={toggleSidebar}/>
      {/* <h1>konten</h1> */}
      {/* <div className="card1">
        <CardComp/>
        <CardComp/>
        <CardComp/>
        <CardComp/>
      </div> */}

      {/* <CardIndo/> */}
  </Container>
  )
}

export default connect() (ContentBs)