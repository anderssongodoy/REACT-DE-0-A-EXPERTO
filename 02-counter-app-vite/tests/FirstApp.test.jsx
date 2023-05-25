import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {

    test('debe hacer match con el snapshot', () => {

        const title = 'Hola, Soy Goku'
        const subTitle = 123
        const { container } = render(<FirstApp title={title} subTitle={subTitle} />)

        // expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el titulo en un h1', () => {

        const title = 'Hola, Soy Goku'
        const subTitle = 123
        const { container, getByText, getByTestId } = render(<FirstApp title={title} subTitle={subTitle} />)

        expect( getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain( title )

        expect( getByTestId('test-title').innerHTML).toContain(title)
    })

    test('Debe mostrar el subtitutlo enviado por props', () => {
      
        const title = 'Hola, Soy Goku'
        const subTitle = 'Soy un subtitutlo'
        const { getByText } = render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        )

        expect( getByText(subTitle)).toBeTruthy()
    })
    


})
