## 📘 Section: Distributed Systems Fundamentals  
### 🔹 Category: Leader Election and Coordination  
#### ✅ Answer 1212: Implementing leader election algorithms

Leader election is the process of designating a single node as the coordinator in a distributed system. For example, in the Bully algorithm, the node with the highest ID becomes the leader. The process starts when a node detects the leader is down, sends messages to higher-ID nodes, and if no response is received, declares itself the leader. This ensures only one leader exists at a time.
