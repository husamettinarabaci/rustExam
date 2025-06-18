## 📘 Bölüm: Async Desenler ve Runtime İç Yapısı  
### 🔹 Kategori: Birden fazla async runtime'ı entegre etme  
#### ✅ Cevap 639: Birden fazla async runtime'ı entegre etme

Rust'ta birden fazla async runtime (ör. tokio ve async-std) aynı anda kullanılabilir, ancak dikkatli entegrasyon gerekir. Genellikle bir runtime içinde diğerinin future'larını çalıştırmak için köprüler veya spawn fonksiyonları kullanılır.

```rust
// async-std future'ı tokio içinde çalıştırmak için spawn_blocking kullanılabilir
```
