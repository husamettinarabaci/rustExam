## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri  
### 🔹 Kategori: Yüksek Erişilebilirlik ve Ölçeklendirme  
#### ✅ Cevap 1300: Yüksek erişilebilirlik için mikroservisleri ölçeklendirme

Yatay ölçeklendirme, yeni servis kopyaları ekleyerek yükü dağıtır; dikey ölçeklendirme ise mevcut sunucunun kaynaklarını artırır. Otomatik yeniden başlatma, health check ve hata toleransı için Kubernetes gibi orkestratörler kullanılır. Dağıtık sistemlerde yüksek erişilebilirlik için çoklu bölge dağıtımı, veri çoğaltma ve otomatik yük dengeleme en iyi uygulamalardandır.

```rust
// Rust kodunda health check endpoint örneği
async fn health() -> impl Responder {
    HttpResponse::Ok().body("OK")
}
```
