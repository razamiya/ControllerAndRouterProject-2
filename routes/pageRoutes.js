const express = require('express');
const {showHomePage, showAboutPage, showContactPage, showGalleryPage, showServicePage, showTestimonialPage} = require('../controller/pageController')


// init router
const route = express.Router();


// create route
route.get('/', showHomePage )

route.get('/about' , showAboutPage)

route.get('/contact', showContactPage,)

route.get('/gallery' , showGalleryPage)

route.get('/service' , showServicePage)

route.get('/testimonial', showTestimonialPage)


module.exports = route;