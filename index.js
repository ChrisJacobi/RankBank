// CONSTS
const usersName = document.getElementById('name');
const topic = document.getElementById('topic');
const num5 = document.getElementById('num5');
const num4 = document.getElementById('num4');
const num3 = document.getElementById('num3');
const num2 = document.getElementById('num2');
const num1 = document.getElementById('num1');
const display = document.getElementById('ranks');

// loads DB rank entries to display on launch
window.addEventListener('DOMContentLoaded', rankBtn());

// form pop-up
function displayForm() {
	const newRankBtn = document.getElementById('newRankBtn');
	const form = document.getElementById('form');
	newRankBtn.addEventListener('click', () => {
		if (form.classList.contains('dNone')) {
			form.classList.remove('dNone')
			newRankBtn.innerHTML = 'CLOSE'
			newRankBtn.style.padding = '0'
			newRankBtn.style.margin = '0.5rem'
		} else {
			form.classList.add('dNone')
			newRankBtn.innerHTML = 'NEW RANK'
			newRankBtn.style.padding = ''
			newRankBtn.style.margin = ''
		}
	});
}; 
displayForm();


// sumbit data to DB from FORM inputs
async function submitRanks(event) {
	event.preventDefault();
	const data = {
		content: `${usersName.value}'s top 5 ${topic.value}`,
		num5: num5.value,
		num4: num4.value,
		num3: num3.value,
		num2: num2.value,
		num1: num1.value
	};
	fetch('http://localhost:80/entry', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(() => {
		clearForm();
		usersName.focus();
	});
};


function createRankElement(rank) {
	const rankElement = document.createElement('article')
	rankElement.classList.add('newRank')
	rankElement.innerHTML = `
	<h3> ${rank.content} </h3>
	<ul>
		<li>#5: ${rank.num5}</li>
		<li>#4: ${rank.num4}</li>
		<li>#3: ${rank.num3}</li>
		<li>#2: ${rank.num2}</li>
		<li>#1: ${rank.num1}</li>
	</ul>
	`
	display.appendChild(rankElement)
}


// displays data from DB on home page
async function displayRanks() {
	const res = await fetch('http://localhost:80/entries');   
	const entries = await res.json(); 
	
	entries.forEach((rank) => {
		createRankElement(rank)
	});
};



// async function deleteEntry() {
// 	if (_id){
//     await fetch(`http://localhost:80/entry/${_id}`, {
//         method: 'DELETE',
//     })
// 	const rankEntry = document.getElementById()
// 	}; 
// };


// clears entry form
function clearForm() {
	if(usersName, topic, num5, num4, num3, num2, num1){
		usersName.value = '';
		topic.value = '';
		num5.value = '';
		num4.value = '';
		num3.value = '';
		num2.value = '';
		num1.value = '';
	};
};


// INCLUDES displayRanks() functionality!
// rank entries and rank button STYLING functionality. 
function rankBtn() {
	const showRanks = document.getElementById('showRanks');
	const recentTile = document.getElementById('recentTitle');

	if (display.style.border === '1px solid black'){
		display.style.border = ''
	} else {
		display.style.border = '1px solid black'
	};

	if (display.innerHTML){
		display.innerHTML = ''
		showRanks.style.padding = ''
		display.style.border = ''
		display.style.backgroundColor = '#F0EBD8'
		showRanks.innerHTML = 'SHOW RANKS'
		showRanks.style.minWidth = '17rem'
		showRanks.style.borderRadius = '1.5rem'
		recentTile.classList.add('dNone')
	} else {
		showRanks.style.padding = '0'
		showRanks.style.margin = '0'
		showRanks.style.minWidth = '5rem'
		showRanks.style.borderRadius = ''
		showRanks.innerHTML = 'Hide'
		recentTile.classList.remove('dNone')
		display.style.backgroundColor = '#1d3557e8'
		displayRanks()
	};
};


