//your JS code here. If required.
function delay(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	})
}

delay.then((arr)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const even = arr.filter(num => num%2===0)
			document.getElementById("output").innerHTML=JSON.stringify(evens);
			resolve(even);
		},1000);
	}
})