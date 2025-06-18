## 📘 Bölüm: Geleceğin Rust'ı ve Deneysel Özellikler  
### 🔹 Kategori: Deneysel async/await özellikleri  
#### ✅ Cevap 993: Deneysel async/await özellikleri

Rust'ta async/await, eşzamanlı işlemleri daha okunabilir ve yönetilebilir hale getirir. Stable Rust'ta async fonksiyonlar ve `.await` ile future'lar desteklenir. Nightly Rust'ta ise async closure'lar ve trait'lerde async fonksiyonlar gibi deneysel özellikler denenmektedir.

Örneğin, async closure'lar sadece nightly'de kullanılabilir:

```rust
#![feature(async_closure)]

fn main() {
    let add_async = async |a: i32, b: i32| -> i32 { a + b };
    // Bir executor ile çalıştırmak gerekir (ör. tokio, async-std)
}
```

Benzer şekilde, trait'lerde async fonksiyonlar da nightly'de denenmektedir. Bu özellikler, Rust'ın async ekosistemini daha esnek ve güçlü hale getirmeyi amaçlar, ancak henüz kararlı değildir ve API'leri değişebilir.
