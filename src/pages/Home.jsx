import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from '../Assets/home_img.avif'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'

function Home() {

    //state to store token
    const [isLogin,setIsLogin] = useState(false)

    const [homeProject,setHomeProject] = useState([])

    const getHomeProject = async()=>{
        const result = await homeProjectAPI()
        console.log(result);
        setHomeProject(result.data)
        console.log(homeProject);
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsLogin(sessionStorage.getItem("token"))
        }
        else{
            setIsLogin("")
        }
    },[])
    console.log(isLogin);

    useEffect(()=>{
        getHomeProject()
    },[])

  return (
    <>
    <div style={{width:'100%', height:'100vh', backgroundColor:'yellowgreen'}} className='mb-5 bg-success' >
        <div className='container-fluid rounded'>
            <Row className='align-items-center p-5'>
                <Col sm={12} md={6}>
                    <h1 className='text-light mb-4' style={{fontSize:'100px'}}>Project Fair</h1>
                    <p>Ones stop destination for all software development projects</p>
                    {isLogin?
                    <Link to={'/dashboard'} className='btn btn-success rounded'>Manage Projects <i class="fa-solid fa-arrow-right ms-3"></i></Link>:
                    <Link to={'/login'} className='btn btn-success rounded'>Get Started <i class="fa-solid fa-arrow-right ms-3"></i></Link>}
                </Col>
                <Col sm={12} md={6} style={{marginTop:'100px'}}>
                    <img src={titleImage} alt="" className='w-100' style={{borderRadius:'50%'}} />
                </Col>
            </Row>
        </div>
    </div>
    

    {/* Section for all projects */}

    <div className='all-project mt-5 mb-5'>
        <div className='text-center'>
            <h1>Explore Our Projects</h1>


            <marquee scrollAmount={20} className='mt-5'>
                <div className='d-flex'>

                    { homeProject?.length>0?
                        homeProject?.map((item)=>(<div className='ms-5' style={{width:'500px'}}>
                        <ProjectCard project={item}/>
                    </div>))
                        :
                        null
                    }
    
                    
    
                </div>
            </marquee>

            <div className='text-center mt-5'>
                <h6><Link to={'/project'}>See More Projects</Link></h6>
            </div>

        </div>

    </div>
    
    </>
  )
}

export default Home