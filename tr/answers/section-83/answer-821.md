## 📘 Bölüm: Derleyici Eklentileri ve Özel Lintler  
### 🔹 Kategori: Derleyici Eklentileri  
#### ✅ Cevap 821: Rust derleyici eklentileri (nightly)

Rust derleyici eklentileri (compiler plugins), derleyicinin işleyişine müdahale eden ve genellikle nightly sürümde çalışan özel kodlardır. Örneğin, özel lintler veya makrolar eklemek için kullanılırlar. Eklenti yazmak için `#![feature(plugin)]` ve ilgili nightly özellikleri gerekir. Nightly'de örnek bir kullanım:

```rust
#![feature(plugin)]
#![plugin(my_plugin)]

fn main() {
    // my_plugin tarafından sağlanan özellikler burada kullanılabilir
}
```

Günümüzde çoğu eklenti işlevi prosedürel makrolara taşınmıştır ve compiler plugins deprecated olmuştur.
