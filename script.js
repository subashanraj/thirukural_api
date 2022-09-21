

async function foo() {
    try {
        let x = document.getElementById("userinput").value
        console.log(x)
        let api = await fetch(`https://api-thirukkural.vercel.app/api?num=${1}`)
        let result = await api.json()
        console.log(result)

        let chap_tam = `பகுதி : ${result.chap_tam}`
        let chap_eng = `Chapter : ${result.chap_eng}`
        document.getElementById("chap_tam").innerHTML = `${chap_tam}`
        document.getElementById("chap_eng").innerHTML = `${chap_eng}`

        let eng = ` ${result.eng}`
        let kural1 = `${result.line1}`
        let kural2 = `${result.line2}`
        document.getElementById("eng").innerHTML = `Philosophy : ${eng}`
        document.getElementById("part1_tam").innerHTML = `குறள் : ${kural1}`
        document.getElementById("part2_tam").innerHTML = `${kural2}`

        let tam_exp = `${result.tam_exp}`
        let eng_exp = `Explanation : ${result.eng_exp}`
        document.getElementById("tam_exp").innerHTML = `விளக்கம் : ${tam_exp}`
        document.getElementById("eng_exp").innerHTML = `${eng_exp}`

    } catch (error) {
        console.log(error)
    }
}