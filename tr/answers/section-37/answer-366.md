## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Modülleri farklı dosyalara ayırma  
#### ✅ Cevap 366: Modülleri farklı dosyalara ayırma

Bu örnekte, bir modül ayrı bir dosyada tanımlanır ve ana dosyada bu modül kullanılır. Böylece modüldeki fonksiyonu ana fonksiyonda çağırabiliriz.

`src/main.rs`:
```rust
mod greetings;

fn main() {
    greetings::say_hello();
}
```

`src/greetings.rs`:
```rust
pub fn say_hello() {
    println!("Hello from greetings module!");
}
```
