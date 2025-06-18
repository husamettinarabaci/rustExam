## 📘 Bölüm: Derleme Zamanı Yansıma ve İçgörü
### 🔹 Kategori: Derleme Zamanı Yansıma
#### ✅ Cevap 1475: Tip güvenli derleme zamanı meta veri depolama

Tip güvenli meta veri depolama için trait'ler ve sabit fonksiyonlar kullanılabilir. Örneğin, her struct için bir trait implementasyonu ile alan bilgisi derleme zamanında erişilebilir kılınır.

```rust
trait Meta {
    fn fields() -> &'static [(&'static str, &'static str)];
}

struct User { id: u32, name: String }

impl Meta for User {
    fn fields() -> &'static [(&'static str, &'static str)] {
        &[ ("id", "u32"), ("name", "String") ]
    }
}
```
