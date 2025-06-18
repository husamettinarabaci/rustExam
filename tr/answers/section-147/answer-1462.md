## 📘 Bölüm: Karmaşık Alanlar için DSL'ler
### 🔹 Kategori: DSL Tasarımı ve Kullanımı
#### ✅ Cevap 1462: Veri dönüşüm boru hatları için DSL'ler

Veri dönüşüm boru hatları için bir DSL, işlemleri zincirleme olarak tanımlamayı sağlar. Örneğin, bir dizi işlemi sırayla uygulayabilirsiniz. DSL, işlemleri sembolik olarak tanımlar ve her adımda veriyi dönüştürür.

```rust
// Örnek DSL:
// input | trim | to_uppercase | replace("FOO", "BAR")

// Basit bir ayrıştırıcı ve uygulama:
fn apply_pipeline(input: &str) -> String {
    input.trim().to_uppercase().replace("FOO", "BAR")
}
```
