## 📘 Bölüm: Koleksiyonlar  
### 🔹 Kategori: String İşlemleri  
#### ✅ Cevap 125: String birleştirme

**Açıklama:**
`+` operatörü veya `format!` makrosu ile string birleştirilebilir.

```rust
let a = String::from("Merhaba");
let b = String::from(", dünya!");
let c = a + &b;
let d = format!("{}{}", c, "!");
```
