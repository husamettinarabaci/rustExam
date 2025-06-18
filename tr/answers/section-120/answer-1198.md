## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Aktör tabanlı ve thread tabanlı eşzamanlılık  
#### ✅ Cevap 1198: Aktör tabanlı ve thread tabanlı eşzamanlılık

Aktör tabanlı modelde, her aktör kendi durumunu yönetir ve mesajlarla iletişim kurar. Thread tabanlı modelde ise işler doğrudan iş parçacıklarında yürütülür.

**Aktör tabanlı mantık:**
- Her aktör bir mesaj kuyruğuna sahiptir.
- Mesajlar asenkron olarak işlenir.

**Thread tabanlı mantık:**
- Her iş bir thread'de çalışır, paylaşımlı veri için senkronizasyon gerekir.

**Örnek (mantık):**
```rust
// Aktör: actix gibi kütüphanelerle mesaj tabanlı model.
// Thread: std::thread ile doğrudan iş parçacığı başlatmak.
```

Aktör modeli, karmaşık iletişim ve izolasyon gerektiren sistemlerde; thread tabanlı model ise basit paralel işlemlerde tercih edilir.
