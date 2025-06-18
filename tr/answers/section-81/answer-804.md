## 📘 Bölüm: Unsafe Soyutlamalar ve API'ler  
### 🔹 Kategori: Unsafe kodda tanımsız davranıştan kaçınma  
#### ✅ Cevap 804: Unsafe kodda tanımsız davranıştan kaçınma

Aşağıda, aynı anda iki değiştirilebilir referans oluşturmanın tanımsız davranışa yol açtığı bir örnek ve güvenli çözümü gösterilmiştir.

```rust
// Tanımsız davranışa yol açan unsafe kod:
unsafe fn ub_example(slice: &mut [i32]) {
    let (a, b) = (slice.get_unchecked_mut(0), slice.get_unchecked_mut(0));
    *a += 1;
    *b += 1; // Aynı elemana iki mutable referans!
}

// Güvenli çözüm:
fn safe_example(slice: &mut [i32]) {
    slice[0] += 2;
}

fn main() {
    let mut arr = [1, 2, 3];
    // unsafe { ub_example(&mut arr) }; // UB! Kullanmamalı
    safe_example(&mut arr);
    println!("{:?}", arr);
}
```
