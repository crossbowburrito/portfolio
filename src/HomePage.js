// HomePage.js
import React, { useState, useEffect } from 'react';
import ProjectTile from './ProjectTile';


function HomePage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/crossbowburrito/repos');
      const result = await response.json();
  
      // Check if the result is an array and sort by the most recently updated
      if (Array.isArray(result)) {
        const sortedProjects = result
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 4) // Take only the first 4 projects
          .map(repo => ({
            name: repo.name,
            description: repo.description,
            image: 'path_to_some_image', // You can add images to your repo or use a placeholder
            repoUrl: repo.html_url,
          }));
        
        setProjects(sortedProjects);
      } else {
        // Handle any potential errors or messages from GitHub API
        console.error('GitHub API response is not an array:', result);
      }
    };
  
    fetchProjects();
  }, []);


  return (
    <div className='element'>
      <h1>Welcome to My Portfolio</h1>
      <p>This is a React-based portfolio site.</p>
      <div className="projects-container">
        {projects.map(project => (
          <ProjectTile key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
