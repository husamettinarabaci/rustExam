## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Task Lifetimes and Cancellation  
#### ✅ Answer 1003: Managing task lifetimes and cancellation

Async task lifetimes are tied to the code that spawns them and the `JoinHandle` returned. Tasks can be cancelled by dropping the `JoinHandle` or sending a cancellation signal. When cancelled, tasks stop executing and resources are released. Managing task lifetimes and cancellation is important for resource management and application reliability.
