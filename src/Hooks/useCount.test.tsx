import { renderHook } from "@testing-library/react"
import useCount from "./useCount"

describe('hooks',() => {
    it('renders correctly',() => {
        const {result} = renderHook(useCount)
        expect(result.current.count).toBe(0)
    })

    it('accept props correctly',() => {
        const {result} = renderHook(useCount,{initialProps:{init : 5}})
        expect(result.current.count).toBe(5)
    })
})