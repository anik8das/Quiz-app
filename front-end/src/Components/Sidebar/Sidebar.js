import {Nav} from 'react-bootstrap';

function Sidebar(){
    return(
        <Nav className = "flex-column" variant="pills" defaultActiveKey="/home">
            <h3>Category</h3>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled">
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
    );
}

export default Sidebar;