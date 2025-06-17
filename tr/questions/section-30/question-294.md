## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Modül Yeniden Dışa Aktarma  
#### ❓ Soru 294: İç içe modüllerden öğeleri yeniden dışa aktarma

Aşağıdaki adımları izleyerek bir Rust projesinde iç içe modüllerden bir öğeyi dışa aktaran bir örnek oluşturun:

- `outer` adında bir üst modül ve bunun içinde `inner` adında bir alt modül tanımlayın.
- `inner` modülünde herkese açık bir fonksiyon (`pub fn hello()`) oluşturun.
- `outer` modülünde, `pub use self::inner::hello;` ile bu fonksiyonu yeniden dışa aktarın.
- `main` fonksiyonunda doğrudan `outer::hello()` çağrısı ile fonksiyonu kullanın.

🔧 **Görev:** İç içe modüllerde bir fonksiyonu yeniden dışa aktarmak için `pub use` anahtar kelimesini kullanın.
