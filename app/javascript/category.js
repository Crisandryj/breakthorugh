function createCategory() {
  //select group for listener and form
  let group = document.getElementById("budget_tracker_group");
  let form = document.querySelector(".budget_form");
  //Create category label
  let expensesLabel = document.createElement("label");
  let incomeLabel = document.createElement("label");
  setElementAttributes(expensesLabel, "for", "category_name", "Category");
  setElementAttributes(incomeLabel, "for", "category_name", "Category");
  //Selection elements
  let expensesSelect = document.createElement("select");
  let incomeSelect = document.createElement("select");
  setElementAttributes(expensesSelect, "id", "budget_tracker_category");
  setElementAttributes(expensesSelect, "name", "budget_tracker[category]");
  setElementAttributes(incomeSelect, "id", "budget_tracker_category");
  setElementAttributes(incomeSelect, "name", "budget_tracker[category]");
  //Expenses group options
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  setElementAttributes(option1, "value", "Groceries", "Groceries");
  setElementAttributes(option2, "value", "Utilities", "Utilities");
  //Income group options
  let incomeOption1 = document.createElement("option");
  let incomeOption2 = document.createElement("option");
  setElementAttributes(incomeOption1, "value", "Salary", "Salary");
  setElementAttributes(incomeOption2, "value", "Carry-Over", "Carry-Over");
  //Insert expense options in list
  expensesSelect.append(option1);
  expensesSelect.append(option2);
  //Insert expense options in list
  incomeSelect.append(incomeOption1);
  incomeSelect.append(incomeOption2);

  insertCategoryToForm(
    group,
    form,
    expensesLabel,
    incomeLabel,
    expensesSelect,
    incomeSelect
  );
}

function setElementAttributes(name, attribute, attName, content) {
  name.setAttribute(attribute, attName);
  name.textContent = content;
}

function insertCategoryToForm(group, form, label1, label2, select1, select2) {
  group.addEventListener("change", (event) => {
    if (event.target.value == "Expenses") {
      // Add label to form
      form.insertBefore(label1, form.children[3]);
      form.insertBefore(select1, form.children[4]);
      form.removeChild(label2);
      form.removeChild(select2);
    } else {
      form.insertBefore(label2, form.children[3]);
      form.insertBefore(select2, form.children[4]);
      form.removeChild(label1);
      form.removeChild(expensesSelect);
    }
  });
}

//run function
createCategory();
