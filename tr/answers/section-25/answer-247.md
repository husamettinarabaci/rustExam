## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanış ve Trait Sınırları  
#### ✅ Cevap 247: Kapanış ve trait sınırları

Kapanışlar için `Fn`, `FnMut` ve `FnOnce` trait sınırları kullanılabilir.

```rust
fn fn_cagir<F: Fn()>(f: F) { f(); }
fn fnmut_cagir<F: FnMut()>(mut f: F) { f(); }
fn fnonce_cagir<F: FnOnce()>(f: F) { f(); }
```

- `Fn`: Değişkenleri değiştirmeyen kapanışlar için.
- `FnMut`: Değişkenleri değiştiren kapanışlar için.
- `FnOnce`: Sahipliği alan kapanışlar için.
