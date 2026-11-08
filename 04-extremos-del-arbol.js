class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierdo = null;
    this.derecho = null;
  }
}

// Árbol de ejemplo:
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

// Ejercicio 4: encontrar el valor que queda mas a la izquierda
// y el que queda mas a la derecha.

function masALaIzquierda(nodo) {
  while (nodo.izquierdo !== null) {
    nodo = nodo.izquierdo;
  }
  return nodo.valor;
}

function masALaDerecha(nodo) {
  while (nodo.derecho !== null) {
    nodo = nodo.derecho;
  }
  return nodo.valor;
}

console.log("Más a la izquierda:", masALaIzquierda(arbol));
console.log("Más a la derecha:", masALaDerecha(arbol));
