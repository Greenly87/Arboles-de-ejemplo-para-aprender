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

// Ejercicio 10: mostrar todas las ramas del arbol.
// Una rama es el camino desde la raiz hasta una hoja.

function mostrarRamas(nodo, texto) {
  if (nodo === null) {
    return;
  }

  texto = texto + nodo.valor;

  // Si es una hoja, la rama termino y la mostramos
  if (nodo.izquierdo === null && nodo.derecho === null) {
    console.log(texto);
  } else {
    texto = texto + " -> ";
  }

  mostrarRamas(nodo.izquierdo, texto);
  mostrarRamas(nodo.derecho, texto);
}

mostrarRamas(arbol, "");
