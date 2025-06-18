## 📘 Bölüm: Async Ağ ve IO
### 🔹 Kategori: Async HTTP istemci ve sunucu oluşturma
#### ✅ Cevap 1092: Async HTTP istemci ve sunucu oluşturma

Bu örnekte `tokio` ve `hyper` kullanılarak basit bir async HTTP sunucu ve istemcisi oluşturulmuştur. Sunucu gelen GET isteğine "Merhaba, Dünya!" yanıtı döndürür. İstemci ise bu yanıtı ekrana yazdırır.

```rust
// Sunucu
use hyper::{Body, Response, Server, Request, Method};
use hyper::service::{make_service_fn, service_fn};

#[tokio::main]
async fn main() {
    let make_svc = make_service_fn(|_conn| async {
        Ok::<_, hyper::Error>(service_fn(|req: Request<Body>| async move {
            if req.method() == Method::GET {
                Ok::<_, hyper::Error>(Response::new(Body::from("Merhaba, Dünya!")))
            } else {
                Ok::<_, hyper::Error>(Response::new(Body::from("Sadece GET!")))
            }
        }))
    });
    let addr = ([127, 0, 0, 1], 3000).into();
    let server = Server::bind(&addr).serve(make_svc);
    println!("Sunucu çalışıyor: http://127.0.0.1:3000");
    server.await.unwrap();
}
```

```rust
// İstemci
use hyper::{Client, Uri};

#[tokio::main]
async fn main() {
    let client = Client::new();
    let uri: Uri = "http://127.0.0.1:3000".parse().unwrap();
    let resp = client.get(uri).await.unwrap();
    let bytes = hyper::body::to_bytes(resp.into_body()).await.unwrap();
    println!("Yanıt: {}", String::from_utf8_lossy(&bytes));
}
```
