function timeFormat(timeString) {
    const date = new Date(timeString)
    let ts = ''
    ts += date.getFullYear() + '-' + 
    (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-' + 
    (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate())
    
    return ts
}

export default timeFormat