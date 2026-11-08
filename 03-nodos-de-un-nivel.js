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

// Ejercicio 3: mostrar los nodos de un nivel.
// El nivel 1 es la raiz, el nivel 2 son sus hijos, y asi.

function mostrarNivel(nodo, nivel) {
  if (nodo === null) {
    return;
  }

  if (nivel === 1) {
    console.log(nodo.valor);
    return;
  }

  // Bajamos un nivel hacia cada lado
  mostrarNivel(nodo.izquierdo, nivel - 1);
  mostrarNivel(nodo.derecho, nivel - 1);
}

console.log("Nivel 2:");
mostrarNivel(arbol, 2);

console.log("Nivel 3:");
mostrarNivel(arbol, 3); 
