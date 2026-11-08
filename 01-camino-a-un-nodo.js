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

// Ejercicio 1: camino desde la raiz hasta un valor.
// Si el valor no esta en el arbol, devuelve null.

function buscarCamino(nodo, valor) {
  if (nodo === null) {
    return null;
  }
  if (nodo.valor === valor) {
    return [nodo.valor];
  }

  // Buscamos primero por la izquierda y si no esta, por la derecha
  let camino = buscarCamino(nodo.izquierdo, valor);
  if (camino === null) {
    camino = buscarCamino(nodo.derecho, valor);
  }

  if (camino === null) {
    return null;
  }

  // Agregamos el nodo actual al inicio del camino
  camino.unshift(nodo.valor);
  return camino;
}

console.log("Camino al 7:", buscarCamino(arbol, 7));
console.log("Camino al 20:", buscarCamino(arbol, 20));
console.log("Camino al 99:", buscarCamino(arbol, 99));
