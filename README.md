# YelpCamp - By Howard Tep

View Here: https://stark-garden-02476.herokuapp.com/

YelpCamp is a website where users can create and review campgrounds.In order to review or create a campground, you must have an account. Inspiration of this project was taken from Colt Steel's Web Developer Course.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.

## Features

- A user may register for an account with a username, email, and password.
- Once logged in, a user can make a campground, edit a campground, and delete a campground
- A logged in user can also write / delete reviews on campgrounds.
- A user may add and delete multiple images for a campground.
## API Reference

### Javascript modules to speed up developement process.

| API | Type     | Reference              |
| :-------- | :------- | :------------------------- |
| `Node.js NPM` | `Npm Modules` | https://www.npmjs.com/ |

| API | Type     | Reference              |
| :-------- | :------- | :------------------------- |
| `MapBox` | `Google Maps` | https://docs.mapbox.com/api/overview/ |

### Cloud CDN used for storing images of campgrounds.

| API | Type     | Reference                      |
| :-------- | :------- | :-------------------------------- |
| `Cloudinary`      | `CDN Storage` | https://docs.mapbox.com/api/overview/ |


### Database service to store all information YelpCamp.

| API | Type     | Reference                      |
| :-------- | :------- | :-------------------------------- |
| `Mongo Atlas`      | `Database Storage` | https://www.mongodb.com/docs/atlas/ |

## Environment Variables

To run this project locally, you will need to add the following environment variables to your .env file

`MAPBOX_TOKEN`

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_KEY`

`CLOUDINARY_SECRET`

`DB_URL`
## Deployment

After env variables are added, to deploy this project run

```bash
npm start
http://localhost:3000/
```