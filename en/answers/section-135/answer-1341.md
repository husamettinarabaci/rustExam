## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Designing service boundaries and contracts  
#### ✅ Answer 1341: Designing service boundaries and contracts

This solution defines a trait (interface) and struct for each service. Inter-service communication is simulated with a function. This approach clearly demonstrates microservice independence and interface contracts.

```rust
trait UserService {
    fn get_user(&self, id: u32) -> String;
}

trait OrderService {
    fn create_order(&self, user_id: u32, item: &str) -> bool;
}

struct MyUserService;
struct MyOrderService;

impl UserService for MyUserService {
    fn get_user(&self, id: u32) -> String {
        format!("User{{id: {}}}", id)
    }
}

impl OrderService for MyOrderService {
    fn create_order(&self, user_id: u32, item: &str) -> bool {
        println!("Order created for user {}: {}", user_id, item);
        true
    }
}

fn simulate_communication(user_service: &impl UserService, order_service: &impl OrderService) {
    let user = user_service.get_user(1);
    println!("Fetched: {}", user);
    order_service.create_order(1, "Book");
}

fn main() {
    let user_service = MyUserService;
    let order_service = MyOrderService;
    simulate_communication(&user_service, &order_service);
}
```
