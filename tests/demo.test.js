test('esta prueba no debe de fallar', () => { 
    
    // 1. inicializacion
    const message1 = 'Hola mundo';

    // 2. estimulo
    const message2 = message1.trim();

    // 3. observar el compostamient esperado
    expect(message1).toBe(message1);
 })