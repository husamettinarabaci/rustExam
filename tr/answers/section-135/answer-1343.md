## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: API gateway implementasyonu  
#### ✅ Cevap 1343: API gateway implementasyonu

Bu çözümde, iki farklı servis trait'i ve bir API gateway struct'ı tanımlanır. Gateway, gelen istekleri ilgili servislere yönlendirir.

```rust
trait UserService {
    fn get_user(&self, id: u32) -> String;
}

trait OrderService {
    fn get_order(&self, id: u32) -> String;
}

struct MyUserService;
struct MyOrderService;

impl UserService for MyUserService {
    fn get_user(&self, id: u32) -> String {
        format!("User{{id: {}}}", id)
    }
}

impl OrderService for MyOrderService {
    fn get_order(&self, id: u32) -> String {
        format!("Order{{id: {}}}", id)
    }
}

struct ApiGateway<'a> {
    user_service: &'a dyn UserService,
    order_service: &'a dyn OrderService,
}

impl<'a> ApiGateway<'a> {
    fn route(&self, path: &str, id: u32) -> String {
        match path {
            "/user" => self.user_service.get_user(id),
            "/order" => self.order_service.get_order(id),
            _ => "404 Not Found".to_string(),
        }
    }
}

fn main() {
    let user_service = MyUserService;
    let order_service = MyOrderService;
    let gateway = ApiGateway { user_service: &user_service, order_service: &order_service };
    println!("{}", gateway.route("/user", 1));
    println!("{}", gateway.route("/order", 42));
}
```
