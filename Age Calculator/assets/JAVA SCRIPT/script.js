const now = new Date();

console.log(now)


const bday = new Date(1998, 2, 4);
const today = new Date();

const age = today.getFullYear() - bday.getFullYear();
const month = today.getMonth() - bday.getMonth();
const date = today.getDate() - bday.getDate();

console.log(`Hey you're ${age}years and ${month} months ${date} and days old!!`);

