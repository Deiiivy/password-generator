


const aph = 'SAJ876dsadja80dKS9dadnlD70dNKAD8dsJKDAd89a3083n919'


const generate = (length = 10) => {
    let result= ""
        for(let i = 0; i <= length; i++) {
            result += aph.charAt(Math.floor(Math.random() * aph.length))
        }
    return result;
}


const pass =  generate(20);
console.log(pass);