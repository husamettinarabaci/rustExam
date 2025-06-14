## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Fonksiyondan Kapanış Döndürme  
#### ✅ Cevap 244: Fonksiyondan kapanış döndürme

Kapanış, `impl Fn` veya boxed trait nesnesi ile döndürülebilir.

```rust
fn toplayici(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}

let bes_ekle = toplayici(5);
println!("{}", bes_ekle(3));
```

Dinamik tipler için `Box<dyn Fn()>` kullanılır.
