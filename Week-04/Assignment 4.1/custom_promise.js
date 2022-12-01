
const getNumber = () => {
  let number = Math.random();
  //number = 5;
  if (number % 5 == 0) {
    console.log(`Promise is Rejected for number ${number}`);
    return false
  } else {
    console.log(`Promise is Resolve for number ${number}`);
    return true;
  }
  
};

console.log(getNumber());
