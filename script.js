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
        let output =
          "<style><table><thead><tr><th>UserId</th><th>Provider</th><th>URL</th></thead><tbody>";
        for (let i in result) {
          output +=
            "<tr><td>" +
            result[i].userId +
            "</td><td>" +
            result[i].title +
            "</td><td>" +
            result[i].url +
            "</td></tr>";
        }
        output += "</tbody></table></style>";
        displayResources.innerHTML = output;
      });
  };