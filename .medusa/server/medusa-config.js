"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || "development", process.cwd());
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        redisUrl: process.env.REDIS_URL,
        workerMode: process.env.MEDUSA_WORKER_MODE,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
    },
    admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
        backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUU7QUFFakUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0FBRTdELE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUztRQUMvQixVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBeUM7UUFDakUsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVztZQUNsQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVU7WUFDaEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLGFBQWE7WUFDbEQsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWE7U0FDekQ7S0FDRjtJQUNELEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixLQUFLLE1BQU07UUFDcEQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0tBQzNDO0NBQ0YsQ0FBQyxDQUFBIn0=