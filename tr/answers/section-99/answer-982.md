## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: Rust Kodunu C/C++ Projelerine Gömme  
#### ✅ Cevap 982: Rust kodunu C/C++ projelerine gömme

Rust kodunu C projesine gömmek için Rust tarafında dinamik veya statik kütüphane oluşturulur:

Rust tarafı:
```rust
#[no_mangle]
pub extern "C" fn hello() {
    println!("Hello from Rust!");
}
```

Cargo.toml'da:
```
[lib]
crate-type = ["cdylib"]
```

C tarafı:
```c
extern void hello();
int main() {
    hello();
}
```

Rust kütüphanesini derleyip C projesine bağlayın.
