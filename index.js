let arr =  [{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];

//forEach, map() & filter()

function stringtToInt(x){
    x.age = Number(x.age);
}
arr.map(stringtToInt);


function ageChange(x){
    if(x.name == "john"){
        x.age = 19;
     }
}
arr.forEach(ageChange);

const arr2 = [{id:4, name: "Mohan", age:"25", profession:"student"}];
arr = [...arr, ...arr2];



finalArray = arr;

// // Use the filter function to filter the cards based on the selected profession
document.querySelector("select").addEventListener("change", event => {
    const selectedProfession = event.target.value;
    const filteredArray = finalArray.filter(
      obj => obj.profession === selectedProfession
    );
  
    // If no profession is selected, throw an alert
    if (selectedProfession === "") {
      alert("Please select a profession before clicking the button");
    } else {
      // Render the filtered cards
      filteredArray.forEach(obj => {
        const card = document.createElement("div");
        card.innerHTML = `
        <p>${obj.id}</p>
          <p>Name: ${obj.name}</p>
          <p>Age: ${obj.age}</p>
          <p>Profession: ${obj.profession}</p>
        `;
        document.body.appendChild(card);
      });
    }
  });






