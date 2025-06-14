## 📘 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Option ve Result Farkı  
#### ✅ Cevap 115: Option ve Result farkı

**Açıklama:**
`Option`, bir değerin olup olmamasını, `Result` ise işlemin başarılı mı hatalı mı olduğunu belirtir. Örnek:

```rust
fn cift_bul(nums: &[i32]) -> Option<i32> {
    nums.iter().find(|&&x| x % 2 == 0).copied()
}
fn bol(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 { Err("Sıfır!".to_string()) } else { Ok(a / b) }
}
```
