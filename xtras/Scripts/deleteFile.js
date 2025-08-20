 
module.exports = async function deleteFile(filePath) {  
	const file = app.vault.getAbstractFileByPath(filePath);  
	if (file) {  
		await app.vault.delete(file); // true sends to system trash, false to Obsidian trash  
		return `File '${filePath}' deleted successfully.`;  
	} else {  
		return `File '${filePath}' not found.`;  
	}  
}  
