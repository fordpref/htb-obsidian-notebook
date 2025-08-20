<%* 
	const notename = await tp.system.prompt("Note name: ");
	await tp.file.rename(`${scanname}`);
%>

# Note: <% notename %>

date: <% tp.date.now("YYYY.MM.DD") %>

Data:


