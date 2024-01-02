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
    return <h1>Oops, something went wrong. Blame it on the unicorn.</h1>; // TODO: Add a unicorn
  }

  return (
    <section>
      <h2>Projects</h2>
      {repos.map((repo) => (
        <div key={repo.id} className="hero-text">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <a href={repo.html_url}>View Repo</a>
        </div>
      ))}
    </section>
  );
}

//resume operations 02012024

export default Projects;
