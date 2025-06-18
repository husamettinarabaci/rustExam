## 📘 Section: Channels and Message Passing
### 🔹 Category: Backpressure and Capacity Limits
#### ✅ Answer 1014: Handling backpressure and capacity limits

Backpressure is a flow control mechanism that slows down the sender when the receiver is slow. In Tokio mpsc channels, the capacity limit is set when creating the channel; if the queue is full, the sender waits. This prevents system overload.

Example: If a task sends messages faster than the receiver can process, the channel fills up and `send().await` will wait, applying backpressure.
