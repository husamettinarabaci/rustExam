## 📘 Bölüm: Geleceğin Rust'ı ve Deneysel Özellikler  
### 🔹 Kategori: Yeni sözdizimi önerileri ve makrolar  
#### ✅ Cevap 996: Yeni sözdizimi önerileri ve makrolar

Rust'ta "let-else" gibi yeni sözdizimi özellikleri, hata yönetimini ve desen eşlemeyi daha okunabilir hale getirir. "let-else" ile bir desen eşleşmezse, else bloğu çalışır ve fonksiyondan çıkılabilir. Bu özellik şu anda sadece nightly Rust'ta kullanılabilir.

Örnek:

```rust
#![feature(let_else)]

fn parse_num(s: &str) -> Option<i32> {
    let Ok(n) = s.parse() else { return None; };
    Some(n)
}
```

Bu sözdizimi, hata kontrolünü daha kısa ve anlaşılır şekilde yazmayı sağlar. Benzer şekilde, inline const ve yeni makro sözdizimi gibi başka deneysel özellikler de nightly'de denenmektedir.
