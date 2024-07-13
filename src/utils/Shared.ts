export function nameof<T>(arg: T): string {
	return (arg as any).constructor.name;
}
