## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Birden Fazla Trait Bound Kullanımı  
#### ❓ Soru 313: `+` ile birden fazla trait bound kullanımı

Aşağıdakileri yapın:

- `Speak` ve `Run` adında iki trait tanımlayın. Her birinde birer metot (`speak`, `run`) bulunsun.
- Bir jenerik fonksiyon tanımlayın: Bu fonksiyon, parametre olarak hem `Speak` hem de `Run` traitlerini uygulayan bir tür alsın.
- Fonksiyon, aldığı parametrenin hem `speak` hem de `run` metodunu çağırsın.
- `Dog` adında bir struct oluşturun ve her iki traiti de uygulayın.
- `Dog` örneğini jenerik fonksiyona göndererek hem "Hav hav!" hem de "Koşuyor!" çıktısı alın.

🔧 **Görev:** Birden fazla trait bound ile jenerik fonksiyon yazın ve iki trait'i uygulayan bir struct ile kullanın.
