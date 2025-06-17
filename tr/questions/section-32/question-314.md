## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: where ile trait bound yazımı  
#### ❓ Soru 314: where ifadesiyle trait bound kullanımı

Aşağıdakileri yapan bir Rust programı yazın:

- `Speak` ve `Run` adında iki trait tanımlayın, her birinde bir metot (`speak` ve `run`) olsun.
- Bu trait'leri `Dog` adlı bir struct için uygulayın.
- Parametresi hem `Speak` hem de `Run` trait'lerini gerektiren bir generic fonksiyon yazın. Trait bound'ları fonksiyon imzasında `where` ifadesiyle belirtin.
- `main` fonksiyonunda bir `Dog` oluşturun ve generic fonksiyonu çağırın.

🔧 **Görev:** where ifadesiyle birden fazla trait bound'unu generic fonksiyonda nasıl kullanacağınızı gösterin ve bir struct için uygulayın.
