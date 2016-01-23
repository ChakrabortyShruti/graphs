var graphs = {};
graphs.UndirectedGraph = function(){
	this.graph = {};
};

graphs.UndirectedGraph.prototype = {
	addVertex : function(vertex){
			this.graph[vertex] = [];
	},
	addEdge : function(from, to){
		this.graph[from].push(to);
		this.graph[to].push(from);
	},
	hasEdgeBetween : function(from, to){
		return this.graph[from].indexOf(to)>-1 && this.graph[to].indexOf(from)>-1;
	},
	order : function(){
		return Object.keys(this.graph).length;
	},
	size : function(){
		var keys = Object.keys(this.graph);
		var self = this.graph;
		return keys.reduce(function(size,vertex){
			return size+self[vertex].length;
		},0)/2;
	},
};

graphs.DirectedGraph = function(){
	this.graph = {};
};

graphs.DirectedGraph.prototype = {
	addVertex : function(vertex){
			this.graph[vertex] = [];
	},
	addEdge : function(from, to){
		this.graph[from].push(to);
	},
	hasEdgeBetween : function(from, to){
		return this.graph[from].indexOf(to)>-1;
	},
	order : function(){
		return Object.keys(this.graph).length;
	},
	size : function(){
		var keys = Object.keys(this.graph);
		var self = this.graph;
		return keys.reduce(function(size,vertex){
			return size+self[vertex].length;
		},0);
	},
};
module.exports = graphs;