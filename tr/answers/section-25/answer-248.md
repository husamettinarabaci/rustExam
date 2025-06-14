## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanış ve Async Fonksiyonlar  
#### ✅ Cevap 248: Kapanış ve async fonksiyonlar

Kapanışlar async fonksiyonlarla kullanılabilir, ancak thread'ler arası kullanımda `Send` olmalıdır. Kapanışlar async fonksiyonlara parametre olarak geçirilebilir.

```rust
async fn calistir<F, Fut>(f: F)
where
    F: Fn() -> Fut,
    Fut: std::future::Future<Output = ()>,
{
    f().await;
}

let kapanis = || async { println!("Merhaba async kapanış!"); };
// tokio::spawn(calistir(kapanis));
```
