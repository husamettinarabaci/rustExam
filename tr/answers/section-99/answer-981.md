## 📘 Bölüm: Dil Arası Çalışabilirlik  
### 🔹 Kategori: FFI ve Çoklu Dil Çağrıları  
#### ✅ Cevap 981: Rust'ı diğer dillerden (C, Python, Java) çağırma

Rust fonksiyonunu başka bir dilden çağırmak için `extern "C"` ile FFI arayüzü oluşturulur. Örneğin, C'den çağırmak için:

Rust tarafı:
```rust
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

C tarafı:
```c
extern int add(int a, int b);
int main() {
    int result = add(2, 3);
}
```

Python için `cffi` veya `ctypes` ile benzer şekilde çağrılabilir.
