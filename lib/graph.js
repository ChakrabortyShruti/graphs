var graphs = {};
graphs.UndirectedGraph = function(){
	this.graph = {};
};

graphs.UndirectedGraph.prototype = {
	addVertex : function(vertex){
			this.graph[vertex] = [];
	},
	addEdge : function(from, to){
		if(!this.graph[from]) this.addVertex(from);
		if(!this.graph[to]) this.addVertex(to);

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
	pathBetween : function(from, to, visited){
		var visited = visited || [from];
		if(visited.indexOf(to) != -1) return visited;
		for(var index in this.graph[from]){
			var vertex = this.graph[from][index];
			if(visited.indexOf(vertex) == -1)
				var path = this.pathBetween(vertex,to,visited.concat(vertex));
			if(path && path.indexOf(to) != -1)
				return path;
		}
		return [];
	},
	farthestVertex : function(from, visited){
		var visited = visited || [from];
		for(index in this.graph[from]){
			var vertex = this.graph[from][index];
			if(visited.indexOf(vertex)==-1){
				return this.farthestVertex(vertex,visited.concat(vertex));
			}
		}
		return from;
	},
	allPaths : function(from, to, visited, allRoutes){
		var visited = visited || [from];
		var allRoutes = allRoutes || [];
		if(visited.indexOf(to) != -1){
			return visited;
		}
		for(var index in this.graph[from]){
			var vertex = this.graph[from][index];
			if(visited.indexOf(vertex) <0){
				var path = this.allPaths(vertex,to,visited.concat(vertex),allRoutes);
				if(path[path.length-1]==to){
					allRoutes.push(path);
				}
			}
		}
		return allRoutes;
	}
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
	pathBetween : function(from, to, visited){
		var visited = visited || [from];
		if(visited.indexOf(to) != -1) return visited;
		for(var index in this.graph[from]){
			var vertex = this.graph[from][index];
			if(visited.indexOf(vertex) == -1)
				var path = this.pathBetween(vertex,to,visited.concat(vertex));
			if(path && path.indexOf(to) != -1)
				return path;
		}
		return [];
	},
	farthestVertex : function(from, visited){
		var visited = visited || [from];
		for(index in this.graph[from]){
			var vertex = this.graph[from][index];
			if(visited.indexOf(vertex)==-1){
				return this.farthestVertex(vertex,visited.concat(vertex));
			}
		}
		return from;
	},
	allPaths : function(from, to, visited, allRoutes){
		var visited = visited || [from];
		var allRoutes = allRoutes || [];
		if(visited.indexOf(to) != -1){
			return visited;
		}
		for(var index in this.graph[from]){
			var vertex = this.graph[from][index];
			if(visited.indexOf(vertex) <0){
				var path = this.allPaths(vertex,to,visited.concat(vertex),allRoutes);
				if(path[path.length-1]==to){
					allRoutes.push(path);
				}
			}
		}
		return allRoutes;
	}
};
module.exports = graphs;