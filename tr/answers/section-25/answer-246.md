## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Struct Alanı Olarak Kapanış  
#### ✅ Cevap 246: Struct alanı olarak kapanış

Struct içinde kapanış, generic ve trait sınırı ile saklanabilir.

```rust
struct GeriCagri<F: Fn(i32) -> i32> {
    cb: F,
}

let g = GeriCagri { cb: |x| x + 1 };
println!("{}", (g.cb)(5));
```

Dinamik dispatch için `Box<dyn Fn()>` kullanılabilir.
