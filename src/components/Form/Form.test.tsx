import { render, screen } from "@testing-library/react"
import Form from "./Form"

describe('form',() => {
    it('renders correctly',() => {
        render(<Form/>)
        const text = screen.getByText(/form component/i)
        expect(text).toBeInTheDocument()
    })

    it('text input exists',() => {
        render(<Form/>)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })

    it('button exicts',() => {
        render(<Form/>)
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })
})


