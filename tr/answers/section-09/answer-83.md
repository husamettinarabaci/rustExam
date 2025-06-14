## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: İç İçe Modüller  
#### ✅ Cevap 83: İç içe modüller

**Açıklama:**
Modüller iç içe tanımlanabilir. Alt modüldeki öğelere tam yol ile erişilir.

```rust
mod dis {
    pub mod ic {
        pub fn selam() {
            println!("İçten selam");
        }
    }
}

fn main() {
    dis::ic::selam();
}
```
