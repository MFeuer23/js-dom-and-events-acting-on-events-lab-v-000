function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const retrieveEmployeeInformation = function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi(retrieveEmployeeInformation) {
  document.querySelector('ul').append(retrieveEmployeeInformation)
}