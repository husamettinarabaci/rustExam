## 📘 Bölüm: Async Hata Yönetimi
### 🔹 Kategori: Async Hata Yönetimi
#### ✅ Cevap 1055: Async bağlamda paniklerden kurtarma

Bu örnekte bir async görevde panik oluşur ve bu panik `JoinHandle` ile yakalanır. Böylece programın çökmesi önlenir ve kullanıcıya bilgi verilir.

```rust
use tokio::task;

#[tokio::main]
async fn main() {
    let handle = task::spawn(async {
        panic!("Something went wrong!");
    });

    match handle.await {
        Ok(_) => println!("Task completed successfully."),
        Err(e) => println!("Task panicked: {}", e),
    }
}
```
