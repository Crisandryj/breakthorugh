function createCategory() {
  //EXPENSES
  //Create category label
  let expensesLabel = document.createElement("label");
  setElementAttributes(expensesLabel, "for", "category_name", "Category");
  //select group for listener and form
  let group = document.getElementById("budget_tracker_group");
  let form = document.querySelector(".budget_form");
  //Selection elements
  let expensesSelect = document.createElement("select");
  expensesSelect.setAttribute("id", "budget_tracker_category");
  expensesSelect.setAttribute("name", "budget_tracker[category]");

  //Expenses group options
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  option1.setAttribute("value", "Groceries");
  option2.setAttribute("value", "Utilities");
  option1.textContent = "Groceries";
  option2.textContent = "Utilities";
  //Insert expense options in list
  expensesSelect.append(option1);
  expensesSelect.append(option2);
  //INCOME
  //Create category label
  let incomeLabel = document.createElement("label");
  setElementAttributes(incomeLabel, "for", "category_name", "Category");
  //Selection elements
  let incomeSelect = document.createElement("select");
  incomeSelect.setAttribute("id", "budget_tracker_category");
  incomeSelect.setAttribute("name", "budget_tracker[category]");
  //Expenses group options
  let incomeOption1 = document.createElement("option");
  let incomeOption2 = document.createElement("option");
  incomeOption1.setAttribute("value", "Salary");
  incomeOption2.setAttribute("value", "Carry-Over");
  incomeOption1.textContent = "Salary";
  incomeOption2.textContent = "Carry-Over";
  //Insert expense options in list
  incomeSelect.append(incomeOption1);
  incomeSelect.append(incomeOption2);
  //Add corresponding select to category
  group.addEventListener("change", (event) => {
    if (event.target.value == "Expenses") {
      // Add label to form
      form.insertBefore(expensesLabel, form.children[3]);
      form.insertBefore(expensesSelect, form.children[4]);
      form.removeChild(incomeLabel);
      form.removeChild(incomeSelect);
    } else {
      form.insertBefore(incomeLabel, form.children[3]);
      form.insertBefore(incomeSelect, form.children[4]);
      form.removeChild(expensesLabel);
      form.removeChild(expensesSelect);
    }
  });
}

function setElementAttributes(name, attribute, attName, content) {
  name.setAttribute(attribute, attName);
  name.textContent = content;
}
//run function
createCategory();
