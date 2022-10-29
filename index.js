
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
	let display = document.getElementById('entries');

	entries.forEach((entry) => {
		const rank = document.createElement('h1');
		rank.innerText = entry.content;
		display.appendChild(rank);
	});
   
};

async function submitRanks(event) {
	
	event.preventDefault();
	const topic = document.getElementById('topic');
	const data = {
		content: topic.value
	};
	   
	fetch('http://localhost:80/entry', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(() => {
		topic.value = '';
		topic.focus();
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


// theres gotta be a better way but it works couldnt select all with class name
function clearForm() {
	
	if(usersName, topic, num5, num4, num3, num2, num1){
		usersName.value = ''
		topic.value = ''
		num5.value = ''
		num4.value = ''
		num3.value = ''
		num2.value = ''
		num1.value = ''
	};
};

