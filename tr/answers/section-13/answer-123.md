## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Kodu Birden Fazla Dosyaya Bölme  
#### ✅ Cevap 123: Kodu birden fazla dosyaya bölme

Rust'ta kodu birden fazla dosyaya bölmek için ana dosyada modülü tanımlar ve uygulamasını ayrı bir dosyaya yerleştirirsiniz. Burada, `utils` modülü `utils.rs` dosyasında tanımlanmış ve `main.rs` dosyasında `mod utils;` ile dahil edilmiştir.

**main.rs:**
```rust
mod utils;

fn main() {
    utils::greet();
}
```

**utils.rs:**
```rust
pub fn greet() {
    println!("Hello from utils!");
}
```
