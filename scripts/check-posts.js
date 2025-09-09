const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkPosts() {
  const posts = await prisma.blogPost.findMany({
    select: {
      title: true,
      published: true,
      slug: true
    }
  });
  console.log('All posts in database:');
  posts.forEach(post => {
    console.log(`- ${post.title}: Published=${post.published} (slug: ${post.slug})`);
  });
  await prisma.$disconnect();
}

checkPosts().catch(console.error);
