//object
const person = {
   name: 'Soumyadeep',
   age: 24,
   location: {
      city: 'Siliguri',
      temp: 33
   }
}

const { name: firstName = 'Anonymous', age } = person

console.log(`${firstName} is ${age}`)

const { city, temp: temperature } = person.location

if (city && temperature) {
   console.log(`It's ${temperature}°C in ${city}`)
}

const book = {
   title: 'Ego is the Enemy',
   author: 'Ryan Holiday',
   publisher: {
      name: 'Penguin'
   }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)

//Arrays

const address = [
   '1299 S Juniper street',
   'Philadephia',
   'Pennsylvania',
   '19147'
]

const [, city2, state = 'New York'] = address

console.log(`You are in ${city2}, ${state}`)

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)
