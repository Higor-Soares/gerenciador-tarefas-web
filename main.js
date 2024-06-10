function addNewTask() {
    var list = document.getElementById('list');
    var text = document.getElementById('task_name').value;

    if(text.length == 0) {
        alert('A atividade precisa de mais de pelo menos um caracter')
        return
    }

    var listItem = document.createElement('li');
    listItem.className = 'list-item';


    const textElement = document.createTextNode(text);

    listItem.appendChild(textElement);
    list.appendChild(listItem);
}