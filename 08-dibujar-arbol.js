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

// Ejercicio 8: dibujar el arbol "acostado" en la consola.
// Gira la cabeza a la izquierda para verlo normal.

function dibujar(nodo, nivel) {
  if (nodo === null) {
    return;
  }

  dibujar(nodo.derecho, nivel + 1);

  // Cada nivel se mueve 4 espacios a la derecha
  let espacios = "";
  for (let i = 0; i < nivel; i++) {
    espacios = espacios + "    ";
  }
  console.log(espacios + nodo.valor);

  dibujar(nodo.izquierdo, nivel + 1);
}

dibujar(arbol, 0);
