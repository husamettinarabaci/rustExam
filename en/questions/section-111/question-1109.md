## 📘 Section: Channel Patterns and Advanced Messaging  
### 🔹 Category: Using multiple channels in select loops  
#### ❓ Question 1109: Using multiple channels in select loops

Write a Rust program that does the following:

- Create a consumer that can receive messages from two different channels.
- The consumer should process whichever channel delivers a message.
- Exit the loop when all channels are closed.

🔧 **Task:** Use the `select!` macro or a similar pattern to handle receiving from multiple channels.
