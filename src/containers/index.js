//The purpose of this file is that there are lot of components  in component folder so we have lot of import synax in App.js file so to counter thatr
//we make this file index .js and import all the componnets here and export it in to our app.js ,the purpose of it is cleanCode structure. 

import Blog from './blog/Blog'
import Feature from './features/Feature'
import Footer from './footers/Footer'
import Header from './headers/Header'
import Possibility from './possibility/Possibility'
import WhatGPT3 from './whatGPT3/WhatGPT3'

export {
   Blog,
   Feature,
   Footer,
   Header,
   Possibility,
   WhatGPT3
}