export default {
  port: 4000,
  baseUrl: "localhost",
  limiter: {
    timeWindow: 10 * 1000, // 10 seconds
    maximumRate: 5,
  }
}