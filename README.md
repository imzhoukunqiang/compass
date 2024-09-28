# Compass

## 初次运行

初始化数据库，运行本地服务器
```bash
npx prisma migrate deploy
npx prisma generate
npm run dev
```

### Prisma 变更数据结构
修改`schema.prisma`数据库结构后:
1. 执行
```bash
npx prisma migrate dev --name {你做了什么操作}  --create-only
```

2. 检查`prisma/`生成的脚本是否有问题，如果有问题，手动修改。

3. 将实体变更apply到数据库
```bash
npx prisma migrate deploy
```

生成prisma实体
```bash
npx prisma generate
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
