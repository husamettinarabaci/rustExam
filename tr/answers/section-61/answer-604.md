## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: Sahiplik ve Ömür Yönetimi  
#### ✅ Cevap 604: FFI ile sahiplik ve ömür yönetimi

Rust ve C arasında veri aktarırken sahiplik ve ömür yönetimi için, Rust tarafından tahsis edilen belleğin C tarafından serbest bırakılması veya tersi durumlarda dikkatli olunmalıdır. Rust'ta bir pointer'ı C'ye aktarırken, serbest bırakma fonksiyonunu da sağlamalısınız.

```rust
#[no_mangle]
pub extern "C" fn alloc_buffer(len: usize) -> *mut u8 {
    let mut v = Vec::with_capacity(len);
    let ptr = v.as_mut_ptr();
    std::mem::forget(v); // Rust sahipliği bırakır
    ptr
}

#[no_mangle]
pub extern "C" fn free_buffer(ptr: *mut u8, len: usize) {
    unsafe {
        let _ = Vec::from_raw_parts(ptr, 0, len);
    }
}
```
