console.log(document.querySelector("h1"));

const heading2 = document.querySelector("h2");
console.log(heading2);

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

const listItems = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i]);
}

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].innerText);
}

const heading1 = document.querySelector("h1");
heading1.style.color = "purple";

heading1.style.border = "1px green solid";
heading1.style.backgroundColor = "lightGray";
heading1.style.padding = "1em";

const div = document.querySelector("div");
console.log(div.className);

div.classList.add("container");
console.log(div.className);

const pageHeading = document.querySelector("h1");
pageHeading.innerText = "Updated using innerText";

const allTheListItems = document.querySelectorAll("li");

for (let i = 0; i < allTheListItems.length; i++) {
  allTheListItems[i].innerText = i + " changed";
}

const container = document.querySelector("div");
container.innerHTML = `<p>
                        <b>Bold text:</b> unbolded text
                    </p>`;

const list = document.querySelector("ul");

const existingHTML = list.innerHTML;

const newHTML = "<li>New item at the start</li>";

list.innerHTML = newHTML + existingHTML;

list.innerHTML = list.innerHTML + "<li>New item at the end</li>";
