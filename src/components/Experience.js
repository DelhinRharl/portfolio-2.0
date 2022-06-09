import React from 'react';
import {
  Button, Card, CardActions, CardContent, Typography,
} from '@mui/material';

const Experience = () => (
  <div>
    <h1>Experience</h1>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Full Stack Web Developer
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis cupiditate perspiciatis doloribus. Sit quod delectus ratione voluptate fugiat fuga, eum, facere omnis ullam neque dignissimos aliquam et quos quaerat!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ width: 200, height: 250 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Full Stack Web Developer
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis cupiditate perspiciatis doloribus. Sit quod delectus ratione voluptate fugiat fuga, eum, facere omnis ullam neque dignissimos aliquam et quos quaerat!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </div>
);

export default Experience;
