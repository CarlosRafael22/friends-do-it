export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  const baseStyle = 'text-foreground border-l-2 border-foreground p-4 rounded-sm mb-4';
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className={`${baseStyle} border-green-600 bg-green-200`}>
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className={`${baseStyle} border-red-600 bg-red-200`}>
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className={`${baseStyle} border-blue-600 bg-blue-200`}>
          {message.message}
        </div>
      )}
    </div>
  );
}
