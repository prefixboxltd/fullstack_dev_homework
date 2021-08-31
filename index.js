mainContainer = document.getElementById('tree-container');

(function (){
	const delimiter = '|';
	const array = [{
		count: 38,
		name: 'Lakberendezés, világítás, bútor',
	}, {
		count: 37,
		name: 'Lakberendezés, világítás, bútor|Bútor',
	}, {
		count: 25,
		name: 'Lakberendezés, világítás, bútor|Bútor|Nappali bútor',
	}, {
		count: 10,
		name: 'Lakberendezés, világítás, bútor|Bútor|Hálószoba bútor',
	}, {
		count: 2,
		name: 'Lakberendezés, világítás, bútor|Bútor|Ifjúsági bútor',
	}, {
		count: 1,
		name: 'Lakberendezés, világítás, bútor|Világítás',
	}];
	
	console.log(delimiter, array);
})();