import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({dashboard}) {
  return (
    <div>
      <Navbar className="bg-success p-3">
        <Container>
          <Navbar.Brand className='text-light'>
            <Link to={'/'} className='text-light' style={{textDecoration:'none'}}>
                <i class="fa-brands fa-stack-overflow fa-3x"></i>{' '}
                <span className='fs-3 ms-3'>Project Fair</span>
            </Link>
          </Navbar.Brand>
          {
            dashboard&&
            <button className='btn btn-warning'>Logout<i class="fa-solid fa-power-off ms-2"></i></button>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header