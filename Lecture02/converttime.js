const registrationDate = new Date('2023-08-15T10:30:00Z');
const options = { year: 'numeric', month: 'long', day: 'numeric',  timezone: 'Asia/Bangkok' };
const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log("Registration Date: " + formattedDate);