import {
  toyotaModel,
  bmwModel,
  fordModel,
  chevroletModel,
  hondaModel,
  mercedesModel,
} from "./models/car";

const toyota = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Black",
    price: 25000,
  },
  {
    brand: "Toyota",
    model: "Highlander",
    year: 2018,
    color: "Gray",
    price: 35000,
  },
];

const bmw = [
  {
    brand: "BMW",
    model: "3 Series",
    year: 2018,
    color: "Blue",
    price: 35000,
  },
  {
    brand: "BMW",
    model: "5 Series",
    year: 2020,
    color: "Gray",
    price: 45000,
  },
];

const ford = [
  {
    brand: "Ford",
    model: "Mustang",
    year: 2017,
    color: "Red",
    price: 40000,
  },
];

const chev = [
  {
    brand: "Chevrolet",
    model: "Camaro",
    year: 2022,
    color: "Rojo",
    price: 45000,
  },
  {
    brand: "Chevrolet",
    model: "Equinox",
    year: 2023,
    color: "Blanco",
    price: 35000,
  },
];
const honda = [
  {
    brand: "Honda",
    model: "Civic",
    year: 2022,
    color: "Negro",
    price: 30000,
  },
  {
    brand: "Honda",
    model: "Accord",
    year: 2021,
    color: "Plata",
    price: 32000,
  },
  {
    brand: "Honda",
    model: "CR-V",
    year: 2023,
    color: "Azul",
    price: 35000,
  },
];
const mercedes = [
  {
    brand: "Mercedes",
    model: "C-Class",
    year: 2022,
    color: "Negro",
    price: 50000,
  },
];

const createMercedes = async () => {
  for (let i = 0; i < mercedes.length; i++) {
    const car = new mercedesModel(mercedes[i]);
    await car.save();
  }
};

const createToyota = async () => {
  for (let i = 0; i < toyota.length; i++) {
    const car = new toyotaModel(toyota[i]);
    await car.save();
  }
};

const createHonda = async () => {
  for (let i = 0; i < honda.length; i++) {
    const car = new hondaModel(honda[i]);
    await car.save();
  }
};

const createBmw = async () => {
  for (let i = 0; i < bmw.length; i++) {
    const car = new bmwModel(bmw[i]);
    await car.save();
  }
};

const createFord = async () => {
  for (let i = 0; i < ford.length; i++) {
    const car = new fordModel(ford[i]);
    await car.save();
  }
};

const createChevrolet = async () => {
  for (let i = 0; i < chev.length; i++) {
    const car = new chevroletModel(chev[i]);
    await car.save();
  }
};

const addInfo = async () => {
  await createMercedes();
  await createHonda();
  await createToyota();
  await createBmw();
  await createFord();
  await createChevrolet();
};

export default addInfo
