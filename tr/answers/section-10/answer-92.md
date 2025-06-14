## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Varsayılan Metotlar  
#### ✅ Cevap 92: Trait'te varsayılan metotlar

**Açıklama:**
Trait'lerde varsayılan metot gövdesi tanımlanabilir ve istenirse override edilebilir.

```rust
trait Greet {
    fn hello(&self) {
        println!("Merhaba!");
    }
}

struct Person;
impl Greet for Person {
    fn hello(&self) {
        println!("Selam!");
    }
}

struct Robot;
impl Greet for Robot {}

fn main() {
    Person.hello();
    Robot.hello();
}
```
