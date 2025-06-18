## 📘 Bölüm: Rust ile İleri Ağ Programlama
### 🔹 Kategori: HTTP/2 ve HTTP/3 protokolleri
#### ✅ Cevap 875: HTTP/2 ve HTTP/3 protokolleri ile sunucu oluşturma

Bu örnekte, hyper crate'i ile HTTP/2 destekli bir sunucu oluşturulmuş ve temel bir GET isteğine yanıt verilmiştir. HTTP/3 için quinn veya benzeri crate'ler kullanılabilir.

```rust
// Bu örnek için hyper crate'i gereklidir.
use hyper::{Body, Request, Response, Server};
use hyper::service::{make_service_fn, service_fn};
use std::convert::Infallible;

#[tokio::main]
async fn main() {
    let make_svc = make_service_fn(|_conn| async {
        Ok::<_, Infallible>(service_fn(|_req: Request<Body>| async {
            Ok::<_, Infallible>(Response::new(Body::from("Merhaba HTTP/2!")))
        }))
    });
    let addr = ([127, 0, 0, 1], 3000).into();
    let server = Server::bind(&addr).http2_only(true).serve(make_svc);
    println!("HTTP/2 sunucu başlatıldı: http://{}", addr);
    server.await.unwrap();
}
```
Not: HTTP/3 için quinn crate'i ve ek yapılandırmalar gereklidir.
