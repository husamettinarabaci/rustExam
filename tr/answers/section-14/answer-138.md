## 📘 Bölüm: Modüller ve Paketler  
### 🔹 Kategori: Yeniden Dışa Aktarma  
#### ✅ Cevap 138: Yeniden dışa aktarma (re-export)

**Açıklama:**
Başka bir modüldeki ögeyi kendi modülünüzden erişilebilir yapmak için `pub use` kullanılır.

```rust
mod a {
    pub fn foo() {}
}
pub use a::foo;
```
