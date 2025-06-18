## 📘 Section: Channels and Message Passing
### 🔹 Category: Synchronous vs Asynchronous Channels
#### ✅ Answer 1013: Synchronous vs asynchronous channels

Synchronous channels require the sender and receiver to synchronize directly; the sender waits until the receiver receives the message. Asynchronous channels buffer messages, allowing the sender to continue immediately.

Synchronous channels are best for short-lived, tightly-coupled communication; asynchronous channels are preferred when buffering between tasks is needed.

Examples:
- `std::sync::mpsc::sync_channel` (synchronous)
- `tokio::sync::mpsc::channel` (asynchronous)
