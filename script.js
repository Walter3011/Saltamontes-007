arr = [];

for(var x = 0; x <= 29; x++){
	arr[x]=Math.round(Math.random() * (10 - 1) + 1);
}

 // for(var x = 0; x <= arr.length - 1; x++){

 // 	if (arr[x] % 2 === 0) {
 // 		console.log(arr[x]);
 // 		console.log('Par');
 // 	}
 // 	else{
 // 		console.log(arr[x]);
 // 		console.log('Impar');
 // 	}
 // }

console.log('-----------------');



for(var x = 0; x <= 29; x++){
 	console.log(arr[x]) 
 	
 }


 for(var x = arr.length; x >= 0; x--){
 	console.log(arr[x]) 
 	
 }

