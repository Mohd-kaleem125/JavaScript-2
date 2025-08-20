const marvel_heros = ["Thor" , "Ironman" , "spiderman"];
const dc_heros = ["superman" , "flash" , "batman"];

//marvel_heros.push(dc_heros);

//console.log(marvel_heros);

 //console.log(marvel_heros[3][1]);

 const allHeros= marvel_heros.concat(dc_heros);
 //console.log(allHeros);

 // Spread Method

 const all_new_heros = [...marvel_heros , ...dc_heros];

 //console.log(all_new_heros);

 // If the array inside the array and array case

 const another_array = [1,2,3,[4,5,6],7,[6,7 ,[4,5]]];
 
 const real_another_array = another_array.flat(Infinity);
 //console.log(real_another_array);

 // Method

 console.log(Array.isArray("Kaleem"));
 console.log(Array.from("Kaleem"));
 console.log(Array.from({name: "Kaleem"}));

 // Intresting case

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1 , score2 , score3));
 





