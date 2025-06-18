## 📘 Bölüm: İleri Eklenti Mimarileri  
### 🔹 Kategori: Diller Arası Eklenti Birlikte Çalışabilirliği  
#### ✅ Cevap 1453: Diller arası eklenti birlikte çalışabilirliği

Diller arası eklenti birlikte çalışabilirliği, farklı dillerde yazılmış eklentilerin Rust ana uygulamasıyla entegre olmasını sağlar. Rust'ta FFI (Foreign Function Interface) ile C/C++ gibi dillerde yazılmış kütüphanelerle güvenli entegrasyon mümkündür.

Aşağıda, Rust ile C fonksiyonunu çağıran basit bir FFI örneği verilmiştir:

```rust
extern "C" {
    fn c_plugin_function(x: i32) -> i32;
}

fn call_c_plugin(x: i32) -> i32 {
    unsafe { c_plugin_function(x) }
}
```
Bu örnekte, Rust kodu C fonksiyonunu güvenli şekilde çağırır. FFI kullanırken bellek güvenliği ve veri tiplerinin uyumu önemlidir.
