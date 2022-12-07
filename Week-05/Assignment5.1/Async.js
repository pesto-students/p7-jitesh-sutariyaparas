// Using Async/Await and Generators, create separate functions and achieve the same functionality.(3hours)
// Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()

const validateEmail = (email) => {
  const emailExist = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Email Verification success for ${email}`);
      // reject(`Email not exist in database`);
    }, 2000);
  });
  console.log("Email Verification Done");
  return emailExist;
};

const generateToken = (email, password) => {
  const Token = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Access Token generated for ${email}`);
      // reject(`Email or password wrong`);
    }, 2000);
  });
  console.log("Access Token generation Done");
  return Token;
};

function* getUserData() {
  yield "Get UserProfile Done";
  yield "Get Product data Done";
  yield "Get my Orders Done";
}

async function fnTaskCall(email, password) {
  console.log("*Validating Email...");
  await validateEmail(email)
    .then((value) => console.log(value))
    .catch((value) => console.error(value));

  console.log("*Generating Token...");
  await generateToken(email, password)
    .then((value) => console.log(value))
    .catch((value) => console.error(value));
  console.log("*Authorization Done___");

  const userDataFetch = getUserData();
  const Profile = userDataFetch.next();
  console.log(Profile.value);
  const Products = userDataFetch.next();
  console.log(Products.value);
  const Orders = userDataFetch.next();
  console.log(Orders.value);
}

fnTaskCall("paras@gmail.com", "paras123");
