## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Olay odaklı mikroservis iletişimi  
#### ✅ Cevap 1342: Olay odaklı mikroservis iletişimi

Bu çözümde, Event enum'u ile olaylar tanımlanır ve bir servis trait'i ile olay işleme mantığı sağlanır. Bir fonksiyon, servisin olayı işlemesini simüle eder.

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
