## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Asenkron Programlama  
#### ✅ Cevap 190: Rust'ta asenkron fonksiyon yazma

Bu örnek, `reqwest` ve `tokio` ile asenkron fonksiyon yazmayı ve çağırmayı gösterir.

```rust
use reqwest;

#[tokio::main]
async fn main() {
    let govde = fetch_url("https://www.rust-lang.org").await.unwrap();
    println!("{}", govde);
}

async fn fetch_url(url: &str) -> Result<String, reqwest::Error> {
    let yanit = reqwest::get(url).await?;
    yanit.text().await
}
```
