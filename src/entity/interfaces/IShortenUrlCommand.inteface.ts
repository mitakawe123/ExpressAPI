export interface IShortenUrlCommand {
	execute(originalUrl: string): Promise<void>;
}
