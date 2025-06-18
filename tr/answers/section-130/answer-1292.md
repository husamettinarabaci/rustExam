## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri  
### 🔹 Kategori: Yüksek Performanslı RPC ve tonic  
#### ✅ Cevap 1292: Yüksek performanslı RPC için `tonic` kullanımı

`tonic`, Rust'ta gRPC tabanlı hızlı ve tip güvenli RPC servisleri geliştirmek için kullanılır. Sunucu ve istemci oluşturmak için önce Protobuf dosyaları tanımlanır ve derlenir. Ardından `tonic` ile sunucu ve istemci kodu yazılır. `tonic` async/await desteğiyle yüksek performans sunar ve otomatik olarak Protobuf şemalarını entegre eder.

```rust
// Cargo.toml'da tonic ve prost eklenir
// Protobuf dosyası derlenir ve modül olarak eklenir
// Sunucu örneği:
#[tokio::main]
async fn main() {
    tonic::transport::Server::builder()
        .add_service(MyServiceServer::new(MyServiceImpl))
        .serve(addr)
        .await.unwrap();
}
```
