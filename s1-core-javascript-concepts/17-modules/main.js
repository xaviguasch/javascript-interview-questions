// Create a es6 module with function getName, getSurname and default export getFullname
import getFullname, { getName, getSurname } from './es6.js'

console.log(getName('Xavi'), getSurname('Guasch'), getFullname('Jack', 'Sparrow'))
