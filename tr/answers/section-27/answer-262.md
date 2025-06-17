## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: 'static ve Statik Olmayan Ömürler  
#### ✅ Cevap 262: 'static ve statik olmayan ömürler arasındaki farkı açıklama

Rust'ta `'static` ömrü, bir referansın programın tüm ömrü boyunca geçerli olacağı anlamına gelir. Genellikle sabit stringler (`&'static str`) veya program boyunca yaşayan global veriler için kullanılır. Statik olmayan ömürler ise, referansın yalnızca belirli bir scope veya fonksiyon süresince geçerli olmasını ifade eder.

**Örnek:**

```rust
// 'static ömürlü bir referans
let s: &'static str = "merhaba";

// Statik olmayan ömürlü referans
let name = String::from("rustacean");
let r: &str = &name; // r, name değişkeniyle aynı ömre sahiptir
```

`'static` ömrü, özellikle thread'lerde veya global veriyle çalışırken gereklidir. Statik olmayan ömürler ise çoğunlukla fonksiyon parametreleri ve geçici değişkenlerle kullanılır.
