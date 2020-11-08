import Category from "@/api/domain/Category"

describe("Category", () => {

    it("new", () => {
        const result = new Category({})

        expect(result).toEqual({code: '', name: ''})
    })

    it("to json", () => {
        const expected = {code: 'code', name: 'name'}

        const category = new Category(expected)
        const result = category.toJSON()

        expect(result).toEqual(expected)
    })
})