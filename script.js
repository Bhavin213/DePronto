fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
     // console.log(data); json format
     return data.json(); //converted to object
}).then((ObjectData)=>{
    console.log(ObjectData[0].title);
    let tableData="";
    ObjectData.map((values)=>{
        tableData+=`<tr>
        <td>${values.userId}</td>
        <td>${values.id}</td>
        <td>${values.title}</td>
        <td>${values.body}</td>
      </tr>`;
    });
    document.getElementById("table_body").
    innerHTML=tableData;
}).catch((err)=>{
    console.log(err);
})
