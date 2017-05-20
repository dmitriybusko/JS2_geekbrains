function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, handler);
  }
  return false;
}
// Вешаем обработчик события загрузки документа - DOM-Ready
addEvent(window, 'load', init);

function init(){
  output = d.getElementById('result'); // элемент, куда мы выведем полученный в ответе результат
  myform = d.getElementById('my_form'); // форма
  addEvent(myform, 'submit', sendAjaxRequest); // устанавливаем на форму обработчик события submit
  return false; 
}

function sendAjaxRequest(e){
  var evt = e || window.event;
  if(evt.preventDefault){
    evt.preventDefault(); // для нормальных браузров
  } else {
    evt.returnValue = false; // для IE старых версий
  }
  // формируем данные формы
var elems = myform.elements, // все элементы формы
    url = myform.action, // путь к обработчику (берём из атрибута action нашей формы)
    params = [],
    elName,
    elType;
// проходимся в цикле по всем элементам формы
for(var i = 0; i < elems.length; i++){
  elType = elems[i].type; // тип текущего элемента (атрибут type)
  elName = elems[i].name; // имя текущего элемента (атрибут name)
  if(elName){ // если атрибут name присутствует
    //добавляем параметр "ключ(name)=значение(value)"
    params.push(elems[i].name + '=' + elems[i].value);
  }
}
url += '?' + params.join('&');
}

var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Content-length', params.length);
xhr.setRequestHeader('Connection', 'close');
xhr.onreadystatechange = function() { 
  if(xhr.readyState == 4 && xhr.status == 200){
    output.innerHTML = JSON.parse(xhr.responseText);
  }
}
xhr.send(params.join('&'));