const idsGenerados = new Set(); // Almacena los IDs generados
const datenow = () => {
    let id;
    do {
        const date = Date.now().toString(36);
        const random = Math.random().toString(36).slice(2, 10);
        id = date + random;
    } while (idsGenerados.has(id)); // Verifica si el ID ya fue generado

    idsGenerados.add(id); // Agrega el nuevo ID al conjunto
    return id;
};

module.exports = datenow;

/*Los valores devueltos por Date.now() son únicos solo en el contexto de, un único proceso.
    si ubiesen dos procesos asincronicos ejecutandose al mismo tiempo, 
    podrian generar el mismo valor, pero agregando Math.random a date.now,
    es muy extraño que genere el mismo id
    UUID garantiza la unicidad absoluta*/
