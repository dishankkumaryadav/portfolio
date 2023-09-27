import React from 'react'
import SectionTitle from './SectionTitle';
import SkillsData from './SkillsData';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import './Skills.css'

const Skills = () => {
  return (
    <div className='skillsSection' id='skillsSection'>
    <SectionTitle heading='Skills' subheading=''/>
    <VerticalTimeline animate={true}>
        {
            SkillsData.map(element => {
                return(
                    <VerticalTimelineElement
                        key={element.id}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={element.icon} alt='logo' height='60px' className='iconImg'/>}
                    >
                        <h3 className='vertical-timeline-element-title'>{element.language}</h3>
                    </VerticalTimelineElement>
                )
            })
        }
    </VerticalTimeline>
    </div>
  )
}

export default Skills;