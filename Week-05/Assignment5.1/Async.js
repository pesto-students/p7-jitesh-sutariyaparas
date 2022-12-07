const validateEmail = (email) => {
  const emailExist = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Email Verification success for ${email}`);
    }, 2000);
  });
  console.log("Email Verification Done");
  return emailExist;
};

const generateToken = (email,password) => {
  const Token = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Access Token generated for ${email}`);
    }, 2000);
  });
  console.log("Access Token generation Done");
  return Token;
};

function * getUserData (){
  yield "Get UserProfile Done"
  yield "Get Product data Done"
  yield "Get my Orders Done"
}

async function fnTaskCall(email,password) {
  console.log("*Validating Email...");
  await validateEmail(email).then();
  console.log("*Generating Token...");
  await generateToken(email,password).then();
  console.log("*Authorization Done___");

  const userDataFetch = getUserData();
  const Profile = userDataFetch.next();
  console.log(Profile.value)
  const Products = userDataFetch.next();
  console.log(Products.value)
  const Orders = userDataFetch.next();
  console.log(Orders.value)
}

fnTaskCall('paras@gmail.com','paras123');
