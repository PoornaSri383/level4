const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    function isOverDue(item) {
      return item.dueDate < today && item.completed == false;
    }

    return all.filter(isOverDue);
  };

  const dueToday = () => {
    function isDueToday(item) {
      return item.dueDate == today;
    }

    return all.filter(isDueToday);
  };

  const dueLater = () => {
    function isDueLater(item) {
      return item.dueDate > today;
    }

    return all.filter(isDueLater);
  };

  const toDisplayableList = (list) => {
    var displayableList = list
      .map((task) =>
         `${task.completed ? "[x]" : "[ ]"} ${task.title} ${
            task.dueDate !== today ? task.dueDate : " "
          }`
      )
      .join("\n");

    return displayableList;
  };

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
};

module.exports = todoList;
// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

// const todos = todoList();

// const formattedDate = (d) => {
//   return d.toISOString().split("T")[0];
// };

// var dateToday = new Date();
// const today = formattedDate(dateToday);
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// );
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// );

// todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
// todos.add({ title: "Pay rent", dueDate: today, completed: true });
// todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
// todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
// todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

// console.log("My Todo-list\n\n");

// console.log("Overdue");
// var overdues = todos.overdue();
// var formattedOverdues = todos.toDisplayableList(overdues);
// console.log(formattedOverdues);
// console.log("\n\n");

// console.log("Due Today");
// let itemsDueToday = todos.dueToday();
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
// console.log(formattedItemsDueToday);
// console.log("\n\n");

// console.log("Due Later");
// let itemsDueLater = todos.dueLater();
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
// console.log(formattedItemsDueLater);
// console.log("\n\n");

