import React, { useState, useEffect } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DelhinRharl/repos');
        const data = await response.json();
        const selectedRepos = data.filter((repo) => repo.name === 'car-booking-service-front-end' || repo.name === 'Capstone-Project-Affaxed' || repo.name === 'blog');
        setRepos(selectedRepos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {repos.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a href={repo.html_url}>View Repo</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
