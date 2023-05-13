function popshift(){
    var buah = ['pisang','jeruk','apel','mangga'];
    console.log(buah);
    buah.pop()
    console.log(buah)
    var buah2 = buah.shift()
    return buah
}
console.log(popshift());