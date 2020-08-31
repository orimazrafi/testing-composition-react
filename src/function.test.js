jest.mock("./http.js");
jest.mock("./axios.js");
// allow us to use a mock function from the ./__mocks__/ because we don't wwant to test axios we just want 
// to test that our code is working properly.
import { functions } from "./function";
import { fetchUser } from "./http"
import { get } from "./axios"
test("add 2 +2 return 4", () => {
    expect(functions.add(2, 2)).toBe(4)
})
test("2+3 return 5", () => {
    expect(functions.add(2, 3)).not.toBe(null)
})
test("is null return null value ", () => {
    expect(functions.isNull()).toBeNull()
})
test("return whatever value the function gets ", () => {
    expect(functions.checkValue(2)).toBe(2)
    expect(functions.checkValue(null)).toBeFalsy()
})
test("return whatever value the function gets ", () => {
    expect(functions.checkValue(true)).not.toBeFalsy()
})
test("return username ", () => {
    expect(functions.createUser("Ori", "Mazrafi")).toEqual({ firstName: "Ori", lastName: "Mazrafi" })
})
test("under 1600", () => {
    const first = 700
    const second = 800;
    expect(first + second).toBeLessThan(1600)
})
test("under or 1600", () => {
    const first = 800
    const second = 800;
    expect(first + second).toBeLessThanOrEqual(1600)
})
test('There is not I in team', () => {
    expect("team").not.toMatch(/I/)
})
test("Admin should be in usernames", () => {
    expect(["Ori", "Nadav", "Admin"]).toContain("Admin")
})
test("fetches user name async", () => {
    expect.assertions(1);
    return get().then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })
})
test("fetches user name async with async and await", async () => {
    expect.assertions(1);
    const data = await fetchUser();
    expect(data.name).toEqual("Leanne Graham")
})
test("you get a reverse string ", () => {
    expect(functions.reverseString("abc")).toEqual("cba")
    expect(functions.reverseString("abC")).toEqual("cba")
})
test("reverse string to be defined ", () => {
    expect(functions.reverseString).toBeDefined()
})
test("return array of chunk", () => {
    expect(functions.chunkArray([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]])
    expect(functions.chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]])
})
test("test if it is a function", () => {
    expect(typeof functions.chunkArray).toEqual("function")
})

