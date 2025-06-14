## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Jenerik Metotlar  
#### ✅ Cevap 76: Jenerik metot uygulamak

**Açıklama:**
Jenerik yapılarda metotlar da jenerik olabilir.

```rust
struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    fn get_value(&self) -> &T {
        &self.value
    }
}

fn main() {
    let w = Wrapper { value: 42 };
    println!("{}", w.get_value());
}
```
