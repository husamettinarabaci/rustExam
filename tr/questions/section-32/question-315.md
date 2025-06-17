## 📘 Bölüm: Traitler ve Trait Bound'lar  
### 🔹 Kategori: Varsayılan metot uygulamaları  
#### ❓ Soru 315: Traitlerde varsayılan metot uygulaması

Aşağıdakileri yapan bir Rust programı yazın:

- `Speak` adında bir trait tanımlayın ve içinde bir varsayılan metot (`speak`) implementasyonu verin.
- `Dog` adında bir struct tanımlayın ve `Speak` trait'ini `Dog` için uygulayın, ancak varsayılan metodu override etmeyin.
- `Cat` adında bir struct tanımlayın ve `Speak` trait'ini `Cat` için uygulayın, bu sefer varsayılan metodu kendi özel implementasyonunuzla override edin.
- `main` fonksiyonunda bir `Dog` ve bir `Cat` oluşturun ve her ikisi için de `speak` metodunu çağırın.

🔧 **Görev:** Traitlerde varsayılan metot implementasyonunun nasıl çalıştığını ve nasıl override edilebileceğini gösterin.
