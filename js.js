fetch('http://gocreate.fun/recode/getcartitems.php')
    .then(response => {
    if (response.ok) {
          return response.json();
    }
    throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ) .then(jsonResponse => {
         console.log(jsonResponse);
         const boxLength = jsonResponse;
         const boxLengthNew = boxLength.length;
         for (var i = 0; i < boxLengthNew; i ++){
             console.log(boxLength[i]);
             
        }
         find(boxLength);
        });
        
function find(boxLength) {
  const largebox = document.querySelector('#largebox');
    for (let i = 0; i < boxLength.length; i++) {
      if (boxLength[i].stock === 0) {
        boxLength[i].disabled = "disabled";
       } else { boxLength[i].outOfStock = "Add";
      }
      boxLength[i].price = boxLength[i].price / 100;
  }
  for (let i = 0; i < boxLength.length; i++) {
      let box = document.createElement('div');
      box.innerHTML = `
           <div class="littleboxes" id="${boxLength[i].id}">
               <img id="image" src="${boxLength[i].image}"/>
               <p class="product" id="${boxLength[i].name}">${boxLength[i].name}</p>
               <p class="cost" id="price">£${boxLength[i].price}</p>
               <input type="number" id="stock" value="1" name="amount">
               <button class="add-btn" ${boxLength[i].disabled}>Add</button>
           </div> `;
      largebox.appendChild(box);
  }
};