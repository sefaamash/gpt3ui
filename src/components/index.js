//The purpose of this file is that there are lot of components  in component folder so we have lot of import synax in App.js file so to counter thatr
//we make this file index .js and import all the componnets here and export it in to our app.js ,the purpose of it is cleanCode structure. 

import Article from './article/Article'
import Brand from './brand/Brand'
import CTA from './cta/CTA'
import Feature from './feature/Feature'
import Navbar from './navbar/Navbar'

export {
    Article,
    Brand,
    CTA,
    Feature,
    Navbar
}