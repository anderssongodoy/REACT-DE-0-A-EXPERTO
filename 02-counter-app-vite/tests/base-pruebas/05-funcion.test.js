import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funcion"

describe('Pruebas en 05-funcion', () => {
    test('getUser debe retornar un objeto', () => {
        const textUser = {
            uid: 'ABC123',
            username: 'El_papi1502'
        }

        const user = getUser()

        // PARA OBEJTOS ES toEqual
        expect(textUser).toEqual(user)

    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Fernando'

        const user = getUsuarioActivo(name)

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})