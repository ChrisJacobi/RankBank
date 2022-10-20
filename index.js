

async function displayRanks() {
   
	const res = await fetch('http://localhost:80/entries');   
	const entries = await res.json(); 
	let display = document.getElementById('entries');

	entries.forEach((entry) => {
		const rank = document.createElement('h1');
		rank.innerText = entry.content;
		display.appendChild(rank);
	});
   
};

async function submitRanks(event) {
	
	event.preventDefault();
	const entry = document.getElementById('entry');
	const data = {
		content: entry.value
	};
	   
	fetch('http://localhost:80/entry', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(() => {
		entry.value = '';
		entry.focus();
	});
	
}

// async function deleteEntry(id) {
//     await fetch(`http://localhost:80/${id}`, {
//         method: 'DELETE',
//     });
	 
// };

function displayForm() {
	const newRankBtn = document.getElementById('newRankBtn');
	const form = document.getElementById('form');
	newRankBtn.addEventListener('click', () => {
		if (form.classList.contains('dNone')) {
			form.classList.remove('dNone')
		} else {
			form.classList.add('dNone')
		}
	});
}; 
displayForm();

const test = document.getElementById('title');

console.log(test.innerText);
 