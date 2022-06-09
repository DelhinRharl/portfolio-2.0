import React from 'react';
import {
  Button, Card, CardActions, CardContent, Typography
} from '@mui/material';



const Services = () => (
  <div>
    <h1> My Services</h1>
    <p>I offer all these services</p>
    <ul>
      <li>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Web Development
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
      </li>
      <li>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Web Development
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
      </li>
      <li>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Web Development
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis cupiditate perspiciatis doloribus. Sit quod delectus ratione voluptate fugiat fuga, eum, facere omnis ullam neque dignissimos aliquam et quos quaerat!   sfbhdxsdfjb
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
      </li>
    </ul>
  </div>
);
export default Services;
