## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: İleri Lifetime Kullanımı  
#### ✅ Cevap 150: İleri lifetime kullanımı

**Açıklama:**
İleri kullanımda birden fazla lifetime parametresi ve karmaşık ilişkiler olabilir.

```rust
fn foo<'a, 'b>(x: &'a str, y: &'b str) -> &'a str { x }
```
