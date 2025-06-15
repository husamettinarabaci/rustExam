## 📘 Bölüm: Closure ve Sahiplik
### 🔹 Kategori: Closure ve Değişkenlerin Ömrü
#### ✅ Cevap 245: Closure ve değişkenlerin ömrü

Rust'ta bir closure, referans ile yakaladığı değişkenlerden daha uzun yaşayamaz. Closure, bir yerel değişkene referans yakalayıp o değişkenin ömrü bittiğinde kullanmaya çalışırsa derleyici ömür hatası verir.

Aşağıdaki örnek derlenmez:

```rust
fn main() {
    let closure;
    {
        let x = 10;
        closure = || println!("x = {}", x); // closure x'i referans ile yakalıyor
    } // x burada düşer
    // closure(); // HATA: x yeterince uzun yaşamıyor
}
```

**Hata açıklaması:**
Closure, ömrü biten bir değişkeni kullanmaya çalışıyor, bu Rust'ta yasaktır.

**Çözüm:**
`move` anahtar kelimesiyle closure'ın değişkeni değer olarak sahiplenmesini sağlayın:

```rust
fn main() {
    let closure;
    {
        let x = 10;
        closure = move || println!("x = {}", x); // closure x'i değer olarak sahipleniyor
    }
    closure(); // Sorun yok: x closure'a taşındı
}
```

`move` ile closure, yakaladığı değişkenin sahibi olur ve ömür problemi ortadan kalkar.
