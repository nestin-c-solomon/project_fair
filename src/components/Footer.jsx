import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%', height:'300px'}} className="bg-success d-flex align-items-center justify-content-center flex-column">
        <div className="footer d-flex align-items-center justify-content-evenly w-100">
            <div className="website" style={{width:'400px'}}>
                <h4 className='text-light'><i class="fa-brands fa-stack-overflow"></i>{' '}Project Fair</h4>
                <h6 style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum magnam adipisci at voluptate hic aliquam. Iusto sequi amet vel deleniti. Dolor exercitationem quidem unde autem illo pariatur voluptate dolorum! In.</h6>
                <h6>Dolor exercitationem quidem unde autem illo</h6>
            </div>

            <div className="links d-flex flex-column">
                <h4 className='text-light'>Links</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none', color:'black'}}>Home Page</Link>
                <Link to={'/watch-history'} style={{textDecoration:'none', color:'black'}}>Watch History</Link>
            </div>
            <div className="guides d-flex flex-column">
                <h4 className='text-light'>Guides</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'black'}}>React</Link>
                <Link to={'https://react-bootstrap.netlify.app/docs/getting-started/introduction/'} style={{textDecoration:'none', color:'black'}}>React Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'black'}}>Bootswatch</Link>
            </div>
            <div className="contact ">
                <h4 className='text-light'>Contact Us</h4>
                <div className='d-flex mb-3'>
                    <input type="text" className='form-control' placeholder='Enter your EmailID' />
                    <button className='btn btn-warning ms-3'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-evenly'>
                    <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x  "></i></Link>
                    <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x  "></i></Link>
                    <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x  "></i></Link>
                    <Link style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x  "></i></Link>
                </div>
            </div>
        </div>
        <p className='mt-5'>Copyright © 2023 Project Fair. Built with React.</p>
    </div>
  )
}

export default Footer