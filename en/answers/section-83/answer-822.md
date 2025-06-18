## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: Custom Lints  
#### ✅ Answer 822: Writing custom lints with `clippy`

To write a custom lint with Clippy, you create a Clippy plugin crate. For example, a lint that warns on variables named "foo":

```rust
// In a clippy_lints crate
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

The lint is tested by running it on test code using Clippy's test infrastructure.
