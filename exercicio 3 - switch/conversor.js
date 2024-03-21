const medida = prompt("Digite um valor em metros")

const unidade = prompt("Qual unidade de medida deseja converter" +
"\n1 - Milimetros (mm)" +
"\n2 - Centimetros (cm)" +
"\n3 - Decimetros (dm)" +
"\n4 - Decametros (dam)" +
"\n5 - Hectometros (hm)" +
"\n6 - Quilometros (km)"
)

switch(unidade){
    case "1":
        alert("resultado: " + medida + "m = "+ medida*1000 + "nm")
        break
    case "2":
        alert("resultado: " + medida + "m = "+ medida*100 + "cm")
        break
    case "3":
        alert("resultado: " + medida + "m = "+ medida*10 + "dm")
        break
    case "4":
        alert("resultado: " + medida + "m = "+ medida/10 + "dam")
        break
    case "5":
        alert("resultado: " + medida + "m = "+ medida/100 + "hm")
        break
    case "6":
        alert("resultado: " + medida + "m = "+ medida/1000 + "km")
        break
    default:
        alert("opção inválida")
    
}