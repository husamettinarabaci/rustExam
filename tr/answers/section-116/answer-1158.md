## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Sync ve async kodu birlikte kullanma
#### ✅ Cevap 1158: Sync ve async kodu birlikte kullanma

Bu soruda, async fonksiyon içinde senkron fonksiyonun nasıl çağrılacağı ve bloklayıcı kodun async bağlamda güvenli şekilde çalıştırılması gösterilmiştir. `tokio::task::spawn_blocking` kullanılabilir.

```rust
fn sync_sum(a: i32, b: i32) -> i32 {
    a + b
}

async fn async_sum(a: i32, b: i32) -> i32 {
    tokio::task::spawn_blocking(move || sync_sum(a, b)).await.unwrap()
}

#[tokio::main]
async fn main() {
    let result = async_sum(3, 4).await;
    println!("Result: {}", result);
}
```
