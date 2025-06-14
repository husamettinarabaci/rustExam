## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Makro Temelleri  
#### ✅ Cevap 201: Rust'ta basit makro tanımlama

Bu örnek, Rust'ta basit bir makronun nasıl tanımlanıp kullanılacağını gösterir.

```rust
macro_rules! say_hello {
    () => {
        println!("Hello, Rust!");
    };
}

fn main() {
    say_hello!();
}
```
