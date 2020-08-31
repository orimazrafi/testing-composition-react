import axios from "axios"

export const fetchAuthor = async () => {
    try {
        console.log("whoudl not get to hereQ")
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        return res.data
    } catch (ex) {
        console.log(ex.message)

    }
}