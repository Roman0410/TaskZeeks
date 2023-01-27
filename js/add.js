const button = document.getElementById("more");
let list = document.querySelector(".casino-list");
const confiq = [
  {
    number: "6",
    logo: "./img/Polygon(1).png",
  },
  {
    number: "7",
    logo: "./img/Polygon(2).png",
  },
  {
    number: "8",
    logo: "./img/Polygon.png",
  },
];

button.addEventListener("click", addElem);
let flag = true;

function addElem() {
  if (flag) {
    confiq.forEach((item) => {
      list.insertAdjacentHTML(
        "beforeend",
        `<li class="casino-item remove">
              <ul class="casino-info">
                  <li class="number">${item.number}</li>
                  <li class="logo"><img src=${item.logo} alt="" /></li>
                  <li class="bonus">
                  <p>100% up to</p>
                  <p>€100+100 FS</p>
                  <p>+300 bonus Spins</p>
                  </li>
                  <li class="rate">
                  <div class="rate-lvl">
                        <img src="./img/star.png" alt="" />
                        <img src="./img/star.png" alt="" />
                        <img src="./img/star.png" alt="" />
                        <img src="./img/star.png" alt="" />
                        <img src="./img/star.png" alt="" />
                      </div>
                  <p>8.45</p>
                  <a>Read Review</a>
                  </li>
                  <li class="deposit">
                  <ul class="deposut-list">
                      <li class="deposit-item">
                      <img src="./img/mastercard-2 1.png" alt="" />
                      </li>
                      <li class="deposit-item">
                      <img src="./img/ecopayz.png" alt="" />
                      </li>
                      <li class="deposit-item">
                      <img src="./img/Paysafecard_logo 1.png" alt="" />
                      </li>
                      <li class="deposit-item">
                      <img src="./img/paypal 1.png" alt="" />
                      </li>
                      <li class="deposit-item">
                      <img src="./img/neteller 1.png" alt="" />
                      </li>
                      <li class="deposit-item">
                      <img src="./img/trustly-seeklogo.com 1.png" alt="" />
                      </li>
                  </ul>
                  </li>
                  <li class="btn">
                  <button>Get Bonus</button>
                  </li>
              </ul>
              </li>`
      );
    });
    button.textContent = "Hide";
    flag = false;
    return;
  }
  const elements = Array.prototype.slice.call(
    document.querySelectorAll(".casino-item")
  );
  const removeElements = elements.slice(-confiq.length);
  removeElements.forEach((elem) => {
    elem.remove();
  });
  button.textContent = "See all casino";
  flag = true;
}
