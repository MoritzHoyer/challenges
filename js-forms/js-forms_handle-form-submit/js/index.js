console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log("hello");

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const firstName = data.firstName;
  const ageBadnessSum = Number(data.badness) + Number(data.age);

  console.log(data);
  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}`);
});
