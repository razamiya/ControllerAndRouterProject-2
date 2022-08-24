
const path = require('path');

// page controller 
const showHomePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
 }

 const showAboutPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'))
}

const showContactPage = (req, res) => {
    res.status(200,).sendFile(path.join(__dirname, '../public/contact.html'))
}

const showGalleryPage = (req, res) => {
    res.status(200,).sendFile(path.join(__dirname, '../public/gallery.html'))
}

const showServicePage = (req, res) => {
    res.status(200,).sendFile(path.join(__dirname, '../public/service.html'))
}

const showTestimonialPage = (req, res) => {
    res.status(200,).sendFile(path.join(__dirname, '../public/testimonial.html'))
}

 
 module.exports = {showHomePage, showAboutPage, showContactPage, showGalleryPage, showServicePage, showTestimonialPage}