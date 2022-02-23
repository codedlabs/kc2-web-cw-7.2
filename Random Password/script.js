// Database قاعدة البيانات
const chars = [
  { 1: "abcdefghijklmnopqrstuvwxyz" },
  { 2: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { 3: "0123456789" },
  { 4: "!@#$%^&*()_+~`|}{[]:;?><,./-=" },
];

function generate() {
  let randomPassword = "";
  randomPassword =
    randomPassword +
    chars[0]["1"].charAt(Math.floor(Math.random() * chars[0]["1"].length));
  randomPassword =
    randomPassword +
    chars[1]["2"].charAt(Math.floor(Math.random() * chars[1]["2"].length));
  randomPassword =
    randomPassword +
    chars[2]["3"].charAt(Math.floor(Math.random() * chars[2]["3"].length));
  randomPassword =
    randomPassword +
    chars[3]["4"].charAt(Math.floor(Math.random() * chars[3]["4"].length));
  randomPassword =
    randomPassword +
    chars[0]["1"].charAt(Math.floor(Math.random() * chars[0]["1"].length));
  randomPassword =
    randomPassword +
    chars[1]["2"].charAt(Math.floor(Math.random() * chars[1]["2"].length));
  randomPassword =
    randomPassword +
    chars[2]["3"].charAt(Math.floor(Math.random() * chars[2]["3"].length));
  randomPassword =
    randomPassword +
    chars[3]["4"].charAt(Math.floor(Math.random() * chars[3]["4"].length));

  console.log(randomPassword);
  //   document.getElementById("display").innerHTML = randomPassword;
  display.value = randomPassword;
}
