
jQuery(function() {
	$( document ).ready(function() {
		//Push data
		var todos = [];
		var count = 0;
		todos.push(["Viec can lam 1",false]);
		todos.push(["Viec can lam 2",true]);
		todos.push(["Viec can lam 3",false]);
		todos.push(["Viec can lam 4",false]);
		var todo_text = "<ul class='todo-list list-unstyled'>";
		$.each(todos, function( index, value ) {
			var text_done = "";
			var class_done = "";
			count += value[1] ? 0 : 1;
			if(value[1]) {
				text_done = "checked";
				class_done = "done-true";
			}
			todo_text += "<li class='todo-items "+class_done+"'>";
			todo_text += "<input class='todo-done' type='checkbox'" + text_done + "/><span class='todo-item'>" + value[0] + "</span>";
			todo_text += "</li>";
		});
		todo_text += "</ul>";
		$(".wrapper-toto").append(todo_text);

		// Count of total
		function counter(){
			var total = $(".todo-items").length;
			var itemDone = $(".todo-items.done-true").length;
			$(".item-remain").text(total - itemDone);
			$(".item-total").text(total);
		}
		counter();
		//add task
		$(".btn-add-task").click(function(){
			var todo_text = $(".todo-text").val();
			if(todo_text !="") {
				var text = "<li class='todo-items'>";
				text += "<input class='todo-done' type='checkbox'/><span class='todo-item'>" + todo_text + "</span>";
				text += "</li>";
				$(".todo-list").append(text);
				$(".todo-text").val("");
			}
			else {
				alert("Please insert Text");
			}
			counter();
		})
		function completeItem(){
			if(this.checked) {
				$(this).parent().addClass("done-true");
			}
			else {
				$(this).parent().removeClass("done-true");
			}
			counter();
		}
		/*every time user clicks on item, check if it has the class .complete. If yes, perform competeItem.
		I would prefer .on over .click because the former can use less memory and work for dynamically added elements.*/
		jQuery(document).on('click', '.todo-done', completeItem); 
	});

});