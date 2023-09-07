window.addEventListener("load", function() {
  const iceCreamList = ["Mint Chip", "Cookies and Cream", "Cookie Dough", "Salted Caramel"];
  const list = document.querySelector("#favList");
  
  for (let i = 0; i < iceCreamList.length; i++) {
    let listItem = document.createElement("li");
    listItem.append(iceCreamList[i]);
    list.append(listItem);
  };
});