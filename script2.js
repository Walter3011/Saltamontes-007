var arr = [];
for (var x = 0; x <= 35; x++){
	arr[x] = x; 
}

for(var x = 1; x<= 35; x++){


	
	if (arr[x]%3 === 0 && arr[x] % 5 === 0){

		console.log("FIZZBUZZ");
		
	}else if (arr[x] % 3 === 0) {

		console.log("FIZZ");
		
	}else if (arr[x] % 5 === 0) {
		console.log("BUZZ");
		
	}else {
		console.log(arr[x])
	}
	

}



