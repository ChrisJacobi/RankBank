
const usersName = document.getElementById('name');
const topic = document.getElementById('topic');
const num5 = document.getElementById('num5');
const num4 = document.getElementById('num4');
const num3 = document.getElementById('num3');
const num2 = document.getElementById('num2');
const num1 = document.getElementById('num1');



async function displayRanks() {
   
	const res = await fetch('http://localhost:80/entries');   
	const entries = await res.json(); 
	const display = document.getElementById('entries');
	
	entries.forEach((entry) => {
	// create elements
		const rankTitle = document.createElement('h3');
		const rank5 = document.createElement('p');
		const rank4 = document.createElement('p');
		const rank3 = document.createElement('p');
		const rank2 = document.createElement('p');
		const rank1 = document.createElement('p');

		rankTitle.innerText = entry.content;
		rank5.innerText = `#5: ${entry.num5}`;
		rank4.innerText = `#4: ${entry.num4}`;
		rank3.innerText = `#3: ${entry.num3}`;
		rank2.innerText = `#2: ${entry.num2}`;
		rank1.innerText = `#1 ${entry.num1}`;

		display.appendChild(rankTitle);
		display.appendChild(rank5);
		display.appendChild(rank4);
		display.appendChild(rank3);
		display.appendChild(rank2);
		display.appendChild(rank1);
	});
   
};

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
			newRankBtn.innerHTML = 'CLOSE'
			newRankBtn.style.backgroundColor = 'rgb(78, 209, 66, 0.4)'
		} else {
			form.classList.add('dNone')
			newRankBtn.innerHTML = 'NEW RANK'
			newRankBtn.style.backgroundColor = ''
		}
	});
}; 
displayForm();

function clearForm() {
	
	if(usersName, topic, num5, num4, num3, num2, num1){
		this.value = '';
		usersName.value = '';
		topic.value = '';
		num5.value = '';
		num4.value = '';
		num3.value = '';
		num2.value = '';
		num1.value = '';
	};
};


function rankBtn() {
	const showRanks = document.getElementById('showRanks');
	const display = document.getElementById('entries');

	if (display.style.border === '1px solid black'){
		display.style.border = ''
	} else {
		display.style.border = '1px solid black'
	};

	if (display.innerHTML){
		display.innerHTML = ''
		showRanks.style.backgroundColor = ''
		display.style.border = ''
		showRanks.innerHTML = 'SHOW RANKS'
	} else {
		showRanks.style.backgroundColor = 'rgb(78, 209, 66, 0.4)'
		showRanks.innerHTML = 'HIDE RANKS'
		displayRanks()
	};
};
