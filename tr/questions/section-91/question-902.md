## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: `packed_simd` ile SIMD destekli kod yazma
#### ❓ Soru 902: `packed_simd` ile SIMD destekli kod yazma

Aşağıdaki adımları izleyen bir Rust fonksiyonu yazın:

- 8'er elemanlı iki `f32` dizisi tanımlayın.
- `packed_simd` crate'i ile bu dizileri SIMD kullanarak eleman bazında toplayın.
- Sonuç dizisini yazdırın.

🔧 **Görev:** İki dizinin SIMD ile toplanması için `packed_simd::f32x8` kullanın.
