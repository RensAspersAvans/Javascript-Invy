function getStorage(item) {
    let selectedItem = item;
    if (localStorage.getItem("selectedItem") === null) {
      selectedItem = [];
    } else {
      selectedItem = JSON.parse(localStorage.getItem("selectedItem"));
    }
    return history;
  }

  function addStorage(item) {
    const storedHistory = Store.getHistory();
    storedHistory.push(item);

    localStorage.setItem("item", JSON.stringify(storedHistory));
  }