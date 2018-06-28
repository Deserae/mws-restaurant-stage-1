self.addEventListener('fetch', function(event){
	console.log(event.request);
	console.log("in the sw test");
});