
const guests = ['Alice', 'Bob', 'Charlie', 'David'];
for (let i = 0; i < guests.length; i++) {
    if (guests[i] === 'Charlie') {
        console.log('Charlie is already on the guest list, skipping invitation.');
        break;
    }
}
