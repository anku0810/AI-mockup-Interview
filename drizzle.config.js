/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai-interview_owner:rSFdYh92QVov@ep-curly-thunder-a5l07pf6.us-east-2.aws.neon.tech/ai-interview?sslmode=require' ,
  }
};
