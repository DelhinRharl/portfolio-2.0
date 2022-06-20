import React from 'react';
import {
  Card, CardContent, Typography, CardMedia,
} from '@mui/material';

const Projects = () => (
  <div>
    <p> Here is a list of some of my projects</p>
    <ul className="flex gap-5">
      <li> <Card sx={{ width: 300, height: 300, overflow:"auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Music Festival
            </Typography>
              <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Music Festival"
              />
            <Typography variant="body2" color="textSecondary" component="p">
              The Music Festival is a music festival that is held in a different city each year. The app highlights the details of the event and the artists that are playing.
              {' '}
              <br />
              {' '}
              The website is built using HTML, CSS, JavaScript.
            </Typography>
          </CardContent>
        </Card>
      </li>
       <li> <Card sx={{ width: 300, height: 300, overflow:"auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Car Booking Service
            </Typography>
              <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Music Festival"
              />
            <Typography variant="body2" color="textSecondary" component="p">
              The Car Booking Service is a website that allows users to book a car for a certain amount of time. It is a luxury car rental service. 
              {' '}
              <br />
              {' '}
              The website is built using HTML, CSS, JavaScript, React, Redux, Ruby,Ruby on Rails  and Postgresql.
            </Typography>
          </CardContent>
        </Card>
      </li>
        <li> <Card sx={{ width: 300, height: 300, overflow:"auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Stocks App
            </Typography>
              <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Music Festival"
              />
            <Typography variant="body2" color="textSecondary" component="p">
              The Stock App allows the user to user to search for stocks and get the current price. It list the top 30 companies listed in the US stock markets and their financial performance in the last few quarters 
              {' '}
              <br />
              {' '}
              The website is built using HTML, CSS, JavaScript, React and Redux
            </Typography>
          </CardContent>
        </Card>
      </li>
        <li> <Card sx={{ width: 300, height: 300, overflow:"auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Book Library
            </Typography>
              <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                alt="Music Festival"
              />
            <Typography variant="body2" color="textSecondary" component="p">
              The app  is an online book library that allows you to build and search for books. It allows you to add books to your library and search for books in your library using a predefined category.
              {' '}
              <br />
              {' '}
              The website is built using HTML, CSS, JavaScript and React. REST API has been used to communicate with the backend.
            </Typography>
          </CardContent>
        </Card>
      </li>
    </ul>

  </div>
);

export default Projects;
