const discountbtn = document.querySelector(`#discount-btn`);
discountbtn.addEventListener("click", () => {
  let originalprice = document.querySelector(`#actualprice`).value;
  let discountprice = document.querySelector(`#discountprice`).value;

  if (originalprice === "" || discountprice === "") {
    alert("please fill all the required input field");
  } else {
    const discount = originalprice - discountprice;
    const discountpercentage = 100 * Number(discount / originalprice);
    document.querySelector(
      ".output"
    ).innerHTML = `congratulation 🎉 you got <span class="dp">${discountpercentage.toFixed(
      2
    )}% </span> discount on this product`;
    document.querySelector(".gif").style.display = "flex";
  }
});
