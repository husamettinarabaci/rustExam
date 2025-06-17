## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Enumlar üzerinde desen eşleme
#### ✅ Cevap 381: Birden fazla varyantlı enumlarda desen eşleme

Bu soruda, birden fazla varyantı olan bir enum tanımlanır ve match ifadesiyle her varyant için farklı bir çıktı üretilir. Bu, Rust'ta enumların güçlü desen eşleme yeteneklerini gösterir.

```rust
enum Status {
    Success,
    Warning(String),
    Error(i32),
}

fn main() {
    let s = Status::Warning("Low battery".to_string());
    match s {
        Status::Success => println!("Operation successful!"),
        Status::Warning(msg) => println!("Warning: {}", msg),
        Status::Error(code) => println!("Error code: {}", code),
    }
}
```
