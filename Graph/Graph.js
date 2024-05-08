// Graphs are data structure with nodes and connection between them
// vertex: node
// edge: conection between node

class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}
	addEdge(vertex1, vertex2) {
		if (
			!this.adjacencyList.hasOwnProperty(vertex1) ||
			!this.adjacencyList.hasOwnProperty(vertex2)
		) {
			console.log('VERTEX dont exist');
		}
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1, vertex2) {
		if (
			!this.adjacencyList.hasOwnProperty(vertex1) ||
			!this.adjacencyList.hasOwnProperty(vertex2)
		) {
			console.log('VERTEX dont exist');
		}
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(vertex) => vertex != vertex2,
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(vertex) => vertex != vertex1,
		);
	}
	removeVertex(vertex) {
		if (!this.adjacencyList.hasOwnProperty(vertex)) {
			console.log('VERTEX dont exist');
		}
		while (this.adjacencyList[vertex]?.length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
}

let g = new Graph();
g.addVertex('vertex 1');
g.addVertex('vertex 2');
g.addVertex('vertex 3');
g.addEdge('vertex 2', 'vertex 1');
g.addEdge('vertex 1', 'vertex 3');
g.addEdge('vertex 3', 'vertex 2');
console.log('GRAPH', g);

g.removeVertex('vertex 1');
console.log('GRAPH', g);
