document.querySelector("#retrieve-resources").onclick = () => {
let displayResources = document.querySelector("#display-resources");
displayResources.textContent =
"Loading data ...";
const url='http://jsonplaceholder.typicode.com/posts';
fetch(url).then((response)=> {

  response.json().then((posts)=>{
    
   let records= "<table border='1' ><thead><tr><th>UserId</th><th>Id</th><th>Title</th><th>Body</th></thead><tbody>";

    posts.map((data)=>{
        records +=
            "<tr><td>" +
            data.userId +
            "</td><td>" +
            data.id +
            "</td><td>" +
            data.title +
            "</td><td>" +
            data.body +
            "</td></tr>";
    });
    records += "</tbody></table>";
    displayResources.innerHTML = records;
  });
}).catch(err => console.error(err));
}