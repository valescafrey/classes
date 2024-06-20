

console.log("loaded");




function loadContent(page) {       //find the file
    var filePath = `${page}.html`;  //create AJAX request
    var ajax = new XMLHttpRequest (); //load the file
    ajax.open("GET", filePath, true);

    ajax.onload = function () {  // callback funtion
        if (ajax.status == 200){
           const container =  document.getElementById("main-content");
           if (container){
            container.innerHTML = ajax.responseText;
           }
        }

    };
    ajax.onerror = function () { // return error
        console.log("Error: " + ajax.statusText);
    };

    ajax.send (); 
}