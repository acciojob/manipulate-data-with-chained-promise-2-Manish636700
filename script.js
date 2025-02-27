//your JS code here. If required.
function delay(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4]);
		},3000);
	})
}

delay()
	.then((arr)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const even = arr.filter(num => num%2===0)
			document.getElementById("output").innerHTML=JSON.stringify(even);
			resolve(even);
		},1000);
	});
})
.then((even)=>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			const doubled = even.map(num => num * 2);
			document.getElementById("output").innerHTML=JSON.stringify(doubled);
			resolve(doubled);
		},2000)
	})
})