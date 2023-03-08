import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08-imp-exp',()=>{
    test('getHeroeById debe retornar un heroe por id',()=>{
        // const owner = 'DC'
        // const hero = getHeroesByOwner(owner);
        
        // expect(hero.length).toEqual(3);

        const id = 1;
        const hero = getHeroeById(  id  );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
    })

    test('getHeroeById debe retornar undefine si no existe el id',()=>{

        const id = 100;
        const hero = getHeroeById(  id  );
        
        expect( hero ).toBeFalsy();
        
    })

    // Tarea 
    // getHeroesByOwner

    test('getHeroeByOwner debe de retornar un arreglo con lo heroes de DC de 3',()=>{
        const owner = 'DC'
        const hero = getHeroesByOwner(owner);
        
        //expect(hero.length).toEqual(3);

        expect(hero).toEqual(heroes.filter((heroe)=>heroe.owner===owner))
    })

    test('getHeroeByOwner debe de retornar un arreglo con lo heroes de Marvel de 2',()=>{
        const owner = 'Marvel'
        const hero = getHeroesByOwner(owner);
        
        expect(hero.length).toEqual(2);
    })
})