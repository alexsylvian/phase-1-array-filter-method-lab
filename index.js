const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(collection, name) {
    return collection.filter(individual => individual.toLowerCase() === name.toLowerCase()) //it filters through the collection (drivers), with 'individual' representing the entire array. It looks through the array for individual cases where it matches the name we'll put in (bobby). and it switches them all to lower case JUST FOR THE READING so it can return both Bobbies. Understand?
}

function fuzzyMatch(collection, letters) {
    return collection.filter(individual => individual.startsWith(letters))
} //you should have known this

function matchName(collection, name) {
    return collection.filter(individual => individual.name === name)
}
