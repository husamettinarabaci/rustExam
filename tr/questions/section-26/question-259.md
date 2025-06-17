## 📘 Bölüm: Karmaşık Yapılarda Sahiplik  
### 🔹 Kategori: Esnek Sahiplik ve Cow  
#### ❓ Soru 259: Esnek sahiplik için `Cow` (Copy on Write) kullanma

Aşağıdaki adımları izleyerek bir Rust programı yazın:

- Hem sahip hem de ödünç alınmış veriyi tutabilen bir fonksiyon tanımlayın.
- `std::borrow::Cow` tipini kullanarak fonksiyona hem `&str` hem de `String` ile veri geçirin.
- Fonksiyon içinde gerekirse verinin kopyasını oluşturun (örneğin, tüm harfleri büyük yapın).
- Sahiplik ve kopyalama işlemlerinin nasıl çalıştığını gözlemleyin.

🔧 **Görev:** `Cow` kullanarak hem ödünç alınan hem de sahip olunan verilerle esnek bir fonksiyon yazın.
