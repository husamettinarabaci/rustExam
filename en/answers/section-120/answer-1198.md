## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Actor-based vs thread-based concurrency  
#### ✅ Answer 1198: Actor-based vs thread-based concurrency

In the actor-based model, each actor manages its own state and communicates via messages. In the thread-based model, tasks are executed directly on threads, requiring synchronization for shared data.

**Actor-based logic:**
- Each actor has a message queue.
- Messages are processed asynchronously.

**Thread-based logic:**
- Each task runs on a thread; synchronization is needed for shared data.

**Example (logic):**
```rust
// Actor: Use libraries like actix for message-based models.
// Thread: Use std::thread to spawn threads directly.
```

Actor model is preferred for complex communication and isolation; thread-based model is used for simple parallel tasks.
