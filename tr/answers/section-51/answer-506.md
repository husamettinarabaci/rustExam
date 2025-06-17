## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Görevler ve join/select!  
#### ✅ Cevap 506: join! ve select! ile görevleri sıralı ve eşzamanlı çalıştırma

`tokio::join!` ile birden fazla async işlemi aynı anda başlatıp hepsinin tamamlanmasını bekleyebilirsiniz. `tokio::select!` ile ise ilk tamamlanan işlemin sonucunu alırsınız.

```rust
use tokio::time::{sleep, Duration};

async fn task1() -> &'static str {
    sleep(Duration::from_secs(2)).await;
    "task1 tamamlandı"
}

async fn task2() -> &'static str {
    sleep(Duration::from_secs(1)).await;
    "task2 tamamlandı"
}

#[tokio::main]
async fn main() {
    let (r1, r2) = tokio::join!(task1(), task2());
    println!("join!: {} ve {}", r1, r2);

    let winner = tokio::select! {
        v1 = task1() => v1,
        v2 = task2() => v2,
    };
    println!("select!: {}", winner);
}
```
