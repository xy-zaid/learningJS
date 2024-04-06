// const promiseFunc = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("in time out async func");
//     let error = false;
//     if (!error) {
//       res("in resolve");
//     } else rej("in reject");
//   }, 2000);
// });

// promiseFunc
//   .then((resolve) => console.log(`inside then - resolve ${resolve}`))
//   .catch((rej) => console.log(`inside catch - reject ${rej}`));

// async function callPromiseFunc() {
//   const response = await promiseFunc;
//   //   return response;
//   console.log('response');
// }
// callPromiseFunc();

// fetch(
//   "https://mdn.github.io/dom-examples/fetch/fetch-response/flowers.jpg"
// ).then((response) => {
//   console.log('using then');
//   console.log(response.ok);
// });
// let arr = [
//   {
//     slot: 1,
//     type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
//   },
//   {
//     slot: 2,
//     type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
//   },
// ];

// console.log(
//   arr.map(({ type: { name } }) => {
//     return name;
//   })
// );

async function useFetch() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  console.log("using async func");
  const resJson = await response.json();

  console.log(response.status);
  let pokemonType = [];
  //   console.log(resJson.types.forEach((obj) => console.log(obj.type.name)));
  //   const { species: { name: speciesNameVariable } = "default" } = resJson;

  ({ types } = resJson);

  pokemonType = types.map(({ type: { name } }) => {
    return name;
  });
  console.log(pokemonType);
  //   pokemonType.forEach((obj) => console.log(obj.type.name));
}
useFetch();
