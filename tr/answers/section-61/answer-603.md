## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: Callback Yönetimi  
#### ✅ Cevap 603: C'den Rust'a callback yönetimi

C'den Rust'a callback fonksiyonu iletmek için Rust fonksiyonunu `extern "C"` ile tanımlayın ve C'ye fonksiyon işaretçisi olarak aktarın.

```rust
#[no_mangle]
pub extern "C" fn rust_callback(x: i32) -> i32 {
    x * 2
}

// C kodu örneği:
// void call_rust(int (*cb)(int)) {
//     int result = cb(21);
//     printf("Result: %d\n", result);
// }
```
