export class ApiResponse {
  constructor(
    private readonly data: any,
    private readonly success: boolean = true,
    private readonly message?: string
  ) {}
}
