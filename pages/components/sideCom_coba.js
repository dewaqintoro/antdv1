
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavItem, NavLink } from 'reactstrap';

import React, { Component } from 'react'

class SideComp extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          leftOpen: true,
          rightOpen: true,
        }
      }


      toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
      }
    
    render(props) {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';

 
        return (
            <div className="side1s">
                <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                    {/* <h3 className='title'>
                      Left header
                    </h3> */}
                  </div>
                  <div className='content'>


                  <div>
                    <p>List Based</p>
                    <Nav vertical>
                      <NavItem>
                        <NavLink href="#">Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                      </NavItem>
                    </Nav>
                    <hr />
                    <p>Link based</p>
                    <Nav vertical>
                      <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
                    </Nav>
                  </div>
                  </div>



              </div>
          </div>


          
            </div>
        )
    }
}



// const SideComp = (props) => {
     
//   return ( 
    
//   )
// }

export default SideComp
