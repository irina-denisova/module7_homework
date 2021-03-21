// 1)  Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const obj = {
  city: "Moskow",
  age: 18,
  country: "Russia"
}

const getOwnProperty = (obj) => {
  
  const obj_new = Object.create(obj);
  obj_new.city = "Tomsk";
  obj_new.lite = "Rrrr";
  
  for (let key in obj_new) {
    
    if ( obj_new.hasOwnProperty(key) ){
      
      console.log( key + ' : ' + obj_new[key] );

    }
  }
}

getOwnProperty(obj);