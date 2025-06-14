# 📗 Bölüm: Fonksiyonlar I  
## 🔹 Kategori: Ömürler (Lifetimes)  
### ✅ Cevap 49: `static` ömrü

**Açıklama:**
`static` ömrü, bir değerin programın tüm ömrü boyunca bellekte kalacağını belirtir. Genellikle sabitler ve string literal'ler için kullanılır.

**Örnek:**
```rust
static HELLO: &str = "Merhaba, dünya!";
```
Burada `HELLO` değişkeni program bitene kadar bellekte kalır.
