import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from 'react-redux';
import '../componentCSS/project.css'

function Projects(store) {
    console.log(store)
    const [projectNames, setProjectNames] = React.useState([...store.projects.projectNames])
    return (
        <div className="category-page">
            <h1 className="text-center">wel-come to my projects</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <ul className="projects">
                            {projectNames.map((projectName) => {
                                return (
                                    <li className="project">
                                        <Link to={projectName + '/' + projectName} name={projectName}>{projectName}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-lg-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((store) => { return store })(Projects)