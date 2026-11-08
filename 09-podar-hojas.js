class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierdo = null;
    this.derecho = null;
  }
}

// arbol de ejemplo:
//
//        10
//       /  \
//      5    15
//     / \     \
//    3   7     20

const arbol = new Nodo(10);
arbol.izquierdo = new Nodo(5);
arbol.derecho = new Nodo(15);
arbol.izquierdo.izquierdo = new Nodo(3);
arbol.izquierdo.derecho = new Nodo(7);
arbol.derecho.derecho = new Nodo(20);

// Ejercicio 9: quitar todas las hojas del arbol.
// Una hoja es un nodo que no tiene hijos.

function podar(nodo) {
  if (nodo === null) {
    return null;
  }

  // Si es una hoja, la quitamos
  if (nodo.izquierdo === null && nodo.derecho === null) {
    return null;
  }

  nodo.izquierdo = podar(nodo.izquierdo);
  nodo.derecho = podar(nodo.derecho);
  return nodo;
}

// Guarda los valores en una lista, de izquierda a derecha
function inorden(nodo, lista) {
  if (nodo === null) {
    return;
  }
  inorden(nodo.izquierdo, lista);
  lista.push(nodo.valor);
  inorden(nodo.derecho, lista);
}

const antes = [];
inorden(arbol, antes);
console.log("Antes:", antes); 

podar(arbol);

const despues = [];
inorden(arbol, despues);
console.log("Después:", despues); 
