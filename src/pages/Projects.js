import React from 'react';
import {
  Card, CardContent, Typography, CardMedia, CardActionArea,
} from '@mui/material';

const Projects = () => (
  <div className="project-main">
    <div className="flex flex-col gap-10">
      <h1 className="text-amber-600 font-extrabold text-4xl">Projects</h1>
      <p> Here is a list of some of my projects</p>
    </div>

    <ul className="flex gap-5  justify-center items-center">
      <li>
        {' '}
        <Card sx={{
          width: 300, height: 300, overflow: 'auto', fontFamily: 'Nunito',
        }}
        >
          <CardActionArea href="https://github.com/DelhinRharl/Capstone-Project-Affaxed">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Music Festival
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image="https://github.com/DelhinRharl/Capstone-Project-Affaxed/blob/master/images/screenshotd.png"
                alt="Music Festival"
              />
              <Typography variant="body2" color="textSecondary" component="p">
                The Music Festival is a music festival that is held in a different city each year.
                {' '}
                <br />
                The app highlights the details of the event and the artists that are playing.
                {' '}
                <br />
                {' '}
                The website is built using HTML, CSS, JavaScript.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </li>
      <li>
        {' '}
        <Card sx={{ width: 300, height: 300, overflow: 'auto' }}>
          <CardActionArea href="https://github.com/DelhinRharl/car-booking-service-front-end">
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
                The Car Booking Service is a website that allows users to book a
                {' '}
                <br />
                car for a certain amount of time.
                {' '}
                <br />
                It is a luxury car rental service.
                {' '}
                <br />
                {' '}
                The website is built using HTML, CSS, JavaScript,
                {' '}
                <br />
                React, Redux, Ruby,Ruby on Rails  and Postgresql.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </li>
      <li>
        {' '}
        <Card sx={{ width: 300, height: 300, overflow: 'auto' }}>
          <CardActionArea href="https://github.com/DelhinRharl/stock-data">
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
                The Stock App allows the user to user to search for stocks
                {' '}
                <br />
                and get the current price. It list the top 30 companies listed
                {' '}
                <br />
                in the US stock markets and their financial performance in the last few quarters
                {' '}
                <br />
                {' '}
                The website is built using HTML, CSS, JavaScript, React and Redux
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </li>
      <li>
        {' '}
        <Card sx={{ width: 300, height: 300, overflow: 'auto' }}>
          <CardActionArea href="https://github.com/DelhinRharl/bookstore">
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
                The app  is an online book library that allows you to build and search for books.
                {' '}
                <br />
                It allows you to add books to your library and search
                {' '}
                <br />
                {' '}
                for books in your library using a predefined category.
                {' '}
                <br />
                {' '}
                The website is built using HTML, CSS, JavaScript and React.
                {' '}
                <br />
                REST API has been used to communicate with the backend.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </li>
    </ul>

  </div>
);

export default Projects;
