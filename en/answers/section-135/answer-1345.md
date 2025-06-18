## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Circuit breaker and fallback strategies  
#### ✅ Answer 1345: Circuit breaker and fallback strategies

This solution uses a service and fallback trait, with circuit breaker logic implemented in a struct. If the service fails, the fallback is triggered.

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
