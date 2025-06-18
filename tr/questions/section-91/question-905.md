## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: SIMD performans kazançlarını profil etme
#### ❓ Soru 905: SIMD performans kazançlarını profil etme

Aşağıdaki adımları izleyen bir Rust programı yazın:

- 1.000.000 elemanlı iki büyük `f32` dizisi oluşturun.
- Bunları sıradan bir döngüyle eleman bazında toplayıp süreyi ölçün.
- Aynı işlemi `packed_simd` ile SIMD kullanarak yapıp süreyi ölçün.
- Her iki yöntemin süresini karşılaştırmalı olarak yazdırın.

🔧 **Görev:** Zaman ölçümü için `std::time::Instant` kullanın ve SIMD ile normal toplama arasındaki farkı gösterin.
