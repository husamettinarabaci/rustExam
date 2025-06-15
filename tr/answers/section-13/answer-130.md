## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Sabitleri  
#### ✅ Cevap 130: Modül sabitleri

**Açıklama:**

Rust modüllerinde `const` anahtar kelimesiyle sabitler tanımlanabilir. Sabitler daima değiştirilemezdir ve tür belirtimi zorunludur. Modül yolu ile sabite erişebilirsiniz.

```rust
mod matematik {
    pub const PI: f64 = 3.14159;
    pub fn daire_alan(yaricap: f64) -> f64 {
        PI * yaricap * yaricap
    }
}

fn main() {
    println!("PI = {}", matematik::PI);
    println!("Alan = {}", matematik::daire_alan(2.0));
}
```
