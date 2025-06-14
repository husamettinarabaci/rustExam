## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desen Koruyucular (Pattern Guard)  
#### ✅ Cevap 162: Match kollarında desen koruyucular (pattern guard) kullanma

Rust'ta desen koruyucular (`if` koşulları), `match` kollarına ek koşullar eklemenizi sağlar. Örnek:

```rust
fn sayi_tanimla(n: i32) {
    match n {
        x if x == 0 => println!("Sıfır"),
        x if x > 0 && x % 2 == 0 => println!("Çift ve pozitif"),
        x if x > 0 && x % 2 != 0 => println!("Tek ve pozitif"),
        x if x < 0 => println!("Negatif"),
        _ => (),
    }
}
```

Bu fonksiyon, desen koruyucular (`if` koşulları) ile sayının çift, tek, pozitif, negatif veya sıfır olmasını ayırt eder.
