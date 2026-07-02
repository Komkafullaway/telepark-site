export {};

declare global {
  interface Window {
    ym?: (
      counterId: number,
      action: "init" | "reachGoal",
      target: string,
      params?: Record<string, unknown>
    ) => void;
  }
}