const InMemoryUserRepository = require('./repository');

const repository = new InMemoryUserRepository();

repository.add({ id: 1, name: 'Ali Khan', email: 'ali@example.com' });
repository.add({ id: 2, name: 'Sara Ahmed', email: 'sara@example.com' });

console.log('All users:', repository.findAll());
console.log('User with ID 2:', repository.findById(2));
