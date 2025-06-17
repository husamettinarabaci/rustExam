## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Await ve Askıya Alma Noktaları  
#### ✅ Cevap 505: .await'in sözdizimi şekeri ve askıya alma noktalarını anlama

`.await`, bir future'ın tamamlanmasını beklemek için kullanılır ve derleyici tarafından askıya alma noktalarına çevrilir. Askıya alma noktası, async fonksiyonun çalışmasının durdurulup daha sonra devam edebileceği yerdir.

```rust
use tokio::time::{sleep, Duration};

async fn example() {
    println!("Önce");
    sleep(Duration::from_secs(1)).await; // askıya alma noktası
    println!("Sonra");
}

#[tokio::main]
async fn main() {
    example().await;
}
```
