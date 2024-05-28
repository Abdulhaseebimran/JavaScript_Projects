// JS Cars Filter App

let carsObj = {
  Toyota: {
    Grande: {
      Name: "Toyota Grande",
      Model: 2019,
      Color: ["White", "Black", "Red"],
      Price: 450000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/grande.jpg",
    },
    Camry: {
      Name: "Toyota Camry",
      Model: 2020,
      Color: ["Black", "White", "Red"],
      Price: 300000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/camry.jpg",
    },
    Prius: {
      Name: "Toyota Prius",
      Model: 2018,
      Color: ["White", "Black", "Red"],
      Price: 200000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/prius.jpg",
    },
    Yaris: {
      Name: "Toyota Yaris",
      Model: 2017,
      Color: ["White", "Black", "Red"],
      Price: 150000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/yaris.jpg",
    },
    Revo: {
      Name: "Toyota Revo",
      Model: 2019,
      Color: ["White", "Black", "Red", "Silver"],
      Price: 110000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/revo.jpg",
    },
    Fortuner: {
      Name: "Toyota Fortuner",
      Model: 2022,
      Color: ["White", "Black"],
      Price: 110000,
      Gates: 4,
      Transformation: "Auotmatic",
      src: "images/fortuner.jpg",
    },
  },
  Honda: {
    Civic: {
      Name: "Honda Civic",
      Model: 2019,
      Color: ["White", "Black", "Red"],
      Price: 450000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/civic.jpg",
    },
    City: {
      Name: "Honda City",
      Model: 2020,
      Color: ["Black", "White", "Red"],
      Price: 300000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/city.jpg",
    },
    Accord: {
      Name: "Honda Accord",
      Model: 2018,
      Color: ["White", "Black", "Red"],
      Price: 200000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/accord.jpg",
    },
    Fit: {
      Name: "Honda Fit",
      Model: 2017,
      Color: ["White", "Black", "Red"],
      Price: 150000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/fit.webp",
    },
    Vezel: {
      Name: "Honda Vezel",
      Model: 2019,
      Color: ["White", "Black", "Red", "Silver"],
      Price: 110000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/vezel.jpg",
    },
  },
  Kia: {
    picanto: {
      Name: "Kia Picanto",
      Model: 2020,
      Color: ["White", "Black", "Gray"],
      Price: 200000,
      Gates: 4,
      Transformation: "Automatic",
      src: "images/picanto.jpg",
    },
    sportage: {
      Name: "Kia Sportage",
      Model: 2021,
      Color: ["White", "Black"],
      Price: 400000,
      Gates: 4,
      Transformation: "Automatic",
      src: "./images/sportage.jpg",
    },
    sonet: {
      Name: "Kia Sonet",
      Model: 2021,
      Price: 200000,
      Color: ["white", "black", "blue"],
      Gates: 4,
      Transformation: "automatic",
      src: "images/sonet.jpg",
    },
    stonic: {
      Name: "Kia Stonic",
      Model: 2018,
      Price: 100000,
      Color: ["white", "black", "red"],
      Gates: 4,
      Transformation: "automatic",
      src: "images/stonic.jpg",
    },
  },
  audi: {
    etron: {
      Name: "Audi Etron",
      Model: 2023,
      Price: 1000000,
      Color: ["white", "black"],
      Gates: 4,
      Transformation: "automatic",
      src: "images/etron.jpg",
    },
    a8: {
      Name: "Audi A8",
      Model: 2018,
      Price: 300000,
      Color: ["white", "black", "red"],
      Gates: 4,
      Transformation: "automatic",
      src: "images/a8.jpg",
    },
    a5: {
      Name: "Audi A5",
      Model: 2016,
      Price: 200000,
      Color: ["white", "black", "red"],
      Gates: 4,
      Transformation: "automatic",
      src: "images/a5.jpg",
    },
  },
};

let carBrands = document.getElementById("car-brands");
let carModels = document.getElementById("car-model");
let carShow = document.getElementById("car-div");

carBrands.innerHTML = `<option value="">Select Company</option>`;

for (let company in carsObj) {
  carBrands.innerHTML += `<option value="${company}">${company.toUpperCase()}</option>`;

  for (let company2 in carsObj[company]) {
    let allData = carsObj[company][company2];
    let colorOptionDiv = "";

    for (let i = 0; i < allData.Color.length; i++) {
      colorOptionDiv += `<div class="color d-flex" style=" background-color: ${allData.Color[i]}"></div>`;
    }
    carShow.innerHTML += `
    <div class="col mb-2 p-4 ml-2 ">
        <div class="card">
        <img src="${allData.src}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${allData.Name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${allData.Model}</h6>
            <h2>Rs ${allData.Price}</h2> 
            <h5 class="card-title">${allData.Gates}</h5>
            <h5 class="card-title">${allData.Transformation}</h5>
            <h5>Colors</h5>
            <div class="color-main">
            ${colorOptionDiv}</div>         
            </div>
        </div>
      </div>`;
  }
}

function setValues() {
  carModels.innerHTML = "";
  carModels.innerHTML += `<option value="">Select Car Model</option>`;
  for (var key in carsObj[carBrands.value]) {
    carModels.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`;
  }
}

function searchCars() {
  if (carBrands.value && carModels.value) {
    let modelOption2 = "";
    for (
      let i = 0;
      i < carsObj[carBrands.value][carModels.value].Color.length;
      i++
    ) {
      modelOption2 += `<div class="me-2" style="width:20px; margin-bottom:5px; height:20px; border-radius:10px; background-color:${
        carsObj[carBrands.value][carModels.value].Color[i]
      }; border:2px solid black ;"></div>`;
    }
    carShow.innerHTML = "";
    carShow.innerHTML = `<div class="card-container">
    <div class="card d-flex"> 
    <img src="${
      carsObj[carBrands.value][carModels.value].src
    }" class="card-img" alt="cars"/>
   <div class="card-body">
     <h2 class="card-title font-title">Name: ${
       carsObj[carBrands.value][carModels.value].Name
     }</h2>
     <h3 class="card-subtitle mb-2">Model: ${
       carsObj[carBrands.value][carModels.value].Model
     }</h3>
     <h3 class="card-title">Price: ${
       carsObj[carBrands.value][carModels.value].Price
     }</h3>
     <h4 class="card-text">Gates: ${
       carsObj[carBrands.value][carModels.value].Gates
     }</h4>
     <h4 class="card-text">Type: ${
       carsObj[carBrands.value][carModels.value].Transformation
     }</h4>
     <div class="d-flex card-text">  
      ${modelOption2}
     </div>
   </div>
</div>
</div>`;
  }else{
   alert("Please select Car Brand and Model");
  }
}

function allCarsLoading() {
  let carShow = document.getElementById("car-div");
  carShow.innerHTML = ""; 

  for (let company in carsObj) {
    for (let company2 in carsObj[company]) {
      let allData = carsObj[company][company2];
      let colorOptionDiv = "";

      for (let i = 0; i < allData.Color.length; i++) {
        colorOptionDiv += `<div class="color d-flex" style=" background-color: ${allData.Color[i]}"></div>`;
      }
      carShow.innerHTML += `
        <div class="col mb-2 p-4 ml-2 ">
          <div class="card">
            <img src="${allData.src}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${allData.Name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${allData.Model}</h6>
              <h2>Rs ${allData.Price}</h2> 
              <h5 class="card-title">${allData.Gates}</h5>
              <h5 class="card-title">${allData.Transformation}</h5>
              <h5>Colors</h5>
              <div class="color-main">
                ${colorOptionDiv}
              </div>         
            </div>
          </div>
        </div>`;
    }
  }
}


function fieldClear (){
  carBrands.value = "";
  carModels.value = "";
  carShow.innerHTML = "";
  carBrands.innerHTML = `<option value="">Select Company</option>`;
  for (let company in carsObj) {
    carBrands.innerHTML += `<option value="${company}">${company.toUpperCase()}</option>`;
  }
  allCarsLoading(); // sari cars ko load karega phir se
}