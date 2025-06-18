## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri  
### 🔹 Kategori: Servis Keşfi ve Yük Dengeleme  
#### ✅ Cevap 1293: Servis keşfi ve yük dengeleme

Servis keşfi için merkezi (Consul, etcd) veya merkezi olmayan (DNS tabanlı) yöntemler kullanılabilir. Yük dengeleme için genellikle ters proxy (nginx, Envoy) veya servis mesh çözümleri tercih edilir. Rust uygulamaları, servis adreslerini dinamik olarak almalı ve yük dengeleyici arkasında çalışacak şekilde tasarlanmalıdır. Merkezi keşif, kolay yönetim sunarken merkezi olmayan yöntemler daha esnektir.

```rust
// DNS tabanlı servis keşfi örneği
grpc_client.connect("http://user-service.local:50051").await?;
```
