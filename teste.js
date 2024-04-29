fetch("http://localhost:8000/")
  .then((data) => JSON.stringify(data))
  .then((var1) => {
    console.log(var1);
  });
//   .then((data) => {
//     console.log(data[0]);
//   });
