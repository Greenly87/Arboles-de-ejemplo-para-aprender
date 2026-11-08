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

// Ejercicio 6: decir cuantos hijos tiene cada nodo.

function contarHijos(nodo) {
  if (nodo === null) {
    return;
  }

  let hijos = 0;
  if (nodo.izquierdo !== null) {
    hijos = hijos + 1;
  }
  if (nodo.derecho !== null) {
    hijos = hijos + 1;
  }

  console.log("El nodo", nodo.valor, "tiene", hijos, "hijos");

  contarHijos(nodo.izquierdo);
  contarHijos(nodo.derecho);
}

contarHijos(arbol);
