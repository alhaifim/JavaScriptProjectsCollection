document.getElementById('button').addEventListener('click', loadData );

function loadData(){
  // Create an XHR object.  inistationating that like any other object
  const xhr = new XMLHttpRequest();

  // Open.  Specify the type of request we will make and the URL or the file name we are going to make it to
    xhr.open('GET','data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
          console.log(this.responseText);
        }
      }
    xhr.send();
    //HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"

}
