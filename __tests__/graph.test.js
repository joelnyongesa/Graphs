import Graph from "../src/graph";

describe('Graph', ()=>{
    let graph = new Graph();

    afterEach(()=>{
        graph = new Graph();
    });

    test('should correctly instatiate a graph', () => { 
        expect(graph.adjacencyList.size).toEqual(0);
     });
    
    test('should add a new node', () => { 
        graph.addNode("Jasmine");
        expect(graph.adjacencyList.get("Jasmine").size).toEqual(0);
     });
     test('should return false if the node does not exist in the adjacency list', () => { 
        expect(graph.hasNode("Ada")).toEqual(false)
      });
    
    test('should check to see if node exists in graph', () => { 
        graph.addNode("Jasmine");
        expect(graph.hasNode("Jasmin")).toEqual(true)
     });

    test("add an edge between two nodes", ()=>{
        graph.addNode("Jasmine");
        graph.addNode("Ada");
        graph.createEdge("Jasmine", "Ada");
        expect (graph.adjacencyList.get("Jasmine").has("Ada")).toEqual(true)
        expect (graph.adjacencyList.get("Ada").has("Jasmine")).toEqual(true)
    });

    test('check to see if edge exists in graph', ()=>{
        graph.addNode("Jasmine");
        graph.addNode("Ada");
        graph.createEdge("Jasmine", "Ada");
        expect(graph.hasEdge("Jasmine", "Ada")).toEqual(true)
    });

    test('remove an edge between two nodes', ()=>{
        graph.addNode("Jasmine");
        graph.addNode("Ada");
        graph.createEdge("Jasmine", "Ada");
        graph.removeEdge("Jasmine", "Ada");
        expect(graph.hasEdge("Ada", "Jasmine")).toEqual(false)
    })

    test('should delete a node and all of its adjacent nodes', () => { 
        graph.addNode("Ada");
        graph.addNode("Jasmine");
        graph.addNode("Lydia");
        graph.createEdge("Ada", "Jasmine");
        graph.createEdge("Ada", "Lydia");
        graph.removeNode("Ada");
        expect(graph.hasNode("Ada")).toEqual(false);
        expect(graph.hasEdge("Jasmine", "Ada")).toEqual(false);
        expect(graph.hasEdge("Lydia", "Ada")).toEqual(false);
     })

});