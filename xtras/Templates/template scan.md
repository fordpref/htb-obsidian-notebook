<%* 
	const scanname = await tp.system.prompt("scan name: ");
	await tp.file.rename(`${scanname}`);
%>

# Scan: <% scanname %>

date: <% tp.date.now("YYYY.MM.DD") %>

Data:



