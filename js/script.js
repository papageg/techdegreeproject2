/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const ul = document.querySelector('.student-list');
const li = ul.children;
const divStudentDetails = li.children;
const avatar = document.querySelectorAll('.avatar');
const h3 = document.querySelectorAll('h3');
const yearJoined = document.querySelectorAll('.date');
const arrayOfTenStudents = [li[9], li[19], li[29], li[39], li[49], li[59]];
/*
const firstTen = li[9];
const secondTen = li[19];
const thirdTen = li[29];
const fourthTen = li[39];
const fifthTen = li[49];
const sixthTen = li[59];
*/
console.log(firstTen);
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
/*
function hideAllItems (students , page, numStudent) {
  //Create number genertor to grab 10 Students
  // Need to add numbers to each li student
  if (let i = numStudent; i <= page; i++) {

  }
  let firstStudent = 10 * page;
  let lastStudent = 10 * (page + 1) - 1;
  if () {

  }
}
showStudents(li, 1);
*/

/*
function showStudents(list, page) {
    let pageFirstIndex = 10 * page;
    let pageLastIndex = 10 * (page + 1) - 1;
    for (let i = 0; i < list.length; i++) {
      let listIndex = Array.prototype.indexOf.call(ul.children, list[i]);

      if (listIndex >= pageFirstIndex && listIndex <= pageLastIndex) {
        list[i].style.display = "";
      } else {
        list[i].style.display = "none";
      }
    }
  }
//showStudents(li, 1);
*/
// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
