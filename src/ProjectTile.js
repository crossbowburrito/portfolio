import React from 'react';
import './ProjectTile.css'; // Create and import corresponding CSS file

function ProjectTile({ project }) {
    return (
      <div className="project-tile">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tile-buttons">
          <a href={`/projects/${project.name}`} className="btn project-page-btn">Project Page</a>
          <a href={project.repoUrl} className="btn repo-btn" target="_blank" rel="noopener noreferrer">View Repository</a>
        </div>
      </div>
    );
  }

export default ProjectTile;
