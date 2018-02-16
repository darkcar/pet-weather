$(function(){
	// request all data
	$.get('https://stormy-shore-87607.herokuapp.com/api/pets', function(data) {
		data = JSON.parse(data);
		var html = '';
		$.each(data, function(index, value) {
			html += '<tr><td>' + value.name + '</td><td>'+ value.type +'</td><td>'+value.breed+'</td><td><a href="/pets/'+value.id+'" class="alert-link">View</a></td></tr>';
		});
		$('tbody').append(html);
	});

});