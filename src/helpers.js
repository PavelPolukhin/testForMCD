const countsFiles = (files, folders) => {
    if (files && folders) {
        return files.length + folders.length
    } else if (files) {
        return files.length
    } else if (folders) {
        return folders.length
    } else {
        return ''
    }
}
export default { countsFiles };
