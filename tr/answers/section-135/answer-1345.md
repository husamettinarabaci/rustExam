## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Circuit breaker ve geri dönüş stratejileri  
#### ✅ Cevap 1345: Circuit breaker ve geri dönüş stratejileri

Bu çözümde, bir servis ve bir fallback trait'i ile circuit breaker mantığı struct içinde uygulanır. Servis başarısız olursa fallback devreye girer.

```rust
trait Service {
    fn call(&self) -> Result<String, &'static str>;
}

trait Fallback {
    fn fallback(&self) -> String;
}

struct CircuitBreaker<'a> {
    service: &'a dyn Service,
    fallback: &'a dyn Fallback,
}

impl<'a> CircuitBreaker<'a> {
    fn execute(&self) -> String {
        match self.service.call() {
            Ok(val) => val,
            Err(_) => self.fallback.fallback(),
        }
    }
}

struct UnstableService;
struct DefaultFallback;

impl Service for UnstableService {
    fn call(&self) -> Result<String, &'static str> {
        Err("Service unavailable")
    }
}

impl Fallback for DefaultFallback {
    fn fallback(&self) -> String {
        "Default response".to_string()
    }
}

fn main() {
    let service = UnstableService;
    let fallback = DefaultFallback;
    let breaker = CircuitBreaker { service: &service, fallback: &fallback };
    println!("{}", breaker.execute());
}
```
