// register() {
//   fetch('http://localhost:3000/register', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: 'test',
//       password: 'ghjynj',
//     })
//   }).then(function (response) {
//     console.log(response)
//   })
// }
//
// login() {
//   fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: 'test',
//       password: 'ghjynj',
//     }),
//   }) .then(response => response.json())
//     .then(responseJson => {
//       console.log(responseJson.user)
//       return responseJson.user;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }