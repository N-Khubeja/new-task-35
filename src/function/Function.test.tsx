import { render, screen } from "@testing-library/react"
import Function from "./Function"
import user from "@testing-library/user-event"

describe('function',() => {
    it('renders correctly',() => {
        render(<Function count={0}/>)
        const element = screen.getByText(/CountFunc/i)
        expect(element).toBeInTheDocument()
    })

    it('handles actiion',() => {
        const incHND = jest.fn()
        const decHND = jest.fn()

        render((<Function count={0} decrement={decHND} increment={incHND}/>))
        const incBTN = screen.getByRole('button',{name:'increment'})
        const decBTN = screen.getByRole('button',{name:'decrement'})
        expect(incBTN).toBeInTheDocument()
        expect(decBTN).toBeInTheDocument()

        user.click(incHND)
        user.click(decHND)

        expect(incHND).toHaveBeenCalledTimes(1)
        expect(decHND).toHaveBeenCalledTimes(1)

    })
})