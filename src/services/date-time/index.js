export const getTime = (date)=>{
    const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes()
    const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours()

    return`${hours}:${minutes}`
}
export const getDate = (date)=>{
    const year = date.getFullYear()
    const month = (date.getMonth()+1).toString().length === 1 ? `0${date.getMonth()+1}` : date.getMonth()+1
    const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate()

    return`${day}/${month}/${year}`
}

export const getDateShort = (date)=>{
    const month = (date.getMonth()+1).toString().length === 1 ? `0${date.getMonth()+1}` : date.getMonth()+1
    const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate()

    return`${day}/${month}`
}