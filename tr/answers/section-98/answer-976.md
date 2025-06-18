## 📘 Bölüm: Profil ve Performans Ayarı  
### 🔹 Kategori: Önbellek Optimizasyonu ve Veri Yakınlığı  
#### ✅ Cevap 976: Önbellek optimizasyonu ve veri yakınlığı

Önbellek dostu algoritmalar, ardışık bellek erişimiyle CPU önbelleğinden daha iyi yararlanır. Aşağıda, matris toplama işleminin satır-satır (cache-friendly) ve sütun-sütun (cache-unfriendly) erişimle karşılaştırılması örneği verilmiştir.

```rust
const N: usize = 1024;

fn row_major_sum(a: &[[f64; N]; N], b: &[[f64; N]; N]) -> [[f64; N]; N] {
    let mut c = [[0.0; N]; N];
    for i in 0..N {
        for j in 0..N {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    c
}

fn col_major_sum(a: &[[f64; N]; N], b: &[[f64; N]; N]) -> [[f64; N]; N] {
    let mut c = [[0.0; N]; N];
    for j in 0..N {
        for i in 0..N {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    c
}
```

Satır-satır toplama genellikle daha hızlıdır çünkü ardışık bellek erişimi önbellek verimliliğini artırır.
