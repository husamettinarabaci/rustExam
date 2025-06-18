## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: Yüksek Performanslı Ayrıştırıcılar  
#### ✅ Cevap 597: Yüksek performanslı ayrıştırıcılar yazma

Rust'ta hızlı bir parser için dilimlerle (slice) ve iteratorlerle çalışmak önemlidir. Aşağıda basit bir CSV ayrıştırıcı örneği verilmiştir:

```rust
use std::time::Instant;

fn parse_csv(input: &str) -> Vec<Vec<&str>> {
    input.lines().map(|line| line.split(',').collect()).collect()
}

fn main() {
    let data = "a,b,c\n1,2,3\n4,5,6";
    let start = Instant::now();
    let parsed = parse_csv(data);
    let duration = start.elapsed();
    println!("Parsed: {:?}", parsed);
    println!("Elapsed: {:?}", duration);
}
```
