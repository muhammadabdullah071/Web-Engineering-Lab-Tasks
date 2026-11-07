const InMemoryUserRepository = require('../Q1/repository');
const User = require('../Q2/user');

const repository = new InMemoryUserRepository();

const ali = new User(1, 'Ali Khan', 'ALI@example.com');
const sara = new User(2, 'Sara Ahmed', 'sara@example.com');

repository.add(ali);
repository.add(sara);

console.log('Inserted users:');
console.log(repository.findAll());

console.log('\nFetched user with ID 1:');
console.log(repository.findById(1));

console.log('\nFetched user with ID 99:');
console.log(repository.findById(99));
