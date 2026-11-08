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

// Ejercicio 2: mostrar los nodos que tienen un solo hijo.

function unSoloHijo(nodo) {
  if (nodo === null) {
    return;
  }

  // Solo tiene hijo izquierdo
  if (nodo.izquierdo !== null && nodo.derecho === null) {
    console.log(nodo.valor);
  }

  // Solo tiene hijo derecho
  if (nodo.izquierdo === null && nodo.derecho !== null) {
    console.log(nodo.valor);
  }

  unSoloHijo(nodo.izquierdo);
  unSoloHijo(nodo.derecho);
}

console.log("Nodos con un solo hijo:");
unSoloHijo(arbol); // 15
