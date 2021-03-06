import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Parser from 'html-react-parser';
import loading from '../assets/loading.gif';

const Skills = () => {
    const [skills, setSkills] = useState([])
    const [isloading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchEducations = async () => { 
            const result = await axios('skills')
            setSkills(result.data)
            setisLoading(false)
        }
        fetchEducations()
      }, [])
    return (
        <div>
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <a href='#skills' className='js-scroll-trigger'><h2 className="mb-5">Skills</h2></a>
                    <div className="subheading mb-3">Programming Languages & Creative Tools</div>
                    <div className="row">
                    {isloading?<img src={loading} alt='Loading...' width='200px'/>:
                    skills.map((skill) => (
                        <div className="col-11 col-md-5 col-lg-5 m-2" key={skill.id}>
                            <div className='row text-dark'>
                                <div className='col-2 ml-2'>
                                    {Parser(skill.iframe)}
                                </div>
                                <div className='col-9 py-2'>
                                    {skill.title}
                                </div>
                            </div>
                        </div>
                    ))}

                    </div>
                    <hr/>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Database Model, Backend
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Restful API using Django Rest API
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>Frontend and UI refinements
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            
        </div>
    )
}

export default Skills
