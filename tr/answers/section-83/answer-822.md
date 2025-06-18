## 📘 Bölüm: Derleyici Eklentileri ve Özel Lintler  
### 🔹 Kategori: Özel Lintler  
#### ✅ Cevap 822: `clippy` ile özel lint yazma

Clippy ile özel lint yazmak için bir Clippy eklenti crate'i oluşturulur. Örneğin, "foo" isimli değişkenleri uyaracak bir lint:

```rust
// clippy_lints crate'inde
use rustc_lint::{LateLintPass, LateContext, LintContext};
use rustc_session::{declare_lint, declare_lint_pass};

declare_lint! { pub FOO_VAR, Warn, "Warns on variables named 'foo'" }
declare_lint_pass!(FooVar => [FOO_VAR]);

impl<'tcx> LateLintPass<'tcx> for FooVar {
    fn check_local(&mut self, cx: &LateContext<'tcx>, local: &'tcx rustc_hir::Local<'tcx>) {
        if let Some(ident) = local.pat.simple_ident() {
            if ident.as_str() == "foo" {
                cx.lint(FOO_VAR, |lint| lint.build("avoid 'foo' as variable name").emit());
            }
        }
    }
}
```

Lint, test kodunda çalıştırılarak test edilir. Clippy'nin kendi test altyapısı kullanılır.
