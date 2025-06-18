## 📘 Bölüm: Fullstack WASM Uygulamaları
### 🔹 Kategori: WASM ve Ön Yüz Çerçeveleriyle Entegrasyon
#### ✅ Cevap 1290: WASM'i ön yüz çerçeveleriyle entegre etme

Bu soruda, Rust WASM modülünün modern bir frontend framework (ör. React) ile entegrasyonu gösterilir. WASM fonksiyonu JS üzerinden import edilir ve framework bileşeninde çağrılır.

```javascript
// React bileşeninde WASM fonksiyonu kullanımı
import React, { useState } from 'react';
import init, { greet } from 'wasm-pkg';

export default function App() {
  const [msg, setMsg] = useState('');
  React.useEffect(() => {
    init().then(() => setMsg(greet()));
  }, []);
  return <div>{msg}</div>;
}
```
// greet fonksiyonu Rust tarafında wasm-bindgen ile dışa aktarılmıştır.
