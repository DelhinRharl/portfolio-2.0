import React from 'react';
import {
  Card, CardContent, Typography, CardActionArea,
} from '@mui/material';

const Contact = () => (
  <div className=" h-[79vh] flex flex-col gap-10 justify-center items-center ">
    <h1 className="text-4xl font-bold text-amber-600">Get in Touch</h1>
    <p>
      Find me on these social platforms.
    </p>
    <div>
      <ul className="flex gap-6">
        <li>
          <Card sx={{ width: 120, height: 80 }}>
            <CardActionArea href="https://github.com/DelhinRharl">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" fontWeight="medium">
                  Github
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
        <li>
          <Card sx={{ width: 120, height: 80 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" fontWeight="medium">
                LinkedIn
              </Typography>
            </CardContent>
          </Card>
        </li>
        <li>
          <Card sx={{ width: 120, height: 80 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" fontWeight="medium">
                Angelist
              </Typography>
            </CardContent>
          </Card>
        </li>
        <li>
          <Card sx={{ width: 120, height: 80 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" fontWeight="medium">
                Twitter
              </Typography>
            </CardContent>
          </Card>
        </li>

      </ul>
    </div>
  </div>
);

export default Contact;
