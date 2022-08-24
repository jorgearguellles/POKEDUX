// Middleware que haremos: cada vez que se dispare una accion, poder obtener la info de esa action y hacer un console.log 

/*
Estructura del middleware:
- Es una función que recibe el store como parametro
- Retorna otra funcion, que asu vez recive un parametro NEXT 
- Retorna otra funcion que recibe el ACTION que se va a disparar como parametro

- Store de la app
- Next es una funcion que llamaremos cuando el middleware haya terminado su trabajo y esta funcion manda el action al reducer
*/ 

export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'Eddie'}, ...actionInfo.action.payload];
    const updateActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    };
    next(updateActionInfo);
};