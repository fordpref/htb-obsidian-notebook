<%*
	const labname = await tp.system.prompt("New Prolab Name: ");
	await tp.file.create_new(tp.file.find_tfile("template prolab"),`${labname}/${labname}`)
%>