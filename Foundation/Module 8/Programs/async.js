function myName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let name = "Abdul Ahad";
      resolve(name);
    }, 2000);
  });
}

async function getName() {
  let result = await myName();
  console.log(result);
}
getName();
