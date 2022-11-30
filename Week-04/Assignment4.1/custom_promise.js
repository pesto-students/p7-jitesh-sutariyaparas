
const getNumber = () => {
  let number = Math.random();
  //number = 5;
  if (number % 5 == 0) {
    console.log(`Promise is Rejected for number ${number}`);
    return false
  } else {
    return true;
  }
  
};

console.log(getNumber());
