// app.js local reviews data
const reviews = [
{
	id: 1,
	name: "Martin Muffin",
	job: "muffinslaw.com",
	img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut, totam rem aperiam, labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Enim nec dui nunc mattis. Turpis egestas integer eget aliquet nibh praesent tristique.",
},
{
	id: 2,
	name: "Rose's Roses LLC",
	job: "rosesflowershop.com",
	img: "https://images.pexels.com/photos/60909/rose-yellow-flower-petals-60909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
},
{
	id: 3,
	name: "Daniel Bossman",
	job: "fakecryptocoin.com",
	img: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
},
{
	id: 4,
	name: "Albert Williams",
	job: "isellstuff.com",
	img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
	text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
},
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//starting item

let currentItem = 0;

//inital item
window.addEventListener("DOMContentLoaded", function () {
	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
});

//show person based on item

function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
	}

// next btn

nextBtn.addEventListener("click", function() {
	currentItem++;
	if(currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

//prev btn
prevBtn.addEventListener("click", function() {
	currentItem--;
	if(currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

//random btn
randomBtn.addEventListener("click", function() {
	console.log("hello");
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
});