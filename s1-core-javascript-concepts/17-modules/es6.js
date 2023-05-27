const getName = (name) => name
const getSurname = (surname) => surname

export default (name, surname) => `${getName(name)} ${getSurname(surname)}`

export { getName, getSurname }
