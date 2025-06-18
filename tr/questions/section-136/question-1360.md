## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Eklenti kodunu güvenlik açıklarına karşı denetleme  
#### ❓ Soru 1360: Eklenti kodunu güvenlik açıklarına karşı denetleme

Bir Rust uygulamasında, yüklenen eklenti kodunu güvenlik açıklarına karşı denetlemek için aşağıdaki adımları uygulayın:

- Eklenti kodunu statik analiz araçlarıyla tarayın (örn. `cargo-audit`, `clippy`).
- Bilinen güvenlik açıkları veya tehlikeli kod kalıpları tespit edildiğinde yüklemeyi engelleyin.
- Denetim sonuçlarını ana uygulamaya raporlayın.
- Otomatik denetim sürecini eklenti yükleme akışına entegre edin.

🔧 **Görev:** Eklenti kodunu güvenlik açıklarına karşı denetlemek için örnek bir Rust kodu veya süreç önerin.
