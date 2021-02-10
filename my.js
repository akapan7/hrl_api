/*
function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

*/


function export2txt(originalData) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
    type: "text/plain"
  }));
  a.setAttribute("download", "data.json");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}


function testGS(){
    const url="https://script.google.com/macros/s/AKfycbyVJ1atQPDr7J_SmlrveoZsI0nqXtxVnThOjrx165pUh-rnif9BablI/exec";
    fetch(url).then(d => d.json())
    .then(d => {
      var allData=d[0].data;
      var par = (document.getElementById("par")).value;
      var year=(document.getElementById("year")).value;
      var id=(document.getElementById("id")).value;
      var nation=(document.getElementById("nation")).value;
      var name=(document.getElementById("name")).value;
      var address=(document.getElementById("address")).value;
     

      //document.getElementById("parText").textContent= par;
      var correctData;
      if (par=="ALL"){
        console.log("all");
        correctData=allData;
      }
      if (par=="YR"){
        console.log("year");
        correctData=allData.filter(function (person) { return person.YR == year });
      }
      if (par=="ID"){
        console.log("id");
        correctData=allData.filter(function (person) { return person.ID == id });
      }
      if (par=="NATION"){
        console.log("nation");
        correctData=allData.filter(function (person) { return person.NATIONALITY== nation });
      }
      if (par=="NAME"){
        console.log("name");
        correctData=allData.filter(function (person) { return person.NAME == name });
      }
      if (par=="ADDRESS"){
        console.log("address");
        correctData=allData.filter(function (person) { return person.ADDY == address });
      }
      

      //console.log(allData.filter(function (person) { return person.parameter == "1920" }));
      var jsonOut = JSON.stringify(correctData);

      console.log(correctData);

      //export2txt(correctData);
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonOut);
      var dlAnchorElem = document.getElementById('downloadAnchorElem');
      dlAnchorElem.setAttribute("href",     dataStr     );
      dlAnchorElem.setAttribute("download", "out.json");
      dlAnchorElem.click();
      document.getElementById("app").textContent= jsonOut;
    });
    
    //console.log(d);
    //fetch first name
    //fetch last name

}

function addGS(){
    const url="https://script.google.com/macros/s/AKfycbyVJ1atQPDr7J_SmlrveoZsI0nqXtxVnThOjrx165pUh-rnif9BablI/exec";
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"Olivia"}) // body data type must match "Content-Type" header
      });
}

function clear(){
  document.getElementById("app").textContent= "";
}

document.getElementById("btn2").addEventListener("click",addGS);
document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn3").addEventListener("click",clear);
