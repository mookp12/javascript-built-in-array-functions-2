const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const brand = carBrand.toLowerCase(); 
  
  if (carCollection.includes(brand)) {
    const position = carCollection.indexOf(brand) + 1;
    return `${brand} has already existed in the ${position} position of car collection.`;
  } else {
    carCollection.push(brand);
    return `New car collection is: ${carCollection.join(", ")}.`;
  }
    
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.