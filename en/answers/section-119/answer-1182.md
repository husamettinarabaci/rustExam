## 📘 Section: Actor Model Advanced Topics
### 🔹 Category: Fault tolerance and error propagation in actors
#### ✅ Answer 1182: Fault tolerance and error propagation in actors

In the actor model, when an actor fails, the parent actor catches the error and applies a strategy: restart, escalate, or ignore. This increases system reliability.

```rust
// Actor error handling diagram:
//
// Parent Actor
// └── Child Actor (fails)
//
// Parent Actor: [Restart] [Escalate] [Ignore]
//
// Error propagation and tolerance depend on the chosen strategy.
```
