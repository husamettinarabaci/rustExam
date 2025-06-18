## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Popüler Rust async runtime'larına genel bakış (`tokio`, `async-std`)
#### ✅ Cevap 861: Popüler Rust async runtime'larına genel bakış (`tokio`, `async-std`)

Rust'ta en yaygın async runtime'lar `tokio` ve `async-std`'dir. `tokio` yüksek performans ve geniş ekosistem sunarken, `async-std` daha sade ve std benzeri API sağlar.

Tokio örneği:
```rust
#[tokio::main]
async fn main() {
    println!("Tokio ile async!");
}
```
Async-std örneği:
```rust
#[async_std::main]
async fn main() {
    println!("Async-std ile async!");
}
```

`tokio` genellikle büyük projelerde, `async-std` ise daha hafif uygulamalarda tercih edilir.
