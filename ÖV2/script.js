let family = ['Victor', 'Anette', 'Jarmo', 'Oscar'];
family.sort()
console.log(family);

removed = family.pop()
console.log(family);

family.unshift(removed)
console.log(family);

for (let i = 0; i < family.length; i++) {
    console.log(i);
}

const greetings = family.map(names)
function names(name){
    return `Hejsan ${name}`
}
console.log(greetings);

greetings.forEach(names => {
    console.log(names)
    
});



