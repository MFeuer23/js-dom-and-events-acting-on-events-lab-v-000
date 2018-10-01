function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const retrieveEmployeeInformation = function () {
  return document.querySelector('input').value;
}

function addNewElementAsLi()