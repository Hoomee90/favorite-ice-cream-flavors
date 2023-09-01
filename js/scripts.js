window.addEventListener("load", function() {
  const iceCreamList = ["Mint Chip", "Cookies and Cream", "Cookie Dough", "Salted Caramel"];
  const list = document.querySelector("#favList");
  
  iceCreamList.forEach(cream => {
    let listItem = document.createElement("li");
    listItem.append(cream);
    list.append(listItem);
  });
});