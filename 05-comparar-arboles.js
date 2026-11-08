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

// Ejercicio 5: comparar dos arboles.
// Son iguales si tienen la misma forma y los mismos valores.

function sonIguales(a, b) {
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.valor !== b.valor) {
    return false;
  }
  if (sonIguales(a.izquierdo, b.izquierdo) === false) {
    return false;
  }
  return sonIguales(a.derecho, b.derecho);
}

// Creamos un segundo arbol igual al primero
const otro = new Nodo(10);
otro.izquierdo = new Nodo(5);
otro.derecho = new Nodo(15);
otro.izquierdo.izquierdo = new Nodo(3);
otro.izquierdo.derecho = new Nodo(7);
otro.derecho.derecho = new Nodo(20);

console.log("¿Son iguales?", sonIguales(arbol, otro)); // true

// Cambiamos un valor y volvemos a comparar
otro.derecho.derecho.valor = 99;
console.log("¿Son iguales ahora?", sonIguales(arbol, otro)); // false
