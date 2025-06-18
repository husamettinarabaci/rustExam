## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri  
### 🔹 Kategori: Güvenlik ve mTLS  
#### ✅ Cevap 1296: Mikroservisleri mTLS ile güvenli hale getirme

mTLS, hem istemci hem de sunucunun kimliğini doğrulayarak güvenli iletişim sağlar. Rust servislerinde mTLS için genellikle TLS destekli kütüphaneler (örn. tonic, hyper) kullanılır. Sertifikalar otomatik olarak yenilenmeli ve güvenli şekilde saklanmalıdır. Servis mesh çözümleri, mTLS yönetimini otomatikleştirerek uygulama kodunu sadeleştirir.

```rust
// tonic ile mTLS etkinleştirme örneği
Server::builder()
  .tls_config(tls_config)?
  .add_service(...)
  .serve(addr)
  .await?;
```
