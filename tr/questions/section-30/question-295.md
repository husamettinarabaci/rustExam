## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Büyük Projelerde Yol Kullanımı  
#### ❓ Soru 295: Büyük projelerde `crate::` ve `super::` yollarını kullanma

Aşağıdaki adımları izleyerek bir Rust projesinde `crate::` ve `super::` yollarının nasıl kullanıldığını gösteren bir örnek oluşturun:

- `lib.rs` veya ana dosyada `utils` adında bir modül tanımlayın ve içinde herkese açık bir fonksiyon (`pub fn greet()`) oluşturun.
- `features` adında bir üst modül ve bunun içinde `feature_a` adında bir alt modül tanımlayın.
- `feature_a` modülünde, `greet` fonksiyonunu hem `crate::utils::greet` hem de `super::super::utils::greet` ile çağıran bir fonksiyon yazın.
- `main` fonksiyonunda `features::feature_a::call_greet()` fonksiyonunu çağırarak çıktıyı gösterin.

🔧 **Görev:** Büyük projelerde farklı modül yolları ile fonksiyonlara erişmek için `crate::` ve `super::` anahtar kelimelerini kullanın.
