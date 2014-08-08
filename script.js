$( document ).ready(function() {
	//Push data
	var todos = [];
	todos.push(["Viec can lam 1",false]);
	todos.push(["Viec can lam 2",true]);
	todos.push(["Viec can lam 3",false]);
	var todo_text = "<ul class='todo-list unstyle'>";
	$.each(todos, function( index, value ) {
		var text_done = "";
		var class_done = "";
		if(value[1]) {
			text_done = "checked";
			class_done = "done-true"
		}
		todo_text += "<li class='todo-items "+class_done+"'>";
		todo_text += "<input class='todo-done' type='checkbox'" + text_done + "/><span class='todo-item'>" + value[0] + "</span>";
		todo_text += "</li>";
	});
	todo_text += "</ul>";
	$(".wrapper-toto").append(todo_text);


	//Change input
	$(".todo-done").change(function() {
		if(this.checked) {
			$(this).parent().addClass("done-true");
		}
		else {
			$(this).parent().removeClass("done-true");			
		}
	})
});