## 📘 Bölüm: Rust ile İleri Ağ Programlama  
### 🔹 Kategori: HTTP/2 ve HTTP/3 Protokolleri  
#### ✅ Cevap 879: Rust'ta HTTP/2 ve HTTP/3 protokolleri

Rust'ta HTTP/2 için `hyper`, HTTP/3 için ise `quinn` gibi crate'ler kullanılabilir. Aşağıda, HTTP/2 ile GET isteği gönderen ve HTTP/3 ile bağlantı kuran örnekler verilmiştir:

**HTTP/2 (hyper ile):**
```rust
use hyper::{Client, Request, Body};
use hyper::client::HttpConnector;
use hyper::client::connect::dns::GaiResolver;
use tokio::runtime::Runtime;

fn main() {
    let rt = Runtime::new().unwrap();
    rt.block_on(async {
        let client = Client::builder().http2_only(true).build_http();
        let req = Request::builder()
            .uri("https://http2.akamai.com/demo")
            .body(Body::empty())
            .unwrap();
        let resp = client.request(req).await.unwrap();
        println!("HTTP/2 status: {}", resp.status());
    });
}
```

**HTTP/3 (quinn ile):**
```rust
// Quinn ile HTTP/3 bağlantısı için temel kurulum yapılabilir.
// Ayrıntılı örnekler için quinn dokümantasyonuna bakınız.
```

HTTP/2, bağlantı başına birden fazla istek-mesajı desteklerken, HTTP/3 UDP tabanlıdır ve daha düşük gecikme sunar.
