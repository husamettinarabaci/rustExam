## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Executors and Schedulers  
#### ✅ Answer 1002: Understanding task executors and schedulers

Async task executors (like Tokio's executor) are responsible for running futures produced by async functions. Task schedulers determine when and in what order these futures are polled. The executor polls tasks to make progress, while the scheduler ensures tasks are run fairly and efficiently. The executor is responsible for running tasks; the scheduler is responsible for ordering and distributing them.
