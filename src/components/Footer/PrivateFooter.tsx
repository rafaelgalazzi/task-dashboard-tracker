export function PrivateFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-footer text-white py-3 shadow-glow">
      <div className="max-w-7xl mx-auto px-2">
        © {year} Rafael Galazzi. All rights reserved.
      </div>
    </footer>
  );
}
