
<%*
	// This template is designed to be run, not to create a new file from template
	// Get hostname
	const hostname = await tp.system.prompt("Hostname: ");
	
	// Get ipaddr if known
	const ipaddr = await tp.system.prompt("IP Addr: ");

	// make a new file with frontmatter to be read for variables to pass to the other files
	const fmatter = `---\nhostname: ${hostname}\nipaddr: ${ipaddr}\n---\n`;
    await tp.file.create_new(fmatter,`deletemehost`);
	
	// Get the folder the button is in
	const vfolder = await tp.file.folder(true);
	
	// Set the path and name of the folder to create
	const nfolder = `${vfolder}/${hostname}`;

	// Use app.vault.createFolder to make the new folder
	await app.vault.createFolder(`${nfolder}/Notes`);
	await app.vault.createFolder(`${nfolder}/Scans`);

	// Now use templater to Make new notes from templates in the various subfolders needed
	// this command creates a new note from the template "template host", named $hostname, open is false, in folder $nfolder
	await tp.file.create_new(tp.file.find_tfile("template host"),`${hostname}`,false,`${nfolder}`);
	await tp.file.create_new(tp.file.find_tfile("template notefolder"),"Notes",false,`${nfolder}/Notes`);
	await tp.file.create_new(tp.file.find_tfile("template scanfolder"),"Scans",false,`${nfolder}/Scans`);
	await tp.file.create_new(tp.file.find_tfile("template walkfolder"),"Walkthrough",false,`${nfolder}/`);

	// Now you should have a new host folder name $hostname, with 3 folders underneath for scans, notes, and walkthroughs

	// delete the tempfile with frontmatter to pass to other notes
	const pfile = tp.file.find_tfile("deletemehost");
	const dfile = pfile.path;
	await tp.user.deleteFile(dfile);
%>



	
	