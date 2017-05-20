window.addEventListener('load', init, false);

function init(){
	myform = document.getElementById('my_form');
	myform.addEventListener('submit', sendAjaxRequest, false);
	return false; 
}

function sendAjaxRequest(e){
	var evt = e || window.event;
	if(evt.preventDefault){
		evt.preventDefault(); 
	}
	var elems = myform.elements; // все элементы формы
	var params = [];
	var elName;
	var elType;
	for(var i = 0; i < elems.length; i++){
		  elType = elems[i].type; // тип текущего элемента (атрибут type)
		  elName = elems[i].name; // имя текущего элемента (атрибут name)
		  if(elName){ // если атрибут name присутствует
		    //добавляем параметр "ключ(name)=значение(value)"
		    params.push(elems[i].name + '=' + elems[i].value);
		  }
	}
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost/validator.php', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send(params.join('&'));
	xhr.onreadystatechange = function() { 
		if(xhr.readyState == 4 && xhr.status == 200){
			var answer = JSON.parse(xhr.responseText);
			if(answer.result == true)
				alert("All fields are correct");
			else{
				var str = '';
				for(i in answer.error){
					str += answer.error[i]+"\n";
				}
				alert(str);
			}
		}
	}
}

	