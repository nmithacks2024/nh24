import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'nh24',
    api_key: `${ process.env.REACT_APP_API_KEY }`,
    api_secret: `${ process.env.REACT_APP_API_SECRET }`
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "nh24",
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
})

module.exports = {
    cloudinary,
    storage
}