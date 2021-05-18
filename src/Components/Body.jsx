import React from 'react'
import BodyProjects from './BodyProjects/BodyProjects'
import BodySkills from './BodySkills/BodySkills'
import ProjectHeader from './ProjectHeader/ProjectHeader'
import Education from './Education/Education'
import mark from '../img/mark.jpeg'

const Body = () => {
  return (
    <div>
      <div className='container m-auto p-3 d-flex'>
        <img src={mark} with='auto' className='card'/>
        <div className='container bg-warning card p-3 ' style={{opacity: "0.8"}}>
          <h2 className='container text-dark'>ABOUT ME</h2>
          <p className='container' with='auto'><i>
          "Hey! I´m Marcos. My taste for computing and programming led me to learn new technologies and new languages 
          by myself. I am proactive and capable of adapting to any circumstance and always giving my best 
          in projects. At the same time I strive to work as a team and promote values such as companionship and teamwork.
          Besides programming, I am passionate about music and music production. I am looking to establish myself in a 
          company that I can help with my skills and to continue growing in this world. It is not an obstacle to be able 
          to move to another country or city, I am open to new opportunities where they arise."</i></p>
        </div>
      </div>
      
      <BodySkills/>
      <ProjectHeader/>
      <div className='container'><BodyProjects/></div>
      <Education/>

    </div>
  )
}

export default Body;
