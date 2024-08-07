console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

progressBar.style.width = `0%`;

function calculateScrollPercentage() {
  const scrollPosition = window.scrollY;
  const viewPortHeight = window.innerHeight;
  const websiteHeight = document.body.clientHeight;

  // Calculate total scrollable area
  const totalScrollHeight = websiteHeight - viewPortHeight;

  // calculate how much percent of available space the user has scrolled
  const scrollPercentage = (scrollPosition * 100) / totalScrollHeight;
  // The function returns the scroll percentage as a string with a '%' sign appended, which is necessary for setting the CSS width property
  return scrollPercentage + `%`;
}

document.addEventListener(`scroll`, () => {
  progressBar.style.width = calculateScrollPercentage();
});
