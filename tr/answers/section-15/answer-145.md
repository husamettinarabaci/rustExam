## 📘 Bölüm: Yaşam Süreleri (Lifetimes)  
### 🔹 Kategori: Lifetime Bound  
#### ✅ Cevap 145: Lifetime bound nedir?

**Açıklama:**
Lifetime bound, bir lifetime'ın diğerinden uzun olmasını belirtir. Sözdizimi: `'a: 'b`.

```rust
fn foo<'a, 'b: 'a>(x: &'a str, y: &'b str) -> &'a str { x }
```
