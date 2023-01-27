export function auditLog<T extends { format(): string }>(
  subject: T,
  action: string
): void {
  console.log(`[${subject.format()}]: ${action}`);
}