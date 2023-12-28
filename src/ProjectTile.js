import React from 'react';
import './ProjectTile.css'; // Create and import corresponding CSS file

function formatRepoName(name) {
    return name
      // Split on hyphens
      .split('-')
      // Capitalize the first letter of each word
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      // Join the words back into a string
      .join(' ');
  }


function ProjectTile({ project }) {
    return (
      <div className="project-tile">
        <h3>{formatRepoName(project.name)}</h3>
        <p>{project.description}</p>
        <div className="project-tile-buttons">
          <a href={`/projects/${project.name}`} className="btn project-page-btn">Project Page</a>
          <a href={project.repoUrl} className="btn repo-btn" target="_blank" rel="noopener noreferrer">View Repository</a>
        </div>
      </div>
    );
  }

export default ProjectTile;
