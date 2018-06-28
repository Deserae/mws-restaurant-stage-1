self.addEventListener('fetch', function(event){
	console.log("in the sw");
	console.log(event.request);
});