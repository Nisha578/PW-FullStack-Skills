// NECESSARY VARIABLES AND ARRAY WHICH IS USED TO STORE
let selectedItemRow = [];
let totalQuantity = 0;
let totalAmount = 0;
let srNoCount = 0;
// let itemPriceArray = [];

const selectItem = (id) => {
  // DISPLAYING OUTPUT SCREEN
  document.querySelector(".foot").style.display = "flex";

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // HERE WE ARE UPDATING THE QUANTITY, TOTAL QUANTITY AND TOTAL AMOUNT IF THE ROW IS ALREADY CREATED IN THE OUTPUT

  if (selectedItemRow[id] != undefined) {
    selectedItemRow[id].quantity.textContent =
      Number(selectedItemRow[id].quantity.textContent) + 1;

    selectedItemRow[id].price.textContent = `${itemdata[id].itemPrice} * ${
      selectedItemRow[id].quantity.textContent
    } = ${
      Number(itemdata[id].itemPrice) *
      Number(selectedItemRow[id].quantity.textContent)
    }`;

    // selectedItemRow[id].appendChild(selectedItemRow[id].price);

    //    itemPriceArray[id] = itemdata[id].itemprice;

    totalQuantity += 1;
    totalAmount += Number(itemdata[id].itemPrice);

    document.querySelector(
      ".total-quantity"
    ).innerHTML = `Total Quantity : <span>${totalQuantity}</span>`;

    document.querySelector(
      ".total-amount"
    ).innerHTML = `Total Amount : <span>\u20B9${totalAmount}</span>`;

    return undefined;
  }

  // ++++++++++++++++++++++++++++++++++++++++++ ++++++++++++++++++++++++++++++++++++
  // WHEN YOU CLICK ON ADD TO CART BUTTON ON FIRST TIME THEN , BELOW THE FOLLOWING CODE IS APPLIED

  // CREATING DIV ELEMENT
  selectedItemRow[id] = document.createElement("div");
  selectedItemRow[id].classList.add("creating-content");

  document.querySelector(".price-content").appendChild(selectedItemRow[id]);

  // adding srNo.
  selectedItemRow[id].srNo = document.createElement("h3");
  selectedItemRow[id].srNo.textContent = srNoCount + 1;
  selectedItemRow[id].appendChild(selectedItemRow[id].srNo);

  // adding image
  selectedItemRow[id].itemImg = document.createElement("img");
  selectedItemRow[id].itemImg.src = itemdata[id].itemImg;
  selectedItemRow[id].appendChild(selectedItemRow[id].itemImg);

  // adding item name
  selectedItemRow[id].itemName = document.createElement("h3");
  selectedItemRow[id].itemName.textContent = itemdata[id].itemName;
  selectedItemRow[id].appendChild(selectedItemRow[id].itemName);

  // adding Quantity
  selectedItemRow[id].quantity = document.createElement("h3");
  selectedItemRow[id].quantity.textContent = 1;
  selectedItemRow[id].appendChild(selectedItemRow[id].quantity);

  // adding price
  selectedItemRow[id].price = document.createElement("h3");
  selectedItemRow[id].price.textContent = `${itemdata[id].itemPrice} * ${
    selectedItemRow[id].quantity.textContent
  } = ${
    Number(itemdata[id].itemPrice) *
    Number(selectedItemRow[id].quantity.textContent)
  }`;

  selectedItemRow[id].appendChild(selectedItemRow[id].price);

  // for horizontal line
  selectedItemRow[id].hr = document.createElement("hr");
  document.querySelector(".price-content").appendChild(selectedItemRow[id].hr);

  // calculate total quantity and total price

  totalQuantity += 1;
  totalAmount += Number(itemdata[id].itemPrice);

  document.querySelector(
    ".total-quantity"
  ).innerHTML = `Total Quantity : <span>${totalQuantity}</span>`;

  document.querySelector(
    ".total-amount"
  ).innerHTML = `Total Amount : <span> \u20B9${totalAmount}</span>`;
  srNoCount++;
};

// FOLLOWING ARE THE OBJECT FROM WHERE I TAKING ITEMNAME, ITEMPRICE AND ITEMIMAGE
const itemdata = [
  {
    itemName: "wiredEarphone",
    itemPrice: "499",
    itemImg: "./Images/img1.jpg",
  },
  {
    itemName: "wirelessEarphone",
    itemPrice: "999",
    itemImg: "./Images/img2.jpg",
  },
  {
    itemName: "headphone",
    itemPrice: "1999",
    itemImg: "./Images/img3.jpg",
  },
  {
    itemName: "hp",
    itemPrice: "49999",
    itemImg: "./Images/img4.jpg",
  },
  {
    itemName: "lenovolaptop",
    itemPrice: "18999",
    itemImg: "./Images/img5.jpg",
  },
  {
    itemName: "apple",
    itemPrice: "10999",
    itemImg: "./Images/img6.jpg",
  },
  {
    itemName: "apple-2",
    itemPrice: "9999",
    itemImg: "./Images/img7.jpg",
  },
  {
    itemName: "tablet",
    itemPrice: "19999",
    itemImg: "./Images/img8.jpg",
  },
  {
    itemName: "tablet-2",
    itemPrice: "9999",
    itemImg: "./Images/img9.jpg",
  },
];
