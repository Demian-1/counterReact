describe('pruebas en Demo Component', () => { 
    test('esta prueba no debe de fallar', () => {

        // 1. inicializacion                        arrange 
        const message1 = 'Hola mundo';
    
        // 2. estimulo                              act
        const message2 = message1.trim();
    
        // 3. observar el compostamient esperado    assert
        expect(message1).toBe(message2);
    })
 })

