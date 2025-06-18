## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async mutex ve kilitleri etkin kullanma
#### ❓ Soru 1152: Async mutex ve kilitleri etkin kullanma

Birden fazla async görevden paylaşılan bir sayacı güvenli şekilde güncelleyen bir Rust async fonksiyonu yazın.

- Paylaşılan durum için `tokio::sync::Mutex` veya benzeri bir yapı kullanın.
- Birden fazla async görev başlatıp sayacı artırın.
- Tüm artışların görünür ve veri yarışının olmamasını sağlayın.

🔧 **Görev:** Async Rust'ta async mutex ile güvenli paylaşımlı durum değişimini gösterin.
