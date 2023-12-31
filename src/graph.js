export default class Graph {
    constructor(){
        this.adjacencyList = new Map()
    }

    addNode(name){
        this.adjacencyList.set(name, new Set());
    }

    hasNode(name){
        if (this.adjacencyList.get(name)){
            return true
        }
        return false
    }

    createNode(node1, node2){
        let set1 = this.adjacencyList.get(node1);
        let set2 = this.adjacencyList.get(node2);
        set1.add(node2)
        set2.add(node1)
    }

    hasEdge(node1, node2){
        if(this.adjacencyList.get(node1).has(node2)){
            return true
        }
        return false;
    }

    removeEdge(node1, node2){
        this.adjacencyList.get(node1).delete(node2);
        this.adjacencyList.get(node2).delete(node1)
    }

    removeNode(name){
        if(this.adjacencyList.has(name)){
            this.adjacencyList.get(name).forEach((edge)=>{
                this.adjacencyList.get(edge).delete(name);
            });
            this.adjacencyList.delete(name);
        }
    }
}