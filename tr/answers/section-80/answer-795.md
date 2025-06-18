## 📘 Bölüm: Sistem Programlama İleri Konular  
### 🔹 Kategori: Dosya Sistemleri ve Ağ Yığını  
#### ✅ Cevap 795: Yüksek performanslı ayrıştırıcılar yazma

Yüksek performanslı ayrıştırıcılar, büyük veri akışlarını hızlıca işlemek için optimize edilir. Rust'ta ayrıştırıcılar, iterator ve slice tabanlı olarak yazılabilir. Bellek güvenliği ve hız için genellikle `nom` gibi crate'ler kullanılır.

```rust
fn parse_numbers(input: &str) -> Vec<i32> {
    input
        .split(',')
        .filter_map(|s| s.trim().parse().ok())
        .collect()
}

let numbers = parse_numbers("1, 2, 3, 4");
```
Bu örnekte, virgülle ayrılmış sayıları hızlıca ayrıştıran bir fonksiyon gösterilmiştir.
