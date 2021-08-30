/*
3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.
*/

const getPlanet = (time) => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => {
        console.log("Returned planet: ", mars);
    }, time*1000);
  };
  
  getPlanet(4); // imprime Marte depois de 4 segundos