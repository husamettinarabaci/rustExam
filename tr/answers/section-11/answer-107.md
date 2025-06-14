# Cevap 107

## 📘 Bölüm: Traitler ve Nesne Güvenliği  
### 🔹 Kategori: Trait Bağımlılıkları  
#### ✅ Cevap 107: Trait'in başka trait'i gerektirmesi

**Açıklama:**
Bir trait'in başka bir trait'i gerektirmesi için, trait tanımında `: DiğerTrait` ifadesi kullanılır. Örneğin:

```rust
trait A {}
trait B: A {}
```
Bu durumda, `B` trait'ini uygulayan her tip aynı zamanda `A` trait'ini de uygulamalıdır.
