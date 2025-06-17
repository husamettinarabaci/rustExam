## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Async Fonksiyonlar ve Await  
#### ✅ Cevap 501: Async fonksiyon oluşturma ve bir future'ı await etme

Rust'ta `async` fonksiyonlar, bir future döndürür ve ancak bir async runtime (ör. tokio) ile çalıştırılabilir. `await` ile future'ın sonucunu bekleyebilirsiniz.

```rust
use tokio; // veya async-std

async fn get_number() -> i32 {
    42
}

#[tokio::main]
async fn main() {
    let result = get_number().await;
    println!("Sonuç: {}", result);
}
```
