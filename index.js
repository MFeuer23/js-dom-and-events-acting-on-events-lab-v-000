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
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', addNewElementAsLi);
  document.querySelector('input[type="text"]').reset
}