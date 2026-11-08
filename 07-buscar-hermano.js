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

// Ejercicio 7: buscar el hermano de un nodo.
// Hermanos son los nodos que tienen el mismo padre.
// Devuelve null si no tiene hermano.

function buscarHermano(nodo, valor) {
  if (nodo === null) {
    return null;
  }

  // Si el valor es el hijo izquierdo, su hermano es el derecho
  if (nodo.izquierdo !== null && nodo.izquierdo.valor === valor) {
    if (nodo.derecho !== null) {
      return nodo.derecho.valor;
    }
    return null;
  }

  // Si el valor es el hijo derecho, su hermano es el izquierdo
  if (nodo.derecho !== null && nodo.derecho.valor === valor) {
    if (nodo.izquierdo !== null) {
      return nodo.izquierdo.valor;
    }
    return null;
  }

  // Si no, seguimos buscando mas abajo
  let resultado = buscarHermano(nodo.izquierdo, valor);
  if (resultado === null) {
    resultado = buscarHermano(nodo.derecho, valor);
  }
  return resultado;
}

console.log("Hermano del 5:", buscarHermano(arbol, 5));   // 15
console.log("Hermano del 3:", buscarHermano(arbol, 3));   // 7
console.log("Hermano del 20:", buscarHermano(arbol, 20)); // null
