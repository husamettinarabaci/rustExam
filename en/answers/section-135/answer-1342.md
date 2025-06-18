## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Event-driven microservice communication  
#### ✅ Answer 1342: Event-driven microservice communication

This solution defines events with an enum and provides event handling logic via a trait. A function simulates the service processing events.

```rust
enum Event {
    UserCreated(u32),
    OrderPlaced(u32, String),
}

trait EventHandler {
    fn handle_event(&self, event: Event);
}

struct NotificationService;

impl EventHandler for NotificationService {
    fn handle_event(&self, event: Event) {
        match event {
            Event::UserCreated(id) => println!("Notify: User {} created", id),
            Event::OrderPlaced(id, item) => println!("Notify: Order for user {}: {}", id, item),
        }
    }
}

fn simulate_event_flow(handler: &impl EventHandler) {
    handler.handle_event(Event::UserCreated(1));
    handler.handle_event(Event::OrderPlaced(1, "Book".to_string()));
}

fn main() {
    let service = NotificationService;
    simulate_event_flow(&service);
}
```
