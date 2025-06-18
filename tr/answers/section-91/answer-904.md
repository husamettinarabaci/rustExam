## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: CPU önbelleği ve bellek hizalamasını anlama
#### ✅ Cevap 904: CPU önbelleği ve bellek hizalamasını anlama

Bellek hizalaması, verinin boyutunun katı olan adreslerde saklanmasını sağlar ve CPU'nun bu verilere daha verimli erişmesini mümkün kılar. Kötü hizalama fazladan bellek erişimine ve yavaşlamaya yol açabilir. CPU önbelleği, yakın zamanda erişilen verileri hızlıca almak için kullanılır; veriye sıralı erişim önbellek verimliliğini artırır.

Struct alan sırası, bellek düzenini ve önbellek kullanımını etkiler. Büyük alanları başa koymak, dolgu miktarını azaltıp önbellek verimliliğini artırabilir.

```rust
struct KotuSira {
    a: u8,
    b: u64,
    c: u8,
}

struct IyiSira {
    b: u64,
    a: u8,
    c: u8,
}

fn main() {
    println!("KotuSira boyutu: {}", std::mem::size_of::<KotuSira>());
    println!("IyiSira boyutu: {}", std::mem::size_of::<IyiSira>());
}
```
