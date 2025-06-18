## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: Otomatik Bağlayıcı Üretimi  
#### ✅ Cevap 605: `bindgen` ile otomatik bağlayıcı üretimi

`bindgen`, C başlık dosyalarından Rust için otomatik FFI bağlayıcıları üretir. Komut satırında veya build.rs dosyasında kullanılabilir.

Örnek kullanım:

```sh
bindgen wrapper.h -o bindings.rs
```

Rust build.rs örneği:
```rust
fn main() {
    bindgen::Builder::default()
        .header("wrapper.h")
        .generate()
        .expect("Unable to generate bindings")
        .write_to_file("bindings.rs")
        .expect("Couldn't write bindings!");
}
```
