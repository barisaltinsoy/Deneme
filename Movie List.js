const seriesList = list => {
    list.forEach((series, index) => {
    console.log(`${index+1}. ${series}`)
    })
}
seriesList(["a","b","c"])

console.log(seriesList)