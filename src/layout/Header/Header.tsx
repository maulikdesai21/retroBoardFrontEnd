import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { MdDashboard } from 'react-icons/md';
import "./header.scss";
export const Header = () => {
  return (
    <Navbar className="mainNav" bg="dark" variant="dark">
        <MdDashboard className="mainIcon"/>
        <span className="titleText"> Agile Retro Board</span>
        <Button className="newBoardButton" variant="success">Create New Board</Button>
    </Navbar>
  )
}