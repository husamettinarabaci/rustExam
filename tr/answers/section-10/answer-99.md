## 📚 Bölüm: Trait'ler  
### 🔹 Kategori: Blanket Implementations  
#### ✅ Cevap 99: Blanket implementation kullanmak

**Açıklama:**
Blanket implementation ile bir trait, belirli bir trait'i sağlayan tüm türler için implemente edilebilir.

```rust
trait BenimTrait {
    fn selam(&self);
}

impl<T: ToString> BenimTrait for T {
    fn selam(&self) {
        println!("{}", self.to_string());
    }
}

fn main() {
    42.selam();
    "merhaba".selam();
}
```
