// import axioss from "axios"
// jest.mock("./axios");

export const fetchUser = async () => {
    try {
        console.log('this is not mock, one more time!')
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        return res.data
    } catch (ex) {
        return ex.message
    }
}