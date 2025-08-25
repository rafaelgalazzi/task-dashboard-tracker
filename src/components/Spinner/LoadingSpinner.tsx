export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <span className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
