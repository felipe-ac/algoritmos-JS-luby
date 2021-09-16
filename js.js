class Algorithms {
    
    constructor() {
    }

    One(quantity, character) {
        /*  1) Implemente um método que crie um novo array baseado nos valores passados.
            Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']  */
        let result = []
        for (let i = 0; i < quantity; i++) {
            result.push(character)
        }      
        return result
    }

    Two(list) {
        /*  2) Implemente um método que inverta um array, não utilize métodos nativos do array.
            Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]   */
        let result = []
        for (let i = list.length - 1; i >= 0; i--) {
            result.push(list[i])
        }      
        return result
    }

    Three(list) {
        /*  3) Implemente um método que limpe os itens desnecessários de um array 
            (false, undefined, strings vazias, zero, null).
            Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2] */

        let result = list.filter(Boolean)
        return result
    }

    Four(list) {
        /*  4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
        Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4} */
        let result = list.map((
            [element, index]
        ) => (
            {[element]: index}   
        ))
        return result
    }

    Five(list, ...filters) {
        /*  Implemente um método que retorne um array, sem os itens passados por parâmetro depois do 
            array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2] */
        let result = list.filter(function(element) {
            if (filters.indexOf(element) == -1)
                return true
            else
                return false
        })
        return result
    }

    Six(list) {
        /*  6) Implemente um método que retorne um array, sem valores duplicados.
            Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]   */
        let set = new Set(list)
        let result = [...set]
        return result
    }

    Seven(listA, listB) {
        /*  7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
            Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true  */
        let result =    Array.isArray(listA) &&
                        Array.isArray(listB) &&
                        listA.length === listB.length &&
                        listA.every((element, index) => element === listB[index])
        return result
    }
    
    Eight(list) {
        /*  8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
            Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]   */
        let result = list.flat()
        return result
    }

    Nine(list, divider) {
        /*  9) Implemente um método divida um array por uma quantidade passada por parâmetro.
            Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]  */
        let result = Array.from(
            { length: Math.ceil(list.length / divider) }, (element, index) =>
            list.slice(index * divider, index * divider + divider)          
        )
        return result
    }

    Ten(listA, listB) {
        /*  10) Implemente um método que encontre os valores comuns entre dois arrays.
            Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]    */
        let result = listA.filter(element => {
            if(listB.indexOf(element) != -1)
                return true
            else
                return false
            })
        return result
    }

}

let algorithms = new Algorithms()
console.log(
// algorithms.One(3, 'a')
// algorithms.Two([1, 2, 3, 4])
// algorithms.Three([1, 2, '', undefined])
// algorithms.Four([["c",2],["d",4]])
// algorithms.Five([5,4,3,2,5], 5,3)
// algorithms.Six([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])
// algorithms.Seven([1, 2, 3, 4], [1, 2, 3, 4])
// algorithms.Eight([1, 2, [3], [4, 5]])
// algorithms.Nine([1, 2, 3, 4, 5], 2)
// algorithms.Ten([6, 8], [8, 9])
)