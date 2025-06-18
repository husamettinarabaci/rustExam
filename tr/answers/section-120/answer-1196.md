## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Circuit breaker ve bulkhead desenleri  
#### ✅ Cevap 1196: Circuit breaker ve bulkhead desenleri

Circuit breaker (devre kesici) deseni, başarısız işlemlerden sonra sistemi korumak için isteklere geçici olarak izin vermez. Bulkhead (bölme) deseni ise sistemi izole bölümlere ayırarak bir bölümdeki hatanın diğerlerini etkilemesini önler.

**Circuit breaker mantığı (özet):**
- Belirli sayıda hata sonrası devre "açılır" ve yeni isteklere izin verilmez.
- Bir süre sonra tekrar denenir.

**Bulkhead mantığı (özet):**
- Her iş yükü için ayrı kaynak havuzu (ör. thread havuzu) kullanılır.
- Bir havuz dolarsa, diğerleri etkilenmez.

**Basit örnek (mantık):**
```rust
// Circuit breaker için sayaç ve zamanlayıcı ile kontrol yapılır.
// Bulkhead için farklı thread havuzları veya kanal sınırları kullanılır.
```

Bu desenler, mikroservisler, ağ uygulamaları ve yüksek erişilebilirlik gerektiren sistemlerde kullanılır.
