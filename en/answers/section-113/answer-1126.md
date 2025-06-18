## 📘 Section: Actor Frameworks in Rust
### 🔹 Category: Designing actor communication protocols
#### ✅ Answer 1126: Designing actor communication protocols

Enum-based protocols are used for inter-actor communication. This clearly defines message types and contents.

```rust
enum ActorMessage {
    Ping,
    Echo(String),
    Shutdown,
}

// An actor can match on this enum:
fn handle_message(msg: ActorMessage) {
    match msg {
        ActorMessage::Ping => println!("Pong!"),
        ActorMessage::Echo(text) => println!("Echo: {}", text),
        ActorMessage::Shutdown => println!("Shutting down..."),
    }
}
```
This structure makes inter-actor communication safe and extensible.
