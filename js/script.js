//document.addEventListener("DOMContentLoaded", () => {
  // Add variables
  const ul = document.querySelector(".student-list");
  const liItems = ul.children;
  const pagediv = document.querySelector(".page");
  // Create a function to hide all of the items in the list excpet for the ten to show
  function showStudents(list, page) {
    let pageFirstIndex = 10 * page;
    let pageLastIndex = 10 * (page + 1) - 1;
    for (let i = 0; i < list.length; i++) {
      let listIndex = Array.prototype.indexOf.call(liItems, list[i]);

      if (listIndex >= pageFirstIndex && listIndex <= pageLastIndex) {
        list[i].style.display = "";
      } else {
        list[i].style.display = "none";
      }
    }
  }

  // Create and append the pagination links
  const appendPages = list => {
    //creates 5 pages since math.floor on 5.4 is 5
    const pagesNeeded = Math.floor(list.length / 10);
    //create a div element to hold pagination
    const div = document.createElement("div");
    div.className = "pagination";
    //append new div to bottom of page
    pagediv.appendChild(div);
    //creat and unordered list and appened to the new div
    const ul = document.createElement("ul");
    div.appendChild(ul);
    /* loop in pagination and add in 6 pages since the loops runs for 0 then goes to 5 index
      each time the loops runs it adds a list item and put a anchor with a empty link
    */
    for (let i = 0; i <= pagesNeeded; i++) {
      const li = document.createElement("li");
      ul.appendChild(li);
      const a = document.createElement("A");
      a.href = "#";
      a.textContent = i + 1;
      li.appendChild(a);
      //
      if (a.textContent === "1")
        //make a default setting for the first link to be active
        a.className = "active";
      div.addEventListener("click", e => {
        // Adding functionality for the pagination links
        // by adding the event listener to the div directly and checking if the pagination's link text is equal to 'i +1'
        if (e.target.textContent == i + 1) {
            // displaying the students according to which page is being clicked
          showStudents(list, i);
          e.target.className = "active";
        } else {
          a.className = "inactive";
        }
      });
    }
  };
  appendPages(liItems);
  showStudents(liItems,0);
