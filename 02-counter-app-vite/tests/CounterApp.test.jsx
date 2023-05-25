import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en el <CounterApp/>', () => {

    const initialValue = 10

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp value={initialValue} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrarse el valor inicial de 10 <Counter value={10}/>', () => {

        render(<CounterApp value={10} />)
        expect(screen.getByText(10)).toBeTruthy()
    })

    test('Debe de incrementar con el botón +1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })

    test('Debe de incrementar con el botón -1', () => {

        render(<CounterApp value={initialValue} />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })

    test('Debe de funcionar el botón reset', () => {
      
        render(<CounterApp value={initialValue}/>)
        fireEvent.click( screen.getByText('+1'))
        fireEvent.click( screen.getByText('reset'))

        expect(screen.getByText(10)).toBeTruthy()
    })
    

})
