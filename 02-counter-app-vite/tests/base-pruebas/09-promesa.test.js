import { getHeroesIdAysc } from "../../src/base-pruebas/09-promesa"


describe('Pruebas en 09-promesa', () => {

    test('getHeroeByIdAsync debe retornar un heroe', (done) => {

        const id = 1
        getHeroesIdAysc( id )
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name:'Batman',
                    owner:'DC'
                })
                done()
            })
    })

    test('getHeroeByIdAsync debe de obtener un error si heroe es nulo', (done) => {

        const id = 1000
        getHeroesIdAysc( id )
            .then( hero => {
                expect( hero ).toBeFalsy()
                done()
            })
            .catch( error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            })
    })
})
