const navItem = document.querySelectorAll(".nav-item");
const screenContainer = document.querySelectorAll(".screen-container");
function activeLink() {
  navItem.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
    const cur = this.dataset.index;
    screenContainer.forEach((sc) => {
      sc.classList.remove("active");
    });
    const toSee = document.querySelector(
      `.screen-container[data-index='${cur}']`
    );
    toSee.classList.add("active");
  });
}
navItem.forEach((item) => item.addEventListener("click", activeLink));

const saveBtn = document.querySelector(".save-contact");
saveBtn.addEventListener("click", function () {
  var vcard =
    "BEGIN:VCARD\nVERSION:2.1\nN:;Adora Gifts;;;\nFN:Adora Gifts\nTEL;CELL:098-351-6809\nTEL;CELL:092-589-6100\nADR;WORK;CHARSET=UTF-8;ENCODING=QUOTED-PRINTABLE:;;=E1=88=88=E1=89=A1=20=E1=88=98=E1=89=A5=E1=88=AB=E1=89=B5=20=E1=8A=A0=\n=E1=8B=AD=E1=88=83=E1=88=9D=20=E1=88=85=E1=8A=95=E1=8D=83=20=31=E1=8A=\n=9B=20=E1=8D=8E=E1=89=85;;;;\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  const newLink = document.createElement("a");
  newLink.download = "Adora Gifts" + ".vcf";
  newLink.textContent = "Adora Gifts";
  newLink.href = url;
  newLink.click();
});

const btx = document.querySelector(".share-container");

btx.addEventListener("click", () => {
  navigator.share({
    title: document.title,
    img: "./img/IMG_20240823_203554_971-image.jpg",
    text: "For Your Joy",
    url: window.location.href,
  });
});

const form = document.querySelector("form");
const name_ = document.querySelector("input[name='name']");
const phone = document.querySelector("input[name='phone']");
const message = document.querySelector("textarea[name='message']");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(name_, phone, message);
  console.log(name_.value, phone.value, message.value);
  sendMessage();
});
async function sendMessage() {
  const url = `https://api.telegram.org/bot7256933927:AAFy19j4RNhJ_xsnOypGdafRqWMAY6LNX3Q/sendMessage?chat_id=-1002245094753&text=<b>Name:</b>%20${name_.value}%0A<b>Phone:</b>%20${phone.value}%0A<b>Message:</b>%20${message.value}&parse_mode=HTML`;
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    form.reset();
    alert("form sent!");
  } else {
    alert("form not sent!");
    alert(data);
  }
}
