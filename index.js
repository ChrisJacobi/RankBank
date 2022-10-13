// displayRanks() // fetch, GET
// submitRanks() // fetch, POST
// ADD cors to API

async function displayRanks() {
   
    const res = await fetch('http://localhost:80/entries');   
    const entries = await res.json(); 
    let display = document.getElementById('entries');

    entries.forEach((entry) => {
        const rank = document.createElement('h1');
        rank.innerText = entry.content;
            // console.log(entry.content);
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

// function deleteEntry(id) {
//     fetch(`http://localhost:80/${id}`, {
//         method: 'DELETE',
//     }).then((res) => {
//         const container = document.getElementById(id);
//         container.remove();
//     });
// }



const test = document.getElementById('title');

console.log(test.innerText);
 