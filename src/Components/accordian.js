import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Accordian() {
  return (
    <>
    <h1 style={{ textAlign: "center", fontWeight: "800" }}>Questions?</h1>
    <p style={{ textAlign: "center", fontWeight: "400" }}>We've got answers </p>
    <Accordion style={set}>
      <Accordion.Item eventKey="0" style={item}>
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={item}>
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={item}>
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" style={item}>
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" style={item}>
        <Accordion.Header>Accordion Item #5</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>
  )
}
const set = {
  width: "50%",
  margin: "auto",
}
const item = {
  borderLeft: "none", borderRight: "none", borderTop: "none",
  borderBottom: "1px solid black"
}

export default Accordian
