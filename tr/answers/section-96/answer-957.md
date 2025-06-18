## 📘 Bölüm: İleri Test ve Biçimsel Doğrulama  
### 🔹 Kategori: Unsafe kodun sağlamlığını test etme  
#### ✅ Cevap 957: Unsafe kodun sağlamlığını test etme

Unsafe kod, Rust'ın güvenlik garantilerini devre dışı bırakır ve bu nedenle dikkatli test edilmelidir. `miri` aracı, unsafe kodun tanımsız davranışlarını tespit etmek için kullanılabilir.

```rust
unsafe fn add_one(ptr: *mut i32) {
    *ptr += 1;
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add_one() {
        let mut x = 5;
        unsafe { add_one(&mut x as *mut i32); }
        assert_eq!(x, 6);
    }
}
```
`cargo miri test` ile bu testler, tanımsız davranış açısından analiz edilebilir.
