function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

const retrieveEmployeeInformation = function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let li = document.createElement('li')
  document.querySelector('ul').appendChild(li);
  li.append(`${retrieveEmployeeInformation()}`);
}

function addNewLiOnClick() {
  let form = document.querySelector('form');
  form.submit();
  form.reset();
}