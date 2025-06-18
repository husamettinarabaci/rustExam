## 📘 Section: Concurrency Design Patterns  
### 🔹 Category: Circuit breaker and bulkhead patterns  
#### ✅ Answer 1196: Circuit breaker and bulkhead patterns

The circuit breaker pattern temporarily blocks requests after repeated failures to protect the system. The bulkhead pattern isolates resources into separate pools so that a failure in one does not affect others.

**Circuit breaker logic (summary):**
- After a certain number of failures, the circuit "opens" and new requests are blocked.
- After a timeout, requests are retried.

**Bulkhead logic (summary):**
- Each workload uses a separate resource pool (e.g., thread pool).
- If one pool is full, others are unaffected.

**Simple example (logic):**
```rust
// Circuit breaker: use a counter and timer to control access.
// Bulkhead: use separate thread pools or channel limits for isolation.
```

These patterns are used in microservices, network applications, and systems requiring high availability.
