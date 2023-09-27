import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../Images/dummyImage.png';
import projects from './Projects';

const ProjectItemStyles = styled.div`
    .projectItem_img{
        height:400px;
        width: 90%;
        margin: auto;
        overflow: hidden;
        border-radius: 12px;
        border: 3px solid black;
        img{
            display: inline-block;
            height: 100%;
            width: 100%;
        }
    }
    .projectItem_info {
        width: 90%;
        margin: 1rem auto 1rem;
        padding: 1rem;
        border: 4px solid black;
        border-radius: 12px;
    }
    .projectItem_title {
      font-size: 2.2rem;
      text-align: center;
    }
    .projectItem_desc {
      font-size: 1.6rem;
      font-family: 'Poppins';
      margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
      .projectItem_img {
        height: 350px;
      }
    }
    .projectButton{
        display: inline-block;
        font-size: 1.8rem;
        text-decoration: underline;
        margin: 2rem 0;
        color: royalblue;
        border: 2px solid black;
        border-radius: 10px;
        padding:10px;
        margin:10px;
	      display: flex;
	      flex-direction: column;
	      justify-content: center;
	      text-align: center;
    }
    .projectButton:hover{
      background-color: rgb(66, 6, 122);
      color:white;
    }
    
`;


const ProjectItem = ({
    img= ProjectImg,
    title= 'Project Name',
    desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod distinctio, doloremque pariatur reprehenderit cum culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, sit.',
    link,
}
) => {
  return (
    <ProjectItemStyles>
        <div className="projectItem_img">
            <img src={img} alt="project Image" />
        </div>
        <div className="projectItem_info">
            <h3 className="projectItem_title">
            {title}
            </h3>
            <p className="projectItem_desc">
             {desc}
            </p>
            {link && <a className='projectButton' href={link} target='_blank' rel='noreferrer'>Open Project</a>}
        </div>
    </ProjectItemStyles>
  )
}

export default ProjectItem;