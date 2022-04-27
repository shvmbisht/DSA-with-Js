### Steps of this algorithm

- Begin with a set of nodes, all of which are unvisited.
- Create a set of the unvisited nodes called the unvisited set consisting of all the nodes.
- Assign every node an initial distance value. This will be set to zero for the starting node, and infinity for all other nodes.
  Set the starting node as the current node.
- For each current node, calculate the tentative distance to each of its unvisited neighbor nodes. Add the distance from the current node to the neighbor node to the distance from the starting node.
- When all unvisited neighbor nodes of the current node have been mapped, mark the current node as visited, removing it from the unvisited set. Visited nodes will not be checked again.
- If the specific destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance from the start node to the nodes in the unvisited set is infinity (meaning there is no connection between the start node and remaining unvisited nodes), then stop. The algorithm has finished.
- Otherwise, select the unvisited node with the smallest tentative distance, set it as the new “current node”, and repeat the the process of calculating the tentative distance to each of its unvisited neighbor nodes.
- If the destination node has the smallest tentative distance among all “unvisited” nodes (and thus could be selected as the next “current”), then the algorithm can stop.
