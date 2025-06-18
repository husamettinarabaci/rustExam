## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Servis sınırları ve sözleşmeleri tasarlama  
#### ✅ Cevap 1341: Servis sınırları ve sözleşmeleri tasarlama

Bu çözümde, her servis için bir trait (arayüz) ve struct tanımlanır. Servisler arası iletişim bir fonksiyon ile simüle edilir. Bu yaklaşım, mikroservislerin bağımsızlığını ve arayüz sözleşmelerini açıkça gösterir.

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
