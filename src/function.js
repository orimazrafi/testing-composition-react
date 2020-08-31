import axios from "axios"
const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: (firstName, lastName) => ({ firstName, lastName }),
    fetchUser: async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
            return res.data
        } catch (ex) {
            return ex.message
        }
    },
    reverseString: (str) => str.toLowerCase().split("").reverse().join(""),
    chunkArray: (array, number) => {
        const chunkArray = [];
        let i = 0;
        while (i < array.length) {
            chunkArray.push(array.slice(i, i + number));
            i += number
        }
        return chunkArray
    },


}
export { functions }