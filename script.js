document.querySelector("#retrieve-resources").onclick = () => {
    let displayResources = document.querySelector("#display-resources");
    displayResources.textContent =
      "Loading data from JSON source...";
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST"
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        let output= "<table border='1' ><thead><tr><th>UserId</th><th>Id</th><th>Title</th><th>Body</th></thead><tbody>";
        for (let i in result) {
          console.log("hi");
          console.log(result[i].userId);
          output +=
            "<tr><td>" +
            result[i].userId +
            "</td><td>" +
            result[i].id +
            "</td><td>" +
            result[i].title +
            "</td><td>"+
            result[i].body +
            "</td></tr>";
            console.log(result[i].userId);
        }
        output += "</tbody></table></style>";
        displayResources.innerHTML = output;
      });
  };