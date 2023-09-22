import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';
import { Constant } from '../../utilities';
import SocialMedia from '../SocialMedia/SocialMedia';

const Header=() => {
  return (
    <div id="header" className='cover'>
      <div className='overlay'></div>
       <Container>
          <Row>
            <Col md={{span: 8, offset:2}} text-center>
              <div className='display-t'>
                  <div className='display-tc'>
                    <div className='profile-thumb'></div>
                    <h1><span>{Constant.NAME}</span></h1>
                    <h3><span>{Constant.OCCUPATION}</span></h3>
                    <SocialMedia />
                  </div>
              </div>
            </Col>
          </Row>
       </Container>
    </div>
  )
}

export default Header;