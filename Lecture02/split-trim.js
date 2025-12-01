const fullname = "  Khanitha  Boonlom  ";
console.log(fullname)
const clename = fullname.trim();
console.log(clename)
const nameParts = clename.split(" ");
console.log(nameParts)
const finalParts = nameParts.filter(Boolean);
console.log(finalParts)

const firsstname =finalParts[0];
console.log(`Hello,${firsstname}!`); 