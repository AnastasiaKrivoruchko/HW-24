let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	}
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	}
];

Array.prototype.heroesRender = function(folder) {
	const Trs = this
		.map(function(heroes) {
			return `
				<tr>
					<td>${heroes.name}</td>
					<td><img src="images/${folder}/${heroes.name.toLowerCase().replaceAll(' ', '')}.svg"></td>
				</tr>
		    `
		})
		.join("");
	document.write(`
	<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Icon</th>
				</tr>
			</thead>
			<tbody>${Trs}</tbody>
		</table>
	`)		
};

dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');