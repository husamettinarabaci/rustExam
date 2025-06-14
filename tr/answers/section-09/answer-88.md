## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Yeniden Dışa Aktarma  
#### ✅ Cevap 88: `pub use` ile yeniden dışa aktarma

**Açıklama:**
`pub use` ile alt modüldeki öğeler üst modülde dışa aktarılabilir.

```rust
mod ic {
    pub fn selam() {
        println!("Selam");
    }
}
pub use ic::selam;

fn main() {
    selam();
}
```
