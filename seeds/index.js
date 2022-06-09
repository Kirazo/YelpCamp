const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
    console.log("Database connected")
})

const sample = (array => array[Math.floor(Math.random() * array.length)])

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '6298625801d709b11ea6a424',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sint modi enim ut ea saepe, iure error voluptas eaque commodi. Ab ratione dolorum perferendis aliquam non corporis est, accusamus similique.`,
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/latios/image/upload/v1654499336/YelpCamp/q8w5qplnryzmnkykb3qv.jpg',
                    filename: 'YelpCamp/q8w5qplnryzmnkykb3qv',
                },
                {
                    url: 'https://res.cloudinary.com/latios/image/upload/v1654499534/YelpCamp/k8pqzqzak7b4l7vxy5as.jpg',
                    filename: 'YelpCamp/k8pqzqzak7b4l7vxy5as',
                }
            ],
        })
        await camp.save()
    }
}

seedDB().then(() => {
    db.close()
});