## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Tokio ile Görevler  
#### ✅ Cevap 502: tokio::spawn ile eşzamanlı görevler çalıştırma

`tokio::spawn` ile birden fazla async görevi başlatabilir ve hepsinin tamamlanmasını `await` ile bekleyebilirsiniz.

```rust
use tokio;

#[tokio::main]
async fn main() {
    let task1 = tokio::spawn(async {
        println!("Görev 1 çalışıyor");
    });
    let task2 = tokio::spawn(async {
        println!("Görev 2 çalışıyor");
    });
    let _ = tokio::join!(task1, task2);
}
```
