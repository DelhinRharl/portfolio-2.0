import React, { useState, useEffect } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DelhinRharl/repos');
        const data = await response.json();
        const selectedRepos = data.filter((repo) => repo.name === 'car-booking-service-front-end' || repo.name === 'Capstone-Project-Affaxed' || repo.name === 'blog');
        setRepos(selectedRepos);
      } catch (error) {
        setError(true);
      }
    };
    fetchRepos();
  }, []);

  if (error) {
    return <h1>Sorry!</h1>;
  }

  return (
    <section className="projects">
      <h2>Projects</h2>
    <div className="projects-container">
       {repos.map((repo) => (
        <div key={repo.id} className="projects-text">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <button type="button">
            <a href={repo.html_url}>View Repo</a>
          </button>
        </div>
      ))}
    </div>
    </section>
  );
}

// resume operations 02012024

export default Projects;
