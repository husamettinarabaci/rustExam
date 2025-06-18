## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: global_asm! ile Rust içinde assembly kullanımı
#### ✅ Cevap 562: global_asm! ile Rust içinde assembly kullanımı

`global_asm!` makrosu ile Rust dosyasına doğrudan assembly kodu eklenebilir. Bu, donanım seviyesinde işlemler için kullanılır. Örnek:

```rust
#![feature(global_asm)]
global_asm!(r#"
    .global my_asm_func
my_asm_func:
    bx lr
"#);

extern "C" {
    fn my_asm_func();
}

fn main() {
    unsafe { my_asm_func(); }
}
```

Bu kodda, bir assembly fonksiyonu Rust kodundan çağrılır.
