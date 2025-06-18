## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: Async görevleri ve future'ları hata ayıklama  
#### ✅ Cevap 638: Async görevleri ve future'ları hata ayıklama

Async kodda hata ayıklama için `dbg!`, `tracing`, `println!` gibi araçlar kullanılabilir. Ayrıca, future'ların poll edildiği noktaları ve waker çağrılarını izlemek için loglama yapılabilir.

```rust
async fn foo() {
    dbg!("future başladı");
}

#[tokio::main]
async fn main() {
    foo().await;
}
```
